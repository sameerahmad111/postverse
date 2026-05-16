"use client";
// src/components/ProductCard.tsx
// A reusable card component used on the homepage and shop page.
// Pass a product object as a prop and it renders beautifully.

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number; // Used for stagger animation delay
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // Show "Added!" feedback for 1.5 seconds after clicking Add to Cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product page when clicking cart button
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      // Stagger animation: each card fades in slightly after the previous one
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="glass-card card-glow overflow-hidden">
          {/* ===== PRODUCT IMAGE ===== */}
          <div className="relative aspect-[3/4] overflow-hidden bg-dark-700">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover - shows Add to Cart button */}
            <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 hover:bg-orange-400 text-white"
                }`}
              >
                <ShoppingCart size={15} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            {/* Badge (e.g., "Best Seller", "Sale") */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Wishlist heart button */}
            <button
              onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
              className="absolute top-3 right-3 w-8 h-8 bg-dark-900/70 backdrop-blur-sm rounded-full 
                         flex items-center justify-center transition-colors"
            >
              <Heart
                size={14}
                className={wishlisted ? "text-red-500 fill-red-500" : "text-gray-400"}
              />
            </button>
          </div>

          {/* ===== PRODUCT INFO ===== */}
          <div className="p-4">
            {/* Category tag */}
            <span className="text-xs text-orange-500 font-mono font-medium">{product.category}</span>

            {/* Product name */}
            <h3 className="font-semibold text-white text-sm mt-1 mb-2 line-clamp-2 leading-snug">
              {product.name}
            </h3>

            {/* Star rating */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? "text-orange-400 fill-orange-400" : "text-gray-700"}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>

            {/* Price row */}
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-white font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-gray-600 text-xs line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>

              {/* Mobile add to cart (since overlay doesn't work on touch devices) */}
              <button
                onClick={handleAddToCart}
                className="md:hidden w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"
              >
                <ShoppingCart size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
