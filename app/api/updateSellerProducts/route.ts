// app/api/updateSellerProducts/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid"; // For generating unique keys

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { _id: productId, seller } = body;

    if (!productId || !seller?._ref) {
      return NextResponse.json(
        { message: "Missing productId or sellerId" },
        { status: 400 }
      );
    }

    // Add the product to the seller's `products` array with a unique _key
    await client
      .patch(seller._ref) // Seller ID
      .setIfMissing({ products: [] })
      .append("products", [
        {
          _type: "reference",
          _ref: productId,
          _key: nanoid(), // Generate a unique key
        },
      ])
      .commit();

    return NextResponse.json(
      { message: "Seller products updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating seller products:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}