// src/components/Footer.tsx
import Link from "next/link";
import { Sparkles, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-display text-xl font-bold">
                Poster<span className="text-orange-500">Verse</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Premium wall art for every aesthetic. From anime legends to minimalist masterpieces — 
              elevate your space with PosterVerse.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-dark-700 border border-dark-500 rounded-lg flex items-center justify-center 
                             text-gray-500 hover:text-orange-500 hover:border-orange-500/30 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Categories</h4>
            <ul className="space-y-2">
              {["Anime Posters", "Gaming Posters", "Islamic Wall Art", "Car Posters", "Nature Prints", "Motivational"].map(
                (cat) => (
                  <li key={cat}>
                    <Link
                      href="/shop"
                      className="text-gray-500 hover:text-orange-400 text-sm transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">
              Get new arrivals and exclusive deals in your inbox.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-field pl-9 text-sm py-2.5"
                />
              </div>
              <button className="btn-primary py-2.5 px-4 text-sm whitespace-nowrap">Join</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 PosterVerse. All rights reserved. University Project Demo.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
