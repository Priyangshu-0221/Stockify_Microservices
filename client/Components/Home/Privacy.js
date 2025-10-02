import React from "react";
import Image from "next/image";
import WorkspacePremiumOutlinedIcon from "@/node_modules/@mui/icons-material/WorkspacePremiumOutlined";
import AutoStoriesOutlinedIcon from "@/node_modules/@mui/icons-material/AutoStoriesOutlined";
import SecurityOutlinedIcon from "@/node_modules/@mui/icons-material/SecurityOutlined";

const Privacy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                <span className="text-green-400 font-semibold text-sm flex items-center gap-2">
                  <i className="ri-shield-check-line"></i>
                  100% Safe and Secure
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your security and{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    privacy
                  </span>
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300">
                  are our top priority!
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                We implement industry-leading security measures and follow strict compliance standards to protect your financial data and transactions.
              </p>
            </div>

            {/* Security Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ISO Certified */}
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <WorkspacePremiumOutlinedIcon className="text-yellow-400" fontSize="large" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">ISO Certified</h3>
                    <p className="text-gray-400 text-sm">International security standards</p>
                  </div>
                </div>
              </div>

              {/* Audited */}
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                    <AutoStoriesOutlinedIcon className="text-blue-400" fontSize="large" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">CERT-IN Audited</h3>
                    <p className="text-gray-400 text-sm">Government certified security</p>
                  </div>
                </div>
              </div>

              {/* SSL Secured */}
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300">
                    <SecurityOutlinedIcon className="text-green-400" fontSize="large" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">SSL Secured</h3>
                    <p className="text-gray-400 text-sm">End-to-end encryption</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <i className="ri-bank-line text-green-400"></i>
                <span className="text-green-300 text-sm font-medium">RBI Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <i className="ri-shield-star-line text-blue-400"></i>
                <span className="text-blue-300 text-sm font-medium">SEBI Registered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <i className="ri-lock-line text-purple-400"></i>
                <span className="text-purple-300 text-sm font-medium">256-bit Encryption</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative">

              <div className="relative">
                <Image
                  className="w-80 h-80 md:w-96 md:h-96 object-contain"
                  src="/media/privacylogo.png"
                  alt="Security and Privacy"
                  width={384}
                  height={384}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
