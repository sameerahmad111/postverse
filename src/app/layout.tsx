// src/app/layout.tsx
// This is the ROOT LAYOUT - it wraps every single page.
// Fonts, global styles, and the CartProvider live here.

import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// SEO metadata - shows in browser tab and Google search results
export const metadata: Metadata = {
  title: "PosterVerse – Premium Posters & Wall Art",
  description:
    "Shop premium anime, gaming, car, nature, and Islamic wall art posters. Beautiful prints delivered to your door.",
  keywords: "posters, wall art, anime posters, gaming posters, Islamic art, canvas prints",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Google Fonts loaded here - Playfair Display for headings, DM Sans for body */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-dark-900 text-white antialiased">
        {/* CartProvider wraps everything so ALL pages can access the cart */}
        <CartProvider>
          <Navbar />
          {/* min-h-screen ensures the footer always stays at the bottom */}
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
