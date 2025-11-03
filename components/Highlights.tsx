"use client";

import React from "react";
import { motion } from "framer-motion";

const Highlights = () => {
  const highlights = [
    {
      title: "Interactive Workshops",
      description: "Hands-on sessions covering modern teaching methodologies, digital tools, and creative classroom activities specifically designed for young English learners.",
      icon: "🎯",
    },
    {
      title: "Expert Guest Speakers",
      description: "Renowned educators and researchers will share insights on child psychology, language acquisition, and innovative pedagogical approaches.",
      icon: "🎤",
    },
    {
      title: "Teacher Networking",
      description: "Connect with fellow educators from around the world, share experiences, and build lasting professional relationships.",
      icon: "🤝",
    },
    {
      title: "Cultural Immersion",
      description: "Explore Braga's rich history, visit iconic landmarks, and experience Portuguese culture while learning from local educational perspectives.",
      icon: "🏛️",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Conference Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes this conference a unique experience for young learner educators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3 text-center">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Schedule Overview
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-red mb-3">
                  Day 1 - March 15, 2025
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 9:00 AM - Registration & Welcome Coffee</li>
                  <li>• 10:00 AM - Opening Keynote</li>
                  <li>• 11:30 AM - Workshop Sessions Begin</li>
                  <li>• 1:00 PM - Lunch & Networking</li>
                  <li>• 2:30 PM - Interactive Panel Discussions</li>
                  <li>• 4:00 PM - City Tour (Optional)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red mb-3">
                  Day 2 - March 16, 2025
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 9:00 AM - Hands-on Workshops</li>
                  <li>• 10:30 AM - Technology in Education</li>
                  <li>• 12:00 PM - Lunch & Collaboration</li>
                  <li>• 1:30 PM - Best Practices Sharing</li>
                  <li>• 3:00 PM - Closing Ceremony</li>
                  <li>• 4:00 PM - Farewell Reception</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;