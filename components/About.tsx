"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            About the Conference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Join us for two inspiring days dedicated to young English learners 
                in the beautiful city of Braga. This conference brings together 
                educators, students, and families to celebrate the journey of 
                learning English as a young mind.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hosted by <strong className="text-navy">IH Braga</strong>, 
                one of Portugal&apos;s leading English language schools, this event 
                features interactive workshops, inspiring guest speakers, and 
                networking opportunities for teachers and parents alike.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover innovative teaching methods, connect with fellow educators, 
                and experience the rich culture of Braga while advancing your 
                understanding of young learner education.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-navy mb-4">
                Why Attend?
              </h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red text-xl mr-3">✓</span>
                  <span>Expert-led workshops on young learner pedagogy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red text-xl mr-3">✓</span>
                  <span>Networking with international educators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red text-xl mr-3">✓</span>
                  <span>Explore innovative teaching technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red text-xl mr-3">✓</span>
                  <span>Discover the historic city of Braga</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;