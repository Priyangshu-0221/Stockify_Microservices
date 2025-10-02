"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Simple and transparent pricing for all your trading needs
          </p>
        </div>

        {/* Pricing Cards - Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Account Opening & AMC */}
          <div className="bg-white border hover:scale-105 border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Image
              className="w-32 h-32 mx-auto mb-4 rounded-full"
              src="/media/0.png"
              alt="Account Opening & AMC"
              width={128}
              height={128}
              onContextMenu={e => e.preventDefault()}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Account Opening & AMC
            </h3>
            <p className="text-gray-600 mb-4">
              0.1% per executed order whichever is lower, minimum ₹5
            </p>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ₹0 AMC
            </span>
          </div>

          {/* Equity Brokerage */}
          <div className="bg-white border hover:scale-105 border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <Image
              className="w-32 h-32 mx-auto mb-4 rounded-full"
              src="/media/2_0.png"
              alt="Equity Brokerage"
              width={128}
              height={128}
              onContextMenu={e => e.preventDefault()}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Equity Brokerage
            </h3>
            <p className="text-gray-600 mb-4">
              0.1% per executed order whichever is lower, minimum ₹5
            </p>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Low Cost
            </span>
          </div>

          {/* Pledge */}
          <div className="bg-white border hover:scale-105 border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <Image
              className="w-32 h-32 mx-auto mb-4 rounded-full"
              src="/media/0.png"
              alt="Pledge Services"
              width={128}
              height={128}
              onContextMenu={e => e.preventDefault()}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Pledge Services
            </h3>
            <p className="text-gray-600 mb-4">
              Per ISIN, for Pledge/Unpledge order
            </p>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Flexible
            </span>
          </div>
        </div>

        {/* Simple Zero Charges Section */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Zero Hidden Charges
              </h2>
              <p className="text-gray-600">
                Complete transparency in pricing
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Zero Fixed Charges
              </h2>
              <p className="text-gray-600">
                Pay only when you trade
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
