"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const Page = () => {
  const [watchlist, setwatchlist] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      return;
    }

    axios.get("http://localhost:8002/api/watchlist/userwatchlists", {
      params: { userId },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setwatchlist(res.data.watchlist || res.data);
    }).catch((err) => {
      // Handle error silently or show user-friendly message
    });
  }, []);
  const data = watchlist.map((item, index) => ({
    subject: item.company || `Item ${index + 1}`, // Fallback to index if name is missing
    prev_close: item.prev_close,
  }));


  return (
    <>
      <main className="min-h-screen w-full max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg border border-gray-200 p-4 md:p-6 my-4">
        <div className="flex flex-col xl:flex-row gap-6">
          {watchlist.length > 0 ? (
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden flex-1">
              <div className="p-4 bg-blue-600">
                <h1 className="text-xl md:text-2xl font-semibold text-white">
                  Watchlist ({watchlist.length}/50)
                </h1>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-sm md:text-base text-left font-semibold text-gray-700">
                        Company
                      </th>
                      <th className="px-4 py-3 text-sm md:text-base text-center font-semibold text-gray-700">
                        Open
                      </th>
                      <th className="px-4 py-3 text-sm md:text-base text-center font-semibold text-gray-700 hidden md:table-cell">
                        High
                      </th>
                      <th className="px-4 py-3 text-sm md:text-base text-center font-semibold text-gray-700 hidden md:table-cell">
                        Low
                      </th>
                      <th className="px-4 py-3 text-sm md:text-base text-center font-semibold text-gray-700">
                        Prev Close
                      </th>
                      <th className="px-4 py-3 text-sm md:text-base text-center font-semibold text-gray-700">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {watchlist.map((stock, index) => {
                      const priceChange = parseFloat(stock.price_change);
                      const isPositive = priceChange > 0;
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-left font-medium text-gray-900 text-sm md:text-base">
                            {stock.company}
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm md:text-base">
                            ₹{stock.open}
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm md:text-base hidden md:table-cell">
                            ₹{stock.high}
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm md:text-base hidden md:table-cell">
                            ₹{stock.low}
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700 text-sm md:text-base">
                            ₹{stock.prev_close}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded text-xs md:text-sm font-medium ${isPositive
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                                }`}
                            >
                              {isPositive ? "▲" : "▼"} {stock.price_change}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow border border-gray-200 p-8 md:p-12 text-center flex-1">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">📊</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                    Watchlist is Currently Empty
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">
                    Add stocks to start tracking your investments
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden flex-1 min-w-0">
            <div className="p-4 bg-indigo-600">
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Price Chart
              </h1>
            </div>

            <div className="p-4">
              <div className="w-full h-64 md:h-80 lg:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
                    <PolarGrid stroke="#e5e7eb" strokeOpacity={0.8} />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#374151' }} />
                    <PolarRadiusAxis tick={{ fontSize: 10, fill: '#6b7280' }} />
                    <Radar
                      name="WatchList"
                      dataKey="prev_close"
                      stroke="#3b82f6"
                      fill="#60a5fa"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              {data.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No data to display</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
