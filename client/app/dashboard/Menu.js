"use client";
import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menu, setMenu] = useState(0);
  
  const menuItems = [
    { label: "All stocks", href: "/dashboard", index: 0 },
    { label: "Watchlist", href: "/dashboard/watchlist", index: 1 },
    { label: "Holdings", href: "/dashboard/holdings", index: 2 },
    { label: "Orders", href: "/dashboard/order", index: 3 },
    { label: "Funds", href: "/dashboard/funds", index: 4 },
  ];

  const handleMenuClick = (index) => {
    setMenu(index);
  };

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200/50 p-4 md:p-6">
        {menuItems.map((item) => (
          <Link
            key={item.index}
            prefetch={true}
            onClick={() => handleMenuClick(item.index)}
            href={item.href}
            className="group relative"
          >
            <div
              className={`relative px-4 py-3 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-center min-w-[80px] md:min-w-[100px]
                ${
                  menu === item.index
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-gray-700 hover:text-blue-600 shadow-md hover:shadow-lg border border-gray-200 hover:border-blue-300"
                }
              `}
            >
              <span className="relative z-10">{item.label}</span>
              
              {/* Hover effect for inactive items */}
              {menu !== item.index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              
              {/* Glow effect for active item */}
              {menu === item.index && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              )}
              
              {/* Active indicator line */}
              {menu === item.index && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
