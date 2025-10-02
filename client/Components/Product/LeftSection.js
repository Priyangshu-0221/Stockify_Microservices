"use client";
import React from "react";
import Image from "next/image";

const LeftSection = ({
  imgUrl,
  prod_name,
  prod_des,
  trydemo,
  learnmore,
  glgplay,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">

            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                className="w-full max-w-md h-auto rounded-xl object-cover"
                src={imgUrl}
                alt={prod_name}
                width={400}
                height={300}
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-serif leading-tight">
            {prod_name}
          </h1>
          
          {/* Accent Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto lg:mx-0 rounded-full"></div>
          
          {/* Product Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {prod_des}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={trydemo}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="ri-play-circle-line mr-2"></i>
              Try Demo
            </a>
            <a 
              href={learnmore}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="ri-information-line mr-2"></i>
              Learn More
            </a>
          </div>
          
          
          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              🚀 Fast & Reliable
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              🔒 Secure Trading
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              📱 Mobile Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
