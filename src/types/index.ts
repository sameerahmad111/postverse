// src/types/index.ts
// This file defines the "shape" of our data using TypeScript interfaces
// Think of interfaces like a template or blueprint for objects

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;   // Optional - shown as strikethrough price
  description: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;           // Optional - like "New", "Sale", "Hot"
  featured?: boolean;       // Optional - show on homepage
}

export interface CartItem extends Product {
  quantity: number;         // How many of this product in cart
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
