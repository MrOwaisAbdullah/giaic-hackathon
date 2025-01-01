"use client";

import React, { createContext, useReducer, useContext, useEffect, ReactNode } from "react";
import { CartAction, CartState } from "@/typing";

// Add types for context value
interface CartContextValue {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  // Add helpful computed values
  totalItems: number;
  totalPrice: number;
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "SET_CART":
      return { cart: action.cart };

    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item._id === action.product._id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        const existingItem = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + action.product.quantity,
        };
        return { ...state, cart: updatedCart };
      }

      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.id),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.id 
            ? { ...item, quantity: Math.max(0, action.quantity) }
            : item
        ),
      };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
};

// Initialize context with undefined
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Add loading state management
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (initialState) => {
      if (typeof window !== "undefined") {
        try {
          const storedCart = localStorage.getItem("cart");
          return storedCart ? { cart: JSON.parse(storedCart) } : initialState;
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
          return initialState;
        }
      }
      return initialState;
    }
  );

  // Calculate totals
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state.cart]);

  const contextValue: CartContextValue = {
    state,
    dispatch,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};