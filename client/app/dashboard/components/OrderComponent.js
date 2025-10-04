import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const OrderComponent = ({ orders }) => {
  const sellItemIndicator = () => {
    toast.error("Item Sold", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const sellItem_removeHolding = async (id, stockName) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    try {
      // First, remove the order
      await axios.delete("http://localhost:8004/api/orders/removeuserorder", {
        data: { id, userId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Then, remove the holding by stock name
      await axios.delete("http://localhost:8003/api/holdings/removeuserholding", {
        data: { userId, name: stockName },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      toast.success("Stock Sold Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error selling stock:", error);
      toast.error(error.response?.data?.message || "Failed to sell stock");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif">
          Orders Placed ({orders.length}/20)
        </h1>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-left">
                Stock Name
              </th>
              <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                Quantity
              </th>
              <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                Price
              </th>
              <th className="px-3 md:px-4 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((stock, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-3 md:px-4 py-3 md:py-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-xs font-bold text-green-700">
                      {stock.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">
                        {stock.name}
                      </div>
                      <div className="text-xs text-gray-500">Order #{index + 1}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-100 text-blue-800">
                    {stock.qty}
                  </span>
                </td>
                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                    ₹{stock.price}
                  </div>
                </td>
                <td className="px-3 md:px-4 py-3 md:py-4 text-center">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-3 md:px-4 rounded-lg transition-colors duration-200 text-xs md:text-sm">
                      Edit
                    </button>
                    <button
                      onClick={() => sellItem_removeHolding(stock._id, stock.name)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 md:px-4 rounded-lg transition-colors duration-200 text-xs md:text-sm"
                    >
                      Sell
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default OrderComponent;
