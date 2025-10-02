import React from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import Link from "next/link";
import { GeneralContextProvider } from "../GeneralContext";

const order = () => {
  return (
    <>
      <GeneralContextProvider>
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Watchlist Component - Preserve existing styling */}
              <div className="w-full lg:w-2/5">
                <WatchlistComponent />
              </div>

              {/* Funds Section */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif">
                      Fund Management
                    </h1>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-4 md:p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <Link
                        href=""
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
                      >
                        Add Funds
                      </Link>
                      <Link
                        href=""
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
                      >
                        Withdraw
                      </Link>
                    </div>
                  </div>

                  {/* Equity Section */}
                  <div className="p-4 md:p-6">
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      {/* Equity Header */}
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center font-serif">
                          Equity
                        </h2>
                      </div>

                      {/* Main Stats */}
                      <div className="p-4 md:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                            <div className="text-center">
                              <p className="text-sm md:text-base font-medium text-gray-600 mb-2">Available Margin</p>
                              <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">₹4,043.10</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                            <div className="text-center">
                              <p className="text-sm md:text-base font-medium text-gray-600 mb-2">Used Margin</p>
                              <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">₹3,757.30</p>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                            <div className="text-center">
                              <p className="text-sm md:text-base font-medium text-gray-600 mb-2">Available Cash</p>
                              <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">₹4,043.10</p>
                            </div>
                          </div>
                        </div>

                        {/* Detailed Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">Account Details</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Opening Balance</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹4,043.10</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Closing Balance</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹3,736.40</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Payin</span>
                                <span className="text-sm md:text-base font-semibold text-green-600">₹4,064.00</span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="text-sm md:text-base text-gray-600">SPAN</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹0.00</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">Margin Details</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Delivery Margin</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹0.00</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Exposure</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹0.00</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm md:text-base text-gray-600">Options Premium</span>
                                <span className="text-sm md:text-base font-semibold text-gray-900">₹0.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Collateral Information */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">Collateral Information</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs md:text-sm text-gray-600 mb-1">Liquid Funds</p>
                              <p className="text-sm md:text-base font-semibold text-gray-900">₹0.00</p>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <p className="text-xs md:text-sm text-gray-600 mb-1">Equity</p>
                              <p className="text-sm md:text-base font-semibold text-gray-900">₹0.00</p>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                              <p className="text-xs md:text-sm text-blue-600 mb-1 font-medium">Total Collateral</p>
                              <p className="text-sm md:text-base font-bold text-blue-700">₹0.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralContextProvider>
    </>
  );
};

export default order;
