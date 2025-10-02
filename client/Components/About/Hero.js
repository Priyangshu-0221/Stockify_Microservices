import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            🏢 About Stockify
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 font-serif leading-tight">
            Our Company
          </h1>
          
          {/* Accent line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          
          {/* Description in a card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-8 md:p-10 mb-12">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              As a one stop shop personal finance application, Indians can track
              their finances across their family members, plan their goals and also
              get investment solutions ranging from mutual funds, Indian share
              market, F&O, etc.
            </p>
          </div>
          
          {/* Made in India section with enhanced styling */}
          <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-8 border border-gray-200/50 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <span>Made in India</span>
              <span className="text-3xl md:text-4xl">🇮🇳</span>
            </h2>
            <div className="flex justify-center items-center gap-2 text-4xl md:text-5xl">
              <span className="animate-pulse">🧡</span>
              <span className="animate-pulse delay-100">🤍</span>
              <span className="animate-pulse delay-200">💚</span>
            </div>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Proudly serving Indian families with innovative financial solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
