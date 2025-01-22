// components/Partnership.js
import React from "react";

export function Partner() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="src/assets/Strategic_Partnership.jpg"
              alt="Partner 1"
              className="h-24 w-auto object-contain" // Increased height and set width auto
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="src/assets/Top-Google-Premium-Partner-Agencies-in-India.png"
              alt="Partner 2"
              className="h-24 w-auto object-contain" // Increased height and set width auto
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="src/assets/Strategic_Partnership.jpg"
              alt="Partner 3"
              className="h-24 w-auto object-contain" // Increased height and set width auto
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="src/assets/Strategic_Partnership.jpg"
              alt="Partner 4"
              className="h-24 w-auto object-contain" // Increased height and set width auto
            />
          </div>
        </div>
      </div>
    </div>
  );
}
