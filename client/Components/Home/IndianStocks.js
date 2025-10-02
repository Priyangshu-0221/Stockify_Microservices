import React, { useRef } from "react";
import Link from "next/link";
import OpenInNewOutlinedIcon from "@/node_modules/@mui/icons-material/OpenInNewOutlined";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IndianStocks = () => {
 
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div  className="flex-1 relative">
            <div className="relative group">

              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                <Image
                  width={1500}
                  height={200}
                  className="w-full h-auto max-w-2xl rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  src="/media/laptop.png"
                  alt="Trading Platform Interface"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div  className="flex-1 space-y-8 text-center lg:text-left">


            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black ">
                Invest in Indian Stocks
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 animate-pulse">
                starting ₹100...
              </h2>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Stocks', 'ETFs', 'Mutual Funds'].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 font-semibold rounded-full border border-blue-200 shadow-md hover:shadow-lg transition-shadow">
                  {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed">
                Start investing in Stocks, ETFs & Mutual Funds
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Long-term or short-term, high risk or low risk. Be the kind of
                investor you want to be and build your financial future with confidence.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                '✅ Zero brokerage fees',
                '📈 Real-time market data',
                '🔒 Bank-grade security',
                '📱 Mobile-first platform'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-lg font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">

                <button className="group relative px-8 py-4 bg-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto lg:mx-0 min-w-max">
                  <span>Open a Free Demat A/C*</span>
                  <OpenInNewOutlinedIcon className="group-hover:rotate-12 transition-transform duration-300" fontSize="large" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>
                </button>

              <p className="text-sm text-gray-500 mt-3 text-center lg:text-left">
                *Terms and conditions apply. Free for first year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndianStocks;
