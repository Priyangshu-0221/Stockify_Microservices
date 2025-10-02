import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CurrencyRupeeIcon from "@/node_modules/@mui/icons-material/CurrencyRupee";
import TrendingUpIcon from "@/node_modules/@mui/icons-material/TrendingUp";
import SecurityIcon from "@/node_modules/@mui/icons-material/Security";
import AccessTimeIcon from "@/node_modules/@mui/icons-material/AccessTime";

const Hero = () => {
  const [validToken, setvalidToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setvalidToken(token);
    return () => {
      console.log("token fetched");
    };
  }, []);

  const boxRef1 = useRef();
  useGSAP(() => {
    gsap.from(boxRef1.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
    });
  });
  const boxRef2 = useRef();
  useGSAP(() => {
    gsap.from(boxRef2.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
    });
  });

  const features = [
    { icon: <TrendingUpIcon />, text: "Growing Returns" },
    { icon: <SecurityIcon />, text: "Secure Platform" },
    { icon: <AccessTimeIcon />, text: "24/7 Trading" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}


      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div ref={boxRef1} className="pt-20 pb-12 text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="px-6 py-3 bg-blue-600 rounded-full border border-blue-200 shadow-lg">
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                <TrendingUpIcon className="text-green-600" />
                India&apos;s Trusted Investment Platform
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-black mb-2">Your Money works</span>
            <span className="block ">
              Day & Night
            </span>
          </h1>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold  mb-8 leading-tight">
            Invest in Indian Share Market
          </h2>

          {/* Features Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-blue-600">{feature.icon}</span>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative inline-block group">
            <div className="absolute -inset-2  rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <button className="relative px-10 py-5 bg-blue-500 bg-pos-0 hover:bg-pos-100 text-white font-bold text-xl md:text-2xl rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  <span>Secure Your Future, Start Today</span>
                  <CurrencyRupeeIcon className="group-hover:rotate-12 transition-transform duration-300" fontSize="large" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full"></div>
                </button>


          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Bank Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>₹0 Account Opening</span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div ref={boxRef2} className="relative mb-16">
          <div className="relative group">
            {/* Video Container with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-10 pointer-events-none"></div>
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                className="w-full h-auto max-h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="/media/hero 1.mp4"
                alt="Trading Platform Demo Video"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>


          </div>

          {/* Video Caption */}
          <div className="text-center mt-6">
            <p className="text-lg text-gray-600 font-medium">
              Watch how our platform helps you make smarter investment decisions
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "1M+", label: "Investors Trust Us", icon: "👥" },
            { number: "₹500Cr+", label: "Assets Under Management", icon: "💰" },
            { number: "99.9%", label: "Platform Uptime", icon: "⚡" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
