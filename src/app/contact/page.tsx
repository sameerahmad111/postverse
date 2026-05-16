"use client";
// src/app/contact/page.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Instagram, Twitter } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // In a real project you'd send this to an API
    // For now, just show a success message
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
        <div className="container-max relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-lg">
              Have a question, custom order request, or just want to say hi? We'd love to hear from you!
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email Us", value: "hello@posterverse.pk", sub: "Reply within 24 hours", color: "text-orange-400" },
                { icon: Phone, title: "WhatsApp", value: "+92 300 1234567", sub: "Mon-Sat, 10am-8pm", color: "text-green-400" },
                { icon: MapPin, title: "Based In", value: "Lahore, Pakistan", sub: "Shipping nationwide", color: "text-blue-400" },
                { icon: MessageSquare, title: "Social Media", value: "@PosterVerse", sub: "DM us on Instagram", color: "text-pink-400" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl bg-dark-700 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                    <p className={`font-medium text-sm mt-0.5 ${item.color}`}>{item.value}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="glass-card p-5"
              >
                <p className="text-gray-500 text-sm mb-3">Follow us for new arrivals & setups:</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Twitter, label: "Twitter" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="flex items-center gap-2 bg-dark-700 border border-dark-500 hover:border-orange-500/30 hover:text-orange-400 text-gray-400 rounded-lg px-3 py-2 text-sm transition-colors"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8"
              >
                {submitted ? (
                  // Success state
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                      <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thanks {formData.name || "there"}! We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  // Form
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ahmed Raza"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ahmed@example.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input-field"
                      >
                        <option value="">Select a topic...</option>
                        <option value="order">Order Inquiry</option>
                        <option value="custom">Custom Order Request</option>
                        <option value="return">Return / Refund</option>
                        <option value="general">General Question</option>
                        <option value="collab">Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Message</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        className="input-field resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                    >
                      <Send size={18} />
                      Send Message
                    </button>

                    <p className="text-center text-xs text-gray-600">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
