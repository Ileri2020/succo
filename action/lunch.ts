"use server";

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getUserLunches() {
  const session = await auth();
  if (!session?.user?.id) {
    return [];
  }

  const userId = session.user.id;

  try {
    const lunches = await prisma.cart.findMany({
      where: {
        userId,
        type: "lunch",
      },
      include: {
        products: {
            include: {
                product: true
            }
        },
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });
    return lunches;
  } catch (error) {
    console.error("Error fetching lunches:", error);
    return [];
  }
}

export async function createLunch(name: string, initialProductId?: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");
    
    const userId = session.user.id;

    try {
        const data: any = {
            userId,
            name,
            type: "lunch",
            total: 0,
            status: "active"
        };

        if (initialProductId) {
            data.products = {
                create: [
                    {
                        productId: initialProductId,
                        quantity: 1
                    }
                ]
            };
        }

        const newLunch = await prisma.cart.create({
            data
        });
        
        revalidatePath("/lunch");
        return { success: true, lunch: newLunch };
    } catch (error) {
        console.error("Error creating lunch:", error);
        return { success: false, error: "Failed to create lunch" };
    }
}

export async function addToLunch(lunchId: string, productId: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    try {
        // Check if item exists in this lunch
        const existingItem = await prisma.cartItem.findFirst({
            where: {
                cartId: lunchId,
                productId: productId
            }
        });

        if (existingItem) {
            await prisma.cartItem.update({
                where: { id: existingItem.id },
                data: { quantity: existingItem.quantity + 1 }
            });
        } else {
            await prisma.cartItem.create({
                data: {
                    cartId: lunchId,
                    productId: productId,
                    quantity: 1
                }
            });
        }
        
        revalidatePath("/lunch");
        return { success: true };
    } catch (error) {
        console.error("Error adding to lunch:", error);
        return { success: false, error: "Failed to add to lunch" };
    }
}

export async function updateLunchItemQuantity(itemId: string, quantity: number) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");
    
    try {
        if (quantity <= 0) {
            await prisma.cartItem.delete({
                where: { id: itemId }
            });
        } else {
            await prisma.cartItem.update({
                where: { id: itemId },
                data: { quantity }
            });
        }
        revalidatePath("/lunch");
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function renameLunch(lunchId: string, name: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    try {
        await prisma.cart.update({
            where: { id: lunchId },
            data: { name }
        });
        revalidatePath("/lunch");
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function addLunchToCart(lunchId: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");
    const userId = session.user.id;

    try {
        const lunch = await prisma.cart.findUnique({
            where: { id: lunchId },
            include: { products: true }
        });
        
        if (!lunch) throw new Error("Lunch not found");

        // Find or create main cart
        let mainCart = await prisma.cart.findFirst({
            where: { userId, type: "cart", status: "pending" }
        });

        if (!mainCart) {
            mainCart = await prisma.cart.create({
                data: {
                    userId,
                    type: "cart",
                    status: "pending",
                    total: 0
                }
            });
        }

        // Add items
        for (const item of lunch.products) {
            const existing = await prisma.cartItem.findFirst({
                where: { cartId: mainCart.id, productId: item.productId }
            });
            
            if (existing) {
                await prisma.cartItem.update({
                    where: { id: existing.id },
                    data: { quantity: existing.quantity + item.quantity }
                });
            } else {
                await prisma.cartItem.create({
                    data: {
                        cartId: mainCart.id,
                        productId: item.productId,
                        quantity: item.quantity
                    }
                });
            }
        }
        
        revalidatePath("/cart"); // assumption
        return { success: true };
    } catch (error) {
        console.error("Error moving lunch to cart", error);
        return { success: false, error: "Failed to move to cart" };
    }
}
