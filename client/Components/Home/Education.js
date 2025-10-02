import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import HotelClassIcon from '@/node_modules/@mui/icons-material/HotelClass';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {

  const steps = [
    {
      number: "1",
      title: "Learn the Demo",
      image: "/media/1.png",
      description: "Practice with virtual money and learn the platform",
      icon: "📚"
    },
    {
      number: "2", 
      title: "Make your first Deposit",
      image: "/media/2.png",
      description: "Fund your account with as little as ₹100",
      icon: "💰"
    },
    {
      number: "3",
      title: "Make Successful Deals", 
      image: "/media/3.png",
      description: "Execute smart trades with real-time market data",
      icon: "📈"
    },
    {
      number: "4",
      title: "Withdraw Money",
      image: "/media/4.png", 
      description: "Enjoy your profits with instant withdrawals",
      icon: "🏦"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-6">
            <span className="text-blue-800 font-semibold text-lg">Trading Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Take 4 steps to start earning
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            as a <span className="text-green-600">real trader</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our proven step-by-step process to become a successful trader
          </p>
        </div>

        {/* Steps Grid */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 text-center">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                  {step.title}
                </h3>

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    width={400}
                    height={320}
                    className="w-full h-64 object-cover"
                    src={step.image}
                    alt={step.title}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center font-medium leading-relaxed">
                  {step.description}
                </p>

              </div>

              {/* Connection Line (for desktop) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-2  bg-yellow-300 rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity"></div>

              <button className="relative px-10 py-5  bg-size-200 bg-pos-0 hover:bg-pos-100 bg-yellow-400 text-white font-bold text-xl md:text-2xl rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <span className="text-black">Invest, Grow, Prosper</span>
                <HotelClassIcon className="group-hover:rotate-12 transition-transform duration-300" fontSize="large"/>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full"></div>
              </button>

          </div>
          <p className="text-gray-500 mt-4 text-lg">
            Start your trading journey today - <span className="text-green-600 font-semibold">it&apos;s free to begin!</span>
          </p>
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "50K+", label: "Active Traders", icon: "👥" },
            { number: "₹10Cr+", label: "Monthly Volume", icon: "💹" },
            { number: "4.9★", label: "User Rating", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
