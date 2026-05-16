"use client";
// src/app/cart/page.tsx
// THE CART PAGE - Shows all items in cart with quantity controls and order summary

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  // Calculate totals
  const shipping = cartTotal >= 3000 ? 0 : 250;
  const grandTotal = cartTotal + shipping;

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-24 h-24 bg-dark-800 border border-dark-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <ShoppingCart size={36} className="text-gray-600" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            Looks like you haven't added any posters yet. Explore our collection and find your perfect wall art!
          </p>
          <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
            Start Shopping <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 md:py-12">
          <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 text-sm">
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Your <span className="gradient-text">Cart</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">{cartCount} item{cartCount !== 1 ? "s" : ""}</span>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-red-400 text-xs font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ===== LEFT: Cart Items List ===== */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-4 md:p-6 flex gap-5"
                >
                  {/* Product image */}
                  <Link href={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="relative w-20 h-28 md:w-28 md:h-36 rounded-xl overflow-hidden bg-dark-700">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-orange-500 font-mono text-xs">{item.category}</span>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-semibold text-white mt-1 mb-2 leading-snug hover:text-orange-400 transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-dark-700 border border-dark-500 rounded-xl px-3 py-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white transition-colors p-0.5"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-white font-semibold w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white transition-colors p-0.5"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price and remove */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-white font-bold">{formatPrice(item.price * item.quantity)}</p>
                          {item.quantity > 1 && (
                            <p className="text-gray-600 text-xs">{formatPrice(item.price)} each</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-600 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ===== RIGHT: Order Summary ===== */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-4 pb-4 border-b border-dark-600">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal ({cartCount} items)</span>
                  <span className="text-white">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : "text-white"}>
                    {shipping === 0 ? "FREE 🎉" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-600">
                    Add {formatPrice(3000 - cartTotal)} more for free shipping!
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-white">Total</span>
                <span className="font-display text-2xl font-bold text-white">{formatPrice(grandTotal)}</span>
              </div>

              {/* Coupon code (demo - doesn't actually work) */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="input-field text-sm py-2.5"
                />
                <button className="btn-secondary text-sm py-2.5 px-4 whitespace-nowrap">Apply</button>
              </div>

              {/* Checkout button */}
              <button className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4 mb-4">
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-gray-600 mb-4">
                This is a demo — no real payment will be processed
              </p>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-dark-600">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <ShieldCheck size={14} className="text-green-500" />
                  Secure Checkout
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <Truck size={14} className="text-blue-400" />
                  Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
