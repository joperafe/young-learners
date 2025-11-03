"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import the Map component
const MapComponent = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 rounded-xl shadow-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Explore Braga
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover key locations in the beautiful city of Braga, including our venue and must-visit attractions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 shadow-lg"
        >
          <MapComponent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            {
              name: "IH Braga",
              description: "Conference venue and host school",
              address: "R. do Anjo 90, 4700-305 Braga",
            },
            {
              name: "Bom Jesus do Monte",
              description: "UNESCO World Heritage sanctuary",
              address: "Tenões, 4715-056 Braga",
            },
            {
              name: "Braga Cathedral",
              description: "Historic cathedral and museum",
              address: "R. Dom Paio Mendes, 4700-424 Braga",
            },
            {
              name: "Theatro Circo",
              description: "Cultural center and performance venue",
              address: "Av. da Liberdade 697, 4710-251 Braga",
            },
          ].map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                {location.description}
              </p>
              <p className="text-gray-500 text-xs">
                {location.address}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;