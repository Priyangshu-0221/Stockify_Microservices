import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-t from-blue-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Brand Section */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  className="h-12 w-12 rounded-full shadow-lg border-2 border-white/20"
                  src="/media/logo.png"
                  alt="Stockify Logo"
                  width={48}
                  height={48}
                />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Stockify
                </h1>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Your trusted partner for smart investing and financial growth. 
                Trade stocks, manage portfolios, and build wealth with confidence.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: 'ri-facebook-circle-fill', color: 'hover:text-blue-500', label: 'Facebook' },
                  { icon: 'ri-instagram-fill', color: 'hover:text-pink-500', label: 'Instagram' },
                  { icon: 'ri-twitter-x-fill', color: 'hover:text-gray-400', label: 'Twitter' },
                  { icon: 'ri-whatsapp-fill', color: 'hover:text-green-500', label: 'WhatsApp' },
                  { icon: 'ri-linkedin-box-fill', color: 'hover:text-blue-600', label: 'LinkedIn' },
                  { icon: 'ri-telegram-2-fill', color: 'hover:text-blue-400', label: 'Telegram' },
                  { icon: 'ri-youtube-fill', color: 'hover:text-red-500', label: 'YouTube' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
              
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <i className="ri-copyright-line"></i>
                  2025 Stockify. All Rights Reserved
                </span>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Company Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-building-line text-blue-400"></i>
                  Company
                </h3>
                <div className="space-y-2">
                  {['About Us', 'Blog', 'Privacy Policy', 'Terms & Conditions', 'Legal & Regulatory', 'Grievance Redressal Policy', 'Sitemap'].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-product-hunt-line text-green-400"></i>
                  Products
                </h3>
                <div className="space-y-2">
                  {[
                    { name: 'Stocks', icon: '📈' },
                    { name: 'MTF', icon: '💰' },
                    { name: 'ETF', icon: '📊' },
                    { name: 'IPO', icon: '🚀' },
                    { name: 'Credit', icon: '💳' },
                    { name: 'Mutual Funds', icon: '🏦' }
                  ].map((product, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                    >
                      <span>{product.icon}</span>
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="ri-customer-service-line text-purple-400"></i>
                  Support
                </h3>
                <div className="space-y-2">
                  {[
                    { name: 'Customer Service', icon: '🎧' },
                    { name: 'Fraud Awareness', icon: '🛡️' },
                    { name: 'Help Center', icon: '❓' },
                    { name: 'Contact Us', icon: '📞' }
                  ].map((support, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1 transform"
                    >
                      <span>{support.icon}</span>
                      {support.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          
          {/* About Stockify Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-8 mt-3">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-information-line text-blue-400"></i>
              About Stockify
            </h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                Stockify, a product of Stockify Tech Private Limited (formerly
                Finzoom Investment Advisors Private Limited), provides financial
                technology solutions including personal finance management tools,
                UPI payment services, bill payments, and aggregation of financial
                products through its app and website.
              </p>
              
              <p>
                Stockify Private Limited (formerly INDmoney Private Limited) is a SEBI-registered Stock
                Broker (INZ000305337) and a CDSL Depository Participant
                (IN-DP-690-2022, DP ID: 12095500), and is a trading and clearing
                member of NSE (90267, M70042), BSE (6779), and BSE Star MF (6779),
                as well as an AMFI-registered Mutual Fund Distributor (ARN: 254564).
              </p>
              
              <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/20">
                <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  Office Address
                </h3>
                <p className="text-gray-300">
                  2nd Floor, Triveni Tech Park, Sector 5, Bidhannagar, Kolkata – 700091, West Bengal
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <i className="ri-phone-line"></i>
                    Contact
                  </h3>
                  <p className="text-gray-300">☎ 1234567890</p>
                </div>
                
                <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                    <i className="ri-mail-line"></i>
                    Support Emails
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>📧 rasupport@stockify.com</p>
                    <p>📧 upisupport@stockify.com</p>
                    <p>📧 insurancesupport@stockify.com</p>
                    <p>📧 npssupport@stockify.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Disclaimer Section */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-6 md:p-8">
            <h2 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <i className="ri-alert-line"></i>
              Important Disclaimer
            </h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2 flex items-center gap-2">
                  <i className="ri-error-warning-line"></i>
                  Risk Warning
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>• Investments in securities are subject to market risks. Please read all related documents carefully before investing.</p>
                  <p>• Mutual fund investments are also subject to market risks. Please read all scheme-related documents carefully before investing.</p>
                  <p>• Past performance of schemes is neither indicative of nor a guarantee for future performance.</p>
                </div>
              </div>
              
              <p>
                Stockify Pvt. Ltd. is a member of NSE & BSE with SEBI Registration
                No: INZ000301838, a Depository Participant of CDSL (SEBI
                Registration No: IN-DP-417-2019), and a registered Mutual Fund
                distributor with AMFI Registration No: ARN-111686.
              </p>
              
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4">
                <p className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                  <i className="ri-customer-service-2-line"></i>
                  Grievances
                </p>
                <p className="text-gray-300">
                  For any grievances related to Stock Broking or Depository Services, please write to: 
                  <a href="mailto:grievances@stockify.in" className="text-blue-400 hover:text-blue-300 underline ml-1">
                    grievances@stockify.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
