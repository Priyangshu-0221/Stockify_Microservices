"use client";
import React from "react";
import Image from "next/image";

const People = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            👥 Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">
            People Behind Stockify
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Founder Profile */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Profile Image Section */}
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="relative group">

                <div className="relative bg-white p-3 rounded-full shadow-2xl">
                  <Image
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                    src="/media/owner.png"
                    alt="Priyangshu Mondal - Founder & CEO"
                    width={256}
                    height={256}
                    onContextMenu={e => e.preventDefault()}
                  />
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="text-center mt-6 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Priyangshu Mondal
                </h2>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                  Founder & CEO
                </div>
              </div>
            </div>

            {/* Biography Section */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-blue-600">📖</span>
                    About Our Founder
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Priyangshu bootstrapped and founded Stockify in 2025 to overcome
                    the hurdles he faced during his decade long stint as a trader. Today,
                    Stockify has changed the landscape of the Indian broking industry.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">🏛️</span>
                    Industry Leadership
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    He is a member of the SEBI Secondary Market Advisory Committee
                    (SMAC) and the Market Data Advisory Committee (MDAC).
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-purple-600">🏆</span>
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Founded Stockify in 2025
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      10+ Years Trading Experience
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      SEBI Committee Member
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Industry Innovator
                    </div>
                  </div>
                </div>

                {/* Connect Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-indigo-600">🔗</span>
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors duration-300">
                      <i className="ri-linkedin-fill text-lg"></i>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors duration-300">
                      <i className="ri-twitter-x-fill text-lg"></i>
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors duration-300">
                      <i className="ri-mail-fill text-lg"></i>
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
