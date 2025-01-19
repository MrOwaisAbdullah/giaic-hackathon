import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";
import { ProductCards, Seller } from "@/typing";

interface WebhookBody {
  document: {
    oldPrice: number;
    _id: string;
  };
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

//Fetch Products
export async function getProducts(): Promise<ProductCards[]> {
  const query = `*[_type == "products"]{
    price,
    image,
    title,
    slug,
    _id,
    priceWithoutDiscount,
    "isDiscounted": priceWithoutDiscount > 0,
    "isNew": dateTime(createdAt) > dateTime(now()) - 7 * 24 * 60 * 60 * 1000,
    category->{ _id, title }, 
    tags,
    inventory,
    seller->{_id, name}
  }`
  const result = await client.fetch(query);
  return result;
}

//Fetch Categories
export async function getCategories(): Promise<string[]> {
  const query = `*[_type == "categories" ]{
  image,
    title,
    _id
}`;
  const result = await client.fetch(query);
  return result.map((cat: { title: string }) => cat.title);
}

//Fetch Sellers
export async function getSellers(): Promise<Seller[]> {
  const query = `*[_type == "seller"]{
    _id,
    name,
  }`;
  const result = await client.fetch(query);
  return result;
}

// Update Discount Fields
export default async function updateDiscountedField(
  req: { body: WebhookBody },
  res: { status: (code: number) => { send: (message: string) => void } }
) {
  const { body } = req;
  const { oldPrice, _id } = body?.document;

  if (oldPrice && oldPrice > 0) {
    await client.patch(_id).set({ isDiscounted: true }).commit();
  } else {
    await client.patch(_id).set({ isDiscounted: false }).commit();
  }

  res.status(200).send("Discount field updated");
}
