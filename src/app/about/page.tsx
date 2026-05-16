"use client";
// src/app/about/page.tsx

import { motion } from "framer-motion";
import { Sparkles, Target, Heart, Users, Award, Palette } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-orange-500" />
              <span className="text-orange-400 text-sm">Our Story</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold mb-6">
              We Believe Art Should Be <br />
              <span className="gradient-text">Accessible to Everyone</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              PosterVerse was born from a simple idea: every wall deserves something beautiful.
              We curate and print premium posters that transform ordinary rooms into extraordinary spaces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark-800/50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Unique Designs" },
              { number: "2,000+", label: "Happy Customers" },
              { number: "50+", label: "Cities Delivered" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 glass-card"
              >
                <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Mission & Values</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To make premium wall art accessible across Pakistan — from anime fans to interior design lovers. We believe your walls tell your story.", color: "text-orange-400" },
              { icon: Heart, title: "Our Passion", desc: "Every poster in our collection is handpicked by art lovers. We only sell what we'd proudly hang on our own walls.", color: "text-red-400" },
              { icon: Users, title: "Our Community", desc: "We're building a community of art enthusiasts. From Discord servers to Instagram reposting your setups — we celebrate our customers.", color: "text-blue-400" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-dark-700 flex items-center justify-center mx-auto mb-5 ${item.color}`}>
                  <item.icon size={26} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Ali Hassan", role: "Founder & Art Director", emoji: "🎨" },
              { name: "Zara Ahmed", role: "Head of Design", emoji: "✨" },
              { name: "Omar Sheikh", role: "Customer Experience", emoji: "🤝" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                  {member.emoji}
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Premium Quality Guaranteed", desc: "We use top-grade 300gsm matte paper with UV-resistant inks that keep colors vivid for 25+ years.", color: "text-yellow-400" },
              { icon: Palette, title: "Artist Collaborations", desc: "We work with local Pakistani artists and illustrators to bring exclusive original artwork to your walls.", color: "text-purple-400" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex gap-6 items-start"
              >
                <div className={`w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
