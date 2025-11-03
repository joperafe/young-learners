"use client";

import React, { useState } from "react";

// Simple placeholder component for testing
const MapComponent = () => {
  return (
    <div className="w-full">
      <div className="w-full h-96 rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl mb-2">🗺️</div>
          <div className="text-gray-600">Map Loading...</div>
          <div className="text-sm text-gray-500 mt-2">Mapbox integration in progress</div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-8 mt-6 text-sm">
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md">
          <div className="w-5 h-5 bg-gradient-to-br from-red to-red-600 rounded-full mr-3 border-2 border-white shadow-md relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-700 font-medium">Conference Venue</span>
        </div>
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md">
          <div className="w-4 h-4 bg-gradient-to-br from-navy to-blue-800 rounded-full mr-3 border-2 border-white shadow-md relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-700 font-medium">Points of Interest</span>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;