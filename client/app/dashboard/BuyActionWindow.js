"use client";
import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [quantity, setquantity] = useState(1);
  const [price, setprice] = useState(0.0);

  const handleBuy_Holdings = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ORDER_SERVER_URL}/api/orders/addorder`,
        {
          name: uid,
          qty: quantity,
          price: price,
          mode: "BUY",
          owner: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_HOLDING_SERVER_URL}/api/holdings/addholdings`,
        {
          name: uid,
          qty: quantity,
          price: price,
          owner: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = "/dashboard/holdings";
    } catch (error) {
      console.log(error);
    }
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 md:p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Buy Stock</h2>
              <p className="text-blue-100 text-sm md:text-base mt-1">{uid}</p>
            </div>
            <button
              onClick={handleCancelClick}
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
            >
              <span className="text-lg font-bold">×</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm md:text-base font-semibold text-gray-700">
                Quantity
              </label>
              <input
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
                value={quantity}
                type="number"
                name="qty"
                min="1"
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Enter quantity"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm md:text-base font-semibold text-gray-700">
                Price (₹)
              </label>
              <input
                onChange={(e) => {
                  setprice(e.target.value);
                }}
                value={price}
                type="number"
                name="price"
                step="0.05"
                min="0"
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Enter price per share"
              />
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base font-medium text-gray-600">Total Amount:</span>
              <span className="text-lg md:text-xl font-bold text-gray-900">
                ₹{(quantity * price || 0).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
              <span className="text-sm md:text-base font-medium text-gray-600">Margin Required:</span>
              <span className="text-base md:text-lg font-semibold text-blue-600">
                ₹140.65
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={handleBuy_Holdings}
            >
              <span className="flex items-center justify-center gap-2">
                <span>💰</span>
                Buy Now
              </span>
            </button>
            <button
              className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={handleCancelClick}
            >
              <span className="flex items-center justify-center gap-2">
                <span>❌</span>
                Cancel
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
