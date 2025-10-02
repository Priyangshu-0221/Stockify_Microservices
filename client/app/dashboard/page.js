"use client";
import React, { useEffect, useState } from "react";
import BookmarkAddIcon from "@/node_modules/@mui/icons-material/BookmarkAdd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

const Page = (uid) => {
  const addwacthlist = () => {
    toast.success("Added to Watchlist", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [allstocks, setAllstocks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8001/api/stock/allstocks").then((res) => {
      setAllstocks(res.data);
    });
  }, []);

  const handleAddToWatchlist = (id) => {
    const token = localStorage.getItem("token");
    const clerkUserId = localStorage.getItem("clerkUserId");
    
    if (!token || !clerkUserId) {
      toast.error("Please login to add to watchlist");
      return;
    }
    
    axios
      .post("http://localhost:8002/api/watchlist/addwatchlist", { id, userId: clerkUserId }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        toast.success("Added to Watchlist");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          toast.error("Already added to Watchlist");
        } else if (err.response?.status === 401) {
          toast.error("Please login to add to watchlist");
        } else {
          toast.error("Failed to add to watchlist");
        }
      });
  };

  return (
    <>
      <main className="min-h-screen w-full max-w-7xl mx-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl shadow-2xl border border-gray-200/50 p-4 md:p-8 my-4">
        <div className="flex flex-col justify-center items-center mb-8 space-y-6">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            <span className="font-serif">All Stocks</span> 
            <span className="text-lg md:text-2xl lg:text-3xl text-gray-500 ml-2">({allstocks.length})</span>
          </h1>
          <div className="relative w-full max-w-2xl">
            <input
              className="w-full h-12 md:h-14 px-6 py-3 text-center placeholder:text-center rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg text-gray-700 placeholder:text-gray-400"
              type="text"
              placeholder="🔍 Search stocks... (e.g., Reliance, TCS, HDFC)"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">
                <tr>
                  <th className="px-3 md:px-6 py-4 text-left font-semibold text-sm md:text-base">
                    <div className="flex items-center space-x-2">
                      <span>📈</span>
                      <span>Company</span>
                    </div>
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden md:table-cell">Open</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">High</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">Low</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden md:table-cell">Prev Close</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    <div className="flex items-center justify-center space-x-1">
                      <span>📊</span>
                      <span className="hidden md:inline">Price Change</span>
                      <span className="md:hidden">Change</span>
                    </div>
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">Volume(₹)</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    <span>⭐</span>
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    <span>👁️</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allstocks
                  .filter((a) => a.company.toLowerCase().includes(query))
                  .map((stock, index) => {
                    const priceChange = parseFloat(stock.price_change);
                    const isPositive = priceChange > 0;
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                      >
                        <td className="px-3 md:px-6 py-4 text-left font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          <div className="flex flex-col">
                            <span className="text-sm md:text-base">{stock.company}</span>
                            <span className="text-xs text-gray-500 md:hidden">₹{stock.open}</span>
                          </div>
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-medium text-gray-700 hidden md:table-cell">
                          ₹{stock.open}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-medium text-gray-700 hidden lg:table-cell">
                          ₹{stock.high}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-medium text-gray-700 hidden lg:table-cell">
                          ₹{stock.low}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-medium text-gray-700 hidden md:table-cell">
                          ₹{stock.prev_close}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-bold">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm font-semibold ${
                              isPositive
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {isPositive ? "▲" : "▼"} {stock.price_change}
                          </span>
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center font-medium text-gray-700 hidden lg:table-cell">
                          ₹{stock.volume}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center">
                          <button
                            onClick={() => handleAddToWatchlist(stock._id)}
                            className="group/btn relative p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                            title="Add to Watchlist"
                          >
                            <BookmarkAddIcon className="w-4 h-4 md:w-5 md:h-5" />
                            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center">
                          <Link href={`/stock/${stock._id}`}>
                            <button className="group/view relative px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-sm font-semibold">
                              <span className="hidden md:inline">View Chart</span>
                              <span className="md:hidden">📊</span>
                              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover/view:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
            </table>
          </div>
        </div>
        
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="mt-16"
        />
      </main>
    </>
  );
};

export default Page;
