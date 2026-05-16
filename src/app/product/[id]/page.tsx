"use client";
// src/app/product/[id]/page.tsx
// PRODUCT DETAIL PAGE
// [id] is a dynamic route - the product ID comes from the URL
// e.g., /product/1 shows the product with id: 1

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShoppingCart, Star, ArrowLeft, Check, Truck, RefreshCw,
  ShieldCheck, Minus, Plus, Heart, Share2
} from "lucide-react";
import { getProductById, products, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = getProductById(productId);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // If product not found, show 404-style message
  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center gap-4">
        <h1 className="font-display text-3xl font-bold">Product Not Found</h1>
        <p className="text-gray-500">This poster doesn't exist in our collection.</p>
        <Link href="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  // Handle add to cart with quantity
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Calculate discount percentage
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 py-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-white transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-400 truncate max-w-xs">{product.name}</span>
        </div>

        {/* Back button */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* ===== LEFT: Product Image ===== */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-dark-800 border border-dark-600">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}
              {discount > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                    -{discount}% OFF
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* ===== RIGHT: Product Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Category */}
            <span className="text-orange-500 font-mono text-sm font-medium mb-3">{product.category}</span>

            {/* Product name */}
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "text-orange-400 fill-orange-400" : "text-gray-700"}
                  />
                ))}
              </div>
              <span className="text-white font-semibold">{product.rating}</span>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 text-xl line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {discount > 0 && (
                <span className="bg-green-500/15 text-green-400 text-sm font-medium px-2 py-0.5 rounded-lg">
                  Save {formatPrice(product.originalPrice! - product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-400 text-sm">Quantity:</span>
              <div className="flex items-center gap-3 bg-dark-700 border border-dark-500 rounded-xl px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-white font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-base transition-all ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
                }`}
              >
                {added ? <Check size={20} /> : <ShoppingCart size={20} />}
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${
                  wishlisted
                    ? "bg-red-500/10 border-red-500/30 text-red-500"
                    : "bg-dark-700 border-dark-500 text-gray-400 hover:border-orange-500/30 hover:text-orange-400"
                }`}
              >
                <Heart size={20} className={wishlisted ? "fill-current" : ""} />
              </button>
              <button className="w-14 h-14 rounded-2xl bg-dark-700 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-dark-600">
              {[
                { icon: Truck, label: "Fast Delivery", sub: "3-5 business days" },
                { icon: RefreshCw, label: "Easy Returns", sub: "7-day return policy" },
                { icon: ShieldCheck, label: "Secure Order", sub: "100% safe checkout" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-1.5 p-3 bg-dark-800 rounded-xl">
                  <badge.icon size={18} className="text-orange-500" />
                  <p className="text-white text-xs font-medium">{badge.label}</p>
                  <p className="text-gray-600 text-xs">{badge.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              You Might Also <span className="gradient-text">Like</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
