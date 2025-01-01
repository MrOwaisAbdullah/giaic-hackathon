import { client } from "@/sanity/lib/client";
import { Product } from "@/typing";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { cart }: { cart: Product[] } = await req.json();
  
    // Fetch product details from Sanity
    const productIds = cart.map((item) => item._id)
    const products = await client.fetch(
      `*[_type == "product" && _id in $productIds]`,
      { productIds }
    );
  
    // Validate the cart
    const validatedCart = cart.map((item) => {
      const product = products.find((p: { _id: string; }) => p._id === item._id);
      if (product) {
        return {
          ...item,
          price: product.price, // Overwrite price to match the database
        };
      }
      return null; // Remove invalid items
    }).filter(Boolean);
  
    return NextResponse.json(validatedCart);
  }