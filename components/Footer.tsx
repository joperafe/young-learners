"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red mb-2">IH Braga</h4>
                <p className="text-gray-300 leading-relaxed">
                  R. do Anjo 90<br />
                  4700-305 Braga, Portugal
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Phone:</span> +351 253 123 456
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Email:</span> conference@ihbraga.com
                </p>
              </div>
              <div>
                <a
                  href="https://www.ihbraga.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red hover:text-red/80 transition-colors duration-200 font-semibold"
                >
                  Visit ihbraga.com →
                </a>
              </div>
            </div>
          </div>

          {/* Conference Details */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Conference Details
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red mb-2">Dates</h4>
                <p className="text-gray-300">March 15–16, 2025</p>
              </div>
              <div>
                <h4 className="font-semibold text-red mb-2">Registration</h4>
                <p className="text-gray-300 leading-relaxed">
                  Early bird registration opens January 2025. 
                  Limited seats available.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-red mb-2">Languages</h4>
                <p className="text-gray-300">English, Portuguese</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Follow Us
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Stay updated with conference news and announcements
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/ihbraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-red/20 p-3 rounded-lg transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-red transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/ihbraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-red/20 p-3 rounded-lg transition-colors duration-200 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-red transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297L3.74 16.988h-2.26V7.576h2.26v5.294c.684-.684 1.614-1.108 2.613-1.108 2.062 0 3.746 1.684 3.746 3.746s-1.684 3.48-3.65 3.48zm7.424 0c-1.297 0-2.448-.49-3.326-1.297l-1.383 1.297h-2.26V7.576h2.26v5.294c.684-.684 1.614-1.108 2.613-1.108 2.062 0 3.746 1.684 3.746 3.746s-1.684 3.48-3.65 3.48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 IH Braga. All rights reserved. | English Young Learners Conference – Braga 2025
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed to inspire young minds through English learning
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;