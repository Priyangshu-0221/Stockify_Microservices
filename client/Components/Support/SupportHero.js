import React from "react";
import BugReportOutlinedIcon from "@/node_modules/@mui/icons-material/BugReportOutlined";
import QuizOutlinedIcon from "@/node_modules/@mui/icons-material/QuizOutlined";
import PermIdentityOutlinedIcon from "@/node_modules/@mui/icons-material/PermIdentityOutlined";
import CurrencyRupeeOutlinedIcon from "@/node_modules/@mui/icons-material/CurrencyRupeeOutlined";

const SuportHero = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm font-semibold mb-4">
            Need Help?
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
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
                    className="w-full h-12 md:h-14 px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <i className="ri-search-line text-gray-400 text-xl"></i>
                  </div>
                </div>
              </div>
              
              {/* My Tickets Button */}
              <div className="flex-shrink-0">
                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded font-semibold hover:bg-green-700">
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
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded">
                <QuizOutlinedIcon className="text-blue-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Most Asked
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Answers to frequent raised questions
                </p>
              </div>
            </div>
          </div>

          {/* My Account */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-md cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded">
                <PermIdentityOutlinedIcon className="text-green-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  My Account
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  KYC - Referral - Bank
                </p>
              </div>
            </div>
          </div>

          {/* Payments & Withdrawal */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-md cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 rounded">
                <CurrencyRupeeOutlinedIcon className="text-purple-600" fontSize="large" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
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
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-blue-600">
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
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        <i className="ri-phone-line text-blue-600"></i>
                        Customer Care Number
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="tel:1234567890" className="hover:text-blue-600">
                        1234567890
                      </a>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="tel:0987654321" className="hover:text-blue-600">
                        0987654321
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-900 font-medium">
                      <div className="flex items-center gap-2">
                        <i className="ri-mail-line text-green-600"></i>
                        Contact E-Mail
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="mailto:acc@mail.com" className="hover:text-blue-600">
                        acc@mail.com
                      </a>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                      <a href="mailto:pay@mail.com" className="hover:text-blue-600">
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
