import { SanityImageSource } from "@sanity/image-url/lib/types/types";


interface Products {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  image: SanityImageSource | null;
  description?: string;
  slug?: {
    current: string | null;
  }
  quantity?: number; 
}

interface ProductCards {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  image: SanityImageSource | null;
  isDiscounted: boolean;
  isNew: boolean;
  slug: {
    current: string | null;
  };
  quantity?: number;
  category: { _id: string; title: string };
  tags?: string[];
  seller: { _id: string }; 
  inventory: number;
}

interface ProductsSectionProps {
  limit?: number;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  quantity?: number;
  image: SanityImageSource | null;
  description?: string; 
}

interface CartState {
  cart: Products[];
}

type CartAction =
  | { type: "SET_CART"; cart: Products[] }
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };

  interface ShippingDetails {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  }
  
  interface Payments {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

interface PaymentResult {
  success: boolean;
  transactionId: string;
}

interface Order {
  id: string;
  cart: Products[];
  shipping: ShippingDetails;
  payment: Payments;
}

interface Seller {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  logo?: SanityImageSource;
  products?: { _ref: string }[]; // Array of product references
}