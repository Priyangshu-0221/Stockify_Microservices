"use client";
import React, { useEffect, useState } from "react";
import WatchlistComponent from "../watchlist/WatchlistComponent";
import { GeneralContextProvider } from "../GeneralContext";
import axios from "axios";
import OrderComponent from "../components/OrderComponent";
const Page = () => {
  const [allorders, setallorders] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ORDER_SERVER_URL}/api/orders/userorder`, {
      params: { userId }, // goes into the query string
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setallorders(res.data);
    });
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Watchlist Component - Preserve existing styling */}
            <aside className="w-full lg:w-2/5">
              <GeneralContextProvider>
                <WatchlistComponent />
              </GeneralContextProvider>
            </aside>

            {/* Orders Section */}
            <div className="w-full lg:w-3/5">
              {allorders.length > 0 ? (
                <OrderComponent orders={allorders} />
              ) : (
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-h-80 flex items-center justify-center">
                  <div className="text-center p-8 max-w-md mx-auto">
                    <div className="mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl md:text-4xl">📋</span>
                      </div>
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 font-serif">
                        No Orders Yet 🥲
                      </h1>
                      <p className="text-sm md:text-base text-gray-600 font-serif leading-relaxed">
                        Execute your strategy: Place stock orders and take control!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
