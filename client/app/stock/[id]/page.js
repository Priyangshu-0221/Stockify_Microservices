"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Page = () => {
  const id = useParams().id;
  const [stockdata, setStockdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [priceChange, setPriceChange] = useState(0);
  const [isPositive, setIsPositive] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_STOCK_SERVER_URL}/api/stock/${id}`
        );
        setStockdata(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setLoading(false);
      }
    };
    fetchStockData();
  }, [id]);

  // Update price change with random fluctuation every 1 minute
  useEffect(() => {
    if (!stockdata) return;

    // Initialize with current price
    const initialPrice = stockdata.open;
    const now = new Date();
    setChartData([{ 
      time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }), 
      price: initialPrice 
    }]);

    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * (stockdata.high - stockdata.low) * 0.5;
      const basePrice = stockdata.open;
      const newPrice = Math.max(
        stockdata.low, 
        Math.min(stockdata.high, basePrice + randomChange)
      );
      
      const newPriceChange = newPrice - stockdata.prev_close;
      const newIsPositive = newPriceChange >= 0;
      
      setPriceChange(newPriceChange);
      setIsPositive(newIsPositive);
      const currentTime = new Date();
      setChartData(prevData => {
        const newData = [
          ...prevData, 
          { 
            time: currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }), 
            price: newPrice 
          }
        ];
        return newData.slice(-30);
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, [stockdata]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading stock data...</p>
        </div>
      </div>
    );
  }

  if (!stockdata) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Stock Not Found</h1>
          <p className="text-gray-600 mb-4">The requested stock data could not be found.</p>
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/dashboard" className="text-blue-600 hover:underline flex items-center gap-1">
            <span>←</span>
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* Stock Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{stockdata.company}</h1>
              <p className="text-gray-500 text-sm mt-1">Indian Stock Market</p>
            </div>
            <div className={`px-4 py-2 rounded font-semibold ${
              isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isPositive ? '▲' : '▼'} {stockdata.price_change}
            </div>
          </div>
        </div>

        {/* Stock Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Live Price Chart (Updates every 1 minute)
          </h2>
          <div className="w-full" style={{ height: '400px' }}>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="time" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    domain={['dataMin - 50', 'dataMax + 50']}
                    tickFormatter={(value) => `₹${value.toFixed(0)}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`₹${value.toFixed(2)}`, 'Price']}
                    labelFormatter={(label) => `Time: ${label}`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }} 
                    name="Stock Price"
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Building chart data... First update in 1 minute</p>
              </div>
            )}
          </div>
        </div>

        {/* Stock Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Stock Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Open Price */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Open Price</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{stockdata.open?.toLocaleString('en-IN')}
              </p>
            </div>

            {/* High Price */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Day High</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{stockdata.high?.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Low Price */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Day Low</p>
              <p className="text-2xl font-bold text-red-600">
                ₹{stockdata.low?.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Previous Close */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Previous Close</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{stockdata.prev_close?.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Volume */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Volume (₹)</p>
              <p className="text-2xl font-bold text-gray-900">
                {stockdata.volume?.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Price Change */}
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Price Change</p>
              <p className={`text-2xl font-bold ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stockdata.price_change}
              </p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-500">Day Range</p>
                <p className="font-semibold text-gray-900">
                  ₹{stockdata.low?.toLocaleString('en-IN')} - ₹{stockdata.high?.toLocaleString('en-IN')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Market Status</p>
                <p className={`font-semibold ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPositive ? 'Bullish' : 'Bearish'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
