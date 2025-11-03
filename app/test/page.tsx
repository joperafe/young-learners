import React from "react";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">
          English Young Learners Conference
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Braga 2025 - Test Page
        </p>
        <div className="bg-gray-100 p-8 rounded-xl">
          <p className="text-gray-700">
            If you can see this page, React is working correctly.
          </p>
        </div>
      </div>
    </div>
  );
}