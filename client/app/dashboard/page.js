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
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_STOCK_SERVER_URL}/api/stock/allstocks`).then((res) => {
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
      .post(`${process.env.NEXT_PUBLIC_BACKEND_WATCHLIST_SERVER_URL}/api/watchlist/addwatchlist`, { id, userId: clerkUserId }, {
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
      <main className="min-h-screen w-full max-w-7xl mx-auto bg-gray-50 rounded-lg shadow border border-gray-200 p-4 md:p-8 my-4">
        <div className="flex flex-col justify-center items-center mb-8 space-y-6">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            All Stocks
            <span className="text-lg md:text-2xl lg:text-3xl text-gray-500 ml-2">({allstocks.length})</span>
          </h1>
          <div className="w-full max-w-2xl">
            <input
              className="w-full h-12 md:h-14 px-6 py-3 text-center rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow text-gray-700 placeholder:text-gray-400"
              type="text"
              placeholder="Search stocks... (e.g., Reliance, TCS, HDFC)"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-3 md:px-6 py-4 text-left font-semibold text-sm md:text-base">
                    Company
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden md:table-cell">Open</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">High</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">Low</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden md:table-cell">Prev Close</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    <span className="hidden md:inline">Price Change</span>
                    <span className="md:hidden">Change</span>
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base hidden lg:table-cell">Volume(₹)</th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    Watchlist
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-semibold text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allstocks
                  .filter((a) => a.company.toLowerCase().includes(query))
                  .map((stock, index) => {
                    const priceChange = parseFloat(stock.price_change);
                    const isPositive = priceChange > 0;
                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-3 md:px-6 py-4 text-left font-semibold text-gray-900">
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
                            className={`inline-flex items-center px-2 py-1 rounded text-xs md:text-sm font-semibold ${
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
                            className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                            title="Add to Watchlist"
                          >
                            <BookmarkAddIcon className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center">
                          <Link href={`/stock/${stock._id}`}>
                            <button className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-xs md:text-sm font-semibold">
                              <span className="hidden md:inline">View Chart</span>
                              <span className="md:hidden">View</span>
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
};export default Page;
