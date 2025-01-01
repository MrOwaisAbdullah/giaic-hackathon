import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProductCards {
  _id: string;
  title: string;
  price: number;
  oldPrice?: number;
  featuredImage: SanityImageSource;
  isDiscounted: boolean;
  isNew: boolean;
  description: string;
  slug: {
    current: string | null;
  }
}

interface ProductsSectionProps {
  limit?: number;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  featuredImage: SanityImageSource;
  description: string;
}

interface CartState {
  cart: Product[];
}

type CartAction =
  | { type: "SET_CART"; cart: Product[] }
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };
