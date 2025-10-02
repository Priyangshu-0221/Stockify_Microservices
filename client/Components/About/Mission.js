"use client";
import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Mission Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative group">
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div> */}
              <div className="relative bg-white p-4 rounded-full shadow-2xl">
                <Image
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                  src="/media/marks.png"
                  alt="Mission Image"
                  width={320}
                  height={320}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          
          {/* Mission Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🎯 Our Purpose
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Our Mission
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
              Improve your financial future by helping you to save and earn more through 
              innovative technology and personalized financial solutions.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">💰 Save More</span>
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">📈 Earn More</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">🚀 Grow Wealth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Vision Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative group">
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div> */}
              <div className="relative bg-white p-4 rounded-full shadow-2xl">
                <Image
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                  src="/media/eye.png"
                  alt="Vision Image"
                  width={320}
                  height={320}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          
          {/* Vision Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              👁️ Our Vision
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Our Vision
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
              Our vision is to be the one stop shop for your finances
              <br />
              <span className="font-semibold text-green-600">Your Family&apos;s Super Money App</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">👨‍👩‍👧‍👦 Family First</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">🏪 One Stop Shop</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">📱 Super App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;
