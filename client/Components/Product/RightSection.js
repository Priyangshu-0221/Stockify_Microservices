"use client";
import React from "react";
import Image from "next/image";

const RightSection = ({ imgUrl, prod_des, prod_name, learnmore, glgplay }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white p-2 rounded-lg shadow border border-gray-200">
            <Image
              className="w-full max-w-md h-auto rounded object-cover"
              src={imgUrl}
              alt={prod_name}
              width={400}
              height={300}
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {prod_name}
          </h1>
          
          {/* Accent Line */}
          <div className="w-16 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
          
          {/* Product Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            {prod_des}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={learnmore}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded font-semibold hover:bg-blue-50"
            >
              <i className="ri-information-line mr-2"></i>
              Learn More
            </a>
            {glgplay && (
              <a 
                href={glgplay}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded font-semibold hover:bg-green-700"
              >
                <i className="ri-download-line mr-2"></i>
                Download
              </a>
            )}
          </div>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">
              High Performance
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded text-sm font-medium">
              User Friendly
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded text-sm font-medium">
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
