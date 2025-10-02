import React from "react";
import BugReportOutlinedIcon from "@/node_modules/@mui/icons-material/BugReportOutlined";
import QuizOutlinedIcon from "@/node_modules/@mui/icons-material/QuizOutlined";
import PermIdentityOutlinedIcon from "@/node_modules/@mui/icons-material/PermIdentityOutlined";
import CurrencyRupeeOutlinedIcon from "@/node_modules/@mui/icons-material/CurrencyRupeeOutlined";

const SuportHero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🆘 Need Help?
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-serif mb-8">
            Stuck Somewhere...???
          </h1>
          
          {/* Search and Tickets Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search your issue here..."
                    className="w-full h-12 md:h-14 px-6 py-3 text-gray-700 bg-white border-2 border-gray-200 rounded-2xl placeholder:text-gray-400 placeholder:text-center focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <i className="ri-search-line text-gray-400 text-xl"></i>
                  </div>
                </div>
              </div>
              
              {/* My Tickets Button */}
              <div className="flex-shrink-0">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="text-sm md:text-base">My Tickets</span>
                  <BugReportOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Most Asked */}
          <div className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                <QuizOutlinedIcon className="text-blue-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Most Asked
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Answers to frequent raised questions
                </p>
              </div>
            </div>
          </div>

          {/* My Account */}
          <div className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors duration-300">
                <PermIdentityOutlinedIcon className="text-green-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  My Account
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  KYC - Referral - Bank
                </p>
              </div>
            </div>
          </div>

          {/* Payments & Withdrawal */}
          <div className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-300">
                <CurrencyRupeeOutlinedIcon className="text-purple-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Payments & Withdrawal
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Stockify Balance - Withdrawals - Stockify Pay
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <i className="ri-phone-line"></i>
                Contact Information
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-semibold text-gray-900">
                      Field
                    </th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-semibold text-gray-900">
                      Account Support
                    </th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-semibold text-gray-900">
                      Payment Support
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        <i className="ri-phone-line text-blue-600"></i>
                        Customer Care Number
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="tel:1234567890" className="hover:text-blue-600 transition-colors duration-200">
                        1234567890
                      </a>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="tel:0987654321" className="hover:text-blue-600 transition-colors duration-200">
                        0987654321
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        <i className="ri-mail-line text-green-600"></i>
                        Contact E-Mail
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="mailto:acc@mail.com" className="hover:text-blue-600 transition-colors duration-200">
                        acc@mail.com
                      </a>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="mailto:pay@mail.com" className="hover:text-blue-600 transition-colors duration-200">
                        pay@mail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuportHero;
