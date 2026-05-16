"use client";
// src/context/CartContext.tsx
// ============================================================
// The CART SYSTEM lives here.
// React Context lets us share cart data across ALL pages
// without passing it manually through every component.
// ============================================================

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types";

// Define what our cart "context" can do
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

// Create the context (starts as undefined until Provider wraps the app)
const CartContext = createContext<CartContextType | undefined>(undefined);

// The Provider component wraps our entire app and provides cart state
export function CartProvider({ children }: { children: React.ReactNode }) {
  // cartItems is our array of products in the cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage when app first loads (so cart persists on refresh)
  useEffect(() => {
    const saved = localStorage.getItem("posterverse-cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  // Save cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("posterverse-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART: if product already in cart, increase quantity. Otherwise add it.
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Product already in cart → just increase quantity
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // New product → add to cart with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // REMOVE FROM CART: filter out the item with matching id
  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // UPDATE QUANTITY: change how many of a specific item
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  // CLEAR CART: empty everything
  const clearCart = () => setCartItems([]);

  // Total number of items in cart (for the badge on the cart icon)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Total price of everything in cart
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook: use this in any component to access the cart
// Example: const { addToCart, cartCount } = useCart();
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
