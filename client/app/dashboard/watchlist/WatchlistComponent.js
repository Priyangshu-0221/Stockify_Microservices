"use client";
import React, { useState, useContext, useEffect } from "react";
import { Tooltip, Grow } from "@/node_modules/@mui/material";
import GeneralContext from "../GeneralContext";
import axios from "axios";

const Page = () => {
  const [watchlist, setwatchlist] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      return;
    }

    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_WATCHLIST_SERVER_URL}/api/watchlist/userwatchlists`, {
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
  return (
    <>
      {watchlist.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden w-full mx-auto my-4 max-h-96 lg:max-h-[500px]">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
              Watchlist ({watchlist.length}/50)
            </h1>
          </div>
          <div className="overflow-y-auto max-h-80 lg:max-h-96">
            <ul className="divide-y divide-gray-100">
              {watchlist.map((stock, index) => {
                return <WatchListItem stock={stock} key={index} />;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full mx-auto my-4 min-h-80 flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl md:text-4xl">📊</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 font-serif">
                Watchlist is Currently Empty
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-serif leading-relaxed">
                Your watchlist, your way: Add stocks and start trading!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Page;
const WatchListItem = ({ stock }) => {
  const [show, setshow] = useState(false);
  const handleMouse = (e) => {
    setshow(true);
  };
  const handleLeave = (e) => {
    setshow(false);
  };
  return (
    <li
      onMouseEnter={handleMouse}
      onMouseLeave={handleLeave}
      className="hover:cursor-pointer hover:bg-gray-50 transition-all duration-200"
    >
      <div className="p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold text-gray-900">{stock.company}</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm md:text-base">
            <div className="bg-blue-50 px-3 py-2 rounded-lg">
              <span className="text-gray-600 font-medium">Open: </span>
              <span className="font-semibold text-gray-900">₹{stock.open}</span>
            </div>

            <div className="bg-purple-50 px-3 py-2 rounded-lg">
              <span className="text-gray-600 font-medium">Prev Close: </span>
              <span className="font-semibold text-gray-900">₹{stock.prev_close}</span>
            </div>

            <div className={`px-3 py-2 rounded-lg ${parseFloat(stock.price_change) > 0
                ? "bg-green-50"
                : "bg-red-50"
              }`}>
              <span className="text-gray-600 font-medium">Change: </span>
              <span className={`font-semibold ${parseFloat(stock.price_change) > 0
                  ? "text-green-600"
                  : "text-red-600"
                }`}>
                {parseFloat(stock.price_change) > 0 ? "▲" : "▼"} {stock.price_change}
              </span>
            </div>
          </div>
        </div>

        {show && <WatchListActions uid={stock.company} />}
      </div>
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, closeBuyWindow } = useContext(GeneralContext);

  const handleRemoveWatchlist = (uid) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      alert("Please login to remove from watchlist");
      return;
    }

    axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_WATCHLIST_SERVER_URL}/api/watchlist/removeuserwatchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: {
        userId,
        company: uid, // Send company name instead of watchlistId
      }
    }).then((res) => {
      if (res.data.success) {
        alert(res.data.message || "Item Removed from watchlist");
        setTimeout(() => { window.location.reload(); }, 1000);
      }
    }).catch((err) => {
      const errorMessage = err.response?.data?.message || "Failed to remove from watchlist";
      alert(errorMessage);
      
      // Handle specific error cases
      if (err.response?.status === 401) {
        alert("Session expired. Please login again.");
        // Optionally redirect to login
      } else if (err.response?.status === 404) {
        alert("Watchlist item not found. It may have been already removed.");
        setTimeout(() => { window.location.reload(); }, 1000);
      }
    });
  }

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };

  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Tooltip
          title="Remove from Watchlist"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex-1 sm:flex-none"
            onClick={(e) => handleRemoveWatchlist(uid)}
          >
            Remove from Watchlist
          </button>
        </Tooltip>
        <Tooltip
          title="Buy Stock"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            onClick={handleBuyClick}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex-1 sm:flex-none"
          >
            Buy Stock
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
