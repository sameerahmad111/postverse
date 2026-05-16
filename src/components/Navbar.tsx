"use client";
// src/components/Navbar.tsx
// The navigation bar that appears at the top of every page.
// Includes: Logo, Nav links, Search bar, Cart icon, Mobile menu

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";
import { Product } from "@/types";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { cartCount } = useCart();
  const pathname = usePathname();

  // Change navbar background when user scrolls down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Live search: filter products as user types
  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 5)); // Show max 5 results
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/95 backdrop-blur-md border-b border-dark-600"
            : "bg-transparent"
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ===== LOGO ===== */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-display text-xl font-bold">
                Poster<span className="text-orange-500">Verse</span>
              </span>
            </Link>

            {/* ===== DESKTOP NAV LINKS ===== */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-orange-500 bg-orange-500/10"
                      : "text-gray-400 hover:text-white hover:bg-dark-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ===== DESKTOP ACTION ICONS ===== */}
            <div className="hidden md:flex items-center gap-2">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-colors"
              >
                <Search size={20} />
              </button>

              {/* Cart button with item count badge */}
              <Link
                href="/cart"
                className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-dark-700 transition-colors"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs 
                               font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </div>

            {/* ===== MOBILE ICONS ===== */}
            <div className="flex md:hidden items-center gap-2">
              <Link href="/cart" className="relative p-2 text-gray-400 hover:text-white">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* ===== SEARCH BAR (slides down when search icon clicked) ===== */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pb-4"
              >
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search posters, anime, gaming..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>
                {/* Search results dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute left-4 right-4 mt-2 bg-dark-800 border border-dark-600 rounded-xl overflow-hidden z-50">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-dark-700 transition-colors"
                      >
                        <div className="text-xs text-orange-500 font-mono bg-orange-500/10 px-2 py-1 rounded">
                          {product.category}
                        </div>
                        <span className="text-sm text-gray-300">{product.name}</span>
                        <span className="ml-auto text-sm text-orange-400 font-medium">
                          Rs. {product.price.toLocaleString()}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ===== MOBILE MENU (slides down on mobile) ===== */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-dark-600 px-4 py-6"
            >
              {/* Mobile search */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search posters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-10 text-sm"
                />
              </div>
              {/* Mobile nav links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "text-orange-500 bg-orange-500/10"
                        : "text-gray-300 hover:text-white hover:bg-dark-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
