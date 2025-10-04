"use client";
import React, { useEffect, useState } from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import { GeneralContextProvider } from "../GeneralContext";
import axios from "axios";

const Page = () => {
  const [holdings, setholdings] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOLDING_SERVER_URL}/api/holdings/userholdings`, {
      params: { userId },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setholdings(res.data);
    });
  }, []);
  const [variations, setVariations] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setVariations((prev) =>
        holdings.map((stock, index) => {
          const presentValue = stock.price * stock.qty;
          return Math.random() * 10 - 8 + presentValue;
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, [holdings]);
  return (
    <>
      <GeneralContextProvider>
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Watchlist Component - Keep its existing styling */}
              <div className="w-full lg:w-2/5">
                <WatchlistComponent />
              </div>

              {/* Holdings Section - Enhanced styling */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                      <span className="font-serif">Holdings</span> ({holdings.length})
                    </h1>
                  </div>

                  {/* Table Container */}
                  <div className="overflow-x-auto">
                    {holdings.length > 0 ? (
                      <table className="w-full min-w-[600px]">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                              Company
                            </th>
                            <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                              Qty
                            </th>
                            <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                              Price
                            </th>
                            <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center hidden md:table-cell">
                              Avg Cost
                            </th>
                            <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                              Market Value
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {holdings.map((stock, index) => {
                            const presentValue = stock.price * stock.qty;
                            const variation = variations[index] ?? presentValue;
                            const marketValue = variation;
                            const isProfit = marketValue > presentValue;

                            return (
                              <tr
                                key={index}
                                className="hover:bg-gray-50 transition-colors duration-200"
                              >
                                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                                    {stock.name}
                                  </div>
                                </td>
                                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-100 text-blue-800">
                                    {stock.qty}
                                  </span>
                                </td>
                                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                                    ₹{stock.price.toFixed(2)}
                                  </div>
                                </td>
                                <td className="px-3 md:px-4 py-3 md:py-4 text-center hidden md:table-cell">
                                  <div className="font-medium text-gray-700 text-sm md:text-base">
                                    ₹{presentValue.toFixed(2)}
                                  </div>
                                </td>
                                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                                  <div className="flex flex-col items-center gap-1">
                                    <span className={`font-bold text-sm md:text-base ${isProfit ? "text-green-600" : "text-red-600"
                                      }`}>
                                      ₹{marketValue.toFixed(2)}
                                    </span>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${isProfit
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                      }`}>
                                      {isProfit ? "▲" : "▼"}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-8 md:p-12 text-center">
                        <div className="max-w-md mx-auto space-y-4">
                          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-3xl md:text-4xl">📈</span>
                          </div>
                          <div className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                              No Holdings Found
                            </h2>
                            <p className="text-sm md:text-base text-gray-600">
                              Start investing to see your holdings here
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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

export default Page;
