"use client";
// src/app/page.tsx
// THE HOMEPAGE - This is what visitors see first.
// Sections: Hero → Categories → Featured → Trending → Why Us → Testimonials → Newsletter

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, Star, ShieldCheck, Truck, RefreshCw,
  Headphones, ChevronRight, Sparkles, Zap
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, products, formatPrice } from "@/lib/products";

// Animation helper: fade in from below
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  // Show first 8 products as "trending"
  const trendingProducts = products.slice(0, 8);

  return (
    <div className="overflow-x-hidden">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient blobs for atmosphere */}
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="text-center lg:text-left"
            >
              {/* Announcement badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Zap size={14} className="text-orange-500" />
                <span className="text-orange-400 text-sm font-medium">Free shipping on orders over Rs. 3,000</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Art That
                <br />
                <span className="gradient-text">Transforms</span>
                <br />
                Your Space
              </motion.h1>

              {/* Subheadline */}
              <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Premium posters and wall art for every aesthetic. Anime legends,
                gaming icons, Islamic calligraphy, and more — delivered to your door.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/shop" className="btn-primary flex items-center justify-center gap-2 text-base">
                  Shop Collection
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="btn-secondary flex items-center justify-center gap-2 text-base">
                  Learn More
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-display">500+</div>
                  <div className="text-xs text-gray-500">Products</div>
                </div>
                <div className="w-px h-10 bg-dark-600" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-display">2K+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
                <div className="w-px h-10 bg-dark-600" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                  <span className="text-white font-semibold ml-1">4.9</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main large image */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl" />
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Left column */}
                  <div className="flex flex-col gap-4">
                    <div className="flex-1 rounded-2xl overflow-hidden bg-dark-700 glow-orange">
                      <Image
                        src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80"
                        alt="Anime Poster"
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-32 rounded-2xl overflow-hidden bg-dark-700">
                      <Image
                        src="https://images.unsplash.com/photo-1585036156171-384164a8c675?w=300&q=80"
                        alt="Islamic Art"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Right column (offset) */}
                  <div className="flex flex-col gap-4 pt-8">
                    <div className="h-32 rounded-2xl overflow-hidden bg-dark-700">
                      <Image
                        src="https://images.unsplash.com/photo-1563207153-f403bf289096?w=300&q=80"
                        alt="Gaming Poster"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden bg-dark-700">
                      <Image
                        src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80"
                        alt="Car Poster"
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORIES SECTION
          ============================================================ */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-gray-500">Find the perfect poster for your vibe</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Anime", icon: "⛩️", count: 4, color: "from-red-500/20 to-orange-500/20" },
              { name: "Gaming", icon: "🎮", count: 4, color: "from-blue-500/20 to-purple-500/20" },
              { name: "Cars", icon: "🚗", count: 3, color: "from-yellow-500/20 to-orange-500/20" },
              { name: "Nature", icon: "🌿", count: 3, color: "from-green-500/20 to-teal-500/20" },
              { name: "Islamic", icon: "☪️", count: 3, color: "from-emerald-500/20 to-green-500/20" },
              { name: "Motivational", icon: "💪", count: 3, color: "from-orange-500/20 to-pink-500/20" },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={`/shop?category=${cat.name}`}
                  className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${cat.color} 
                             border border-dark-500 hover:border-orange-500/40 transition-all duration-300 
                             hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 text-center`}
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{cat.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{cat.count} items</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED PRODUCTS
          ============================================================ */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-2 text-orange-500 text-sm font-mono mb-2">
                <Sparkles size={14} />
                <span>Handpicked for you</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Featured <span className="gradient-text">Posters</span>
              </h2>
            </motion.div>
            <Link href="/shop" className="hidden sm:flex items-center gap-1 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TRENDING NOW - Horizontal scroll on mobile
          ============================================================ */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-2 text-orange-500 text-sm font-mono mb-2">
                <Zap size={14} />
                <span>Most loved this week</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Trending <span className="gradient-text">Now</span>
              </h2>
            </motion.div>
            <Link href="/shop" className="flex items-center gap-1 text-orange-500 hover:text-orange-400 text-sm font-medium">
              See All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US
          ============================================================ */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Why Choose <span className="gradient-text">PosterVerse?</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We're not just another poster shop. We're art curators bringing premium wall art to Pakistan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Premium Quality", desc: "Museum-grade printing on thick matte paper. Colors that stay vivid for years.", color: "text-green-400" },
              { icon: Truck, title: "Fast Delivery", desc: "Nationwide delivery in 3-5 business days. Free for orders above Rs. 3,000.", color: "text-blue-400" },
              { icon: RefreshCw, title: "Easy Returns", desc: "Not happy? Return within 7 days, no questions asked.", color: "text-purple-400" },
              { icon: Headphones, title: "24/7 Support", desc: "Real humans ready to help on WhatsApp, email, or Instagram.", color: "text-orange-400" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Ahmed Raza", location: "Lahore", review: "Got the Bismillah calligraphy poster for our lounge. The quality is absolutely stunning. Everyone who visits asks where we got it from!", rating: 5, product: "Bismillah Calligraphy" },
              { name: "Sara Khan", location: "Karachi", review: "I ordered the Naruto and Dark Souls posters for my gaming room. They look even better in real life than on the website. Super fast delivery too!", rating: 5, product: "Anime & Gaming Posters" },
              { name: "Usman Ali", location: "Islamabad", review: "The Supra MK4 poster is a masterpiece. Print quality is premium, colors are vivid, and the packaging was perfect. Highly recommend PosterVerse!", rating: 5, product: "JDM Legends Supra" },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-gray-600 text-xs">{t.location}</p>
                  </div>
                  <span className="text-xs text-orange-500 font-mono bg-orange-500/10 px-2 py-1 rounded-full">
                    {t.product}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NEWSLETTER SECTION
          ============================================================ */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden bg-gradient-to-br from-orange-500/15 to-orange-600/5 
                       border border-orange-500/20 rounded-3xl p-10 md:p-16 text-center"
          >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={14} className="text-orange-400" />
                <span className="text-orange-400 text-sm">Join 1,000+ subscribers</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Get New Arrivals &{" "}
                <span className="gradient-text">Exclusive Deals</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Be the first to know about new collections, limited editions, and subscriber-only discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="input-field flex-1"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
