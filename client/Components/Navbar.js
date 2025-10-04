"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useAuth
} from '@clerk/nextjs'


const Navbar = () => {
  const [loggedIn, setloggedIn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  // Handle Clerk user authentication and store data in localStorage
  useEffect(() => {
    const handleUserAuth = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          // Get the session token
          const token = await getToken();
          
          // Get user ID (Clerk user ID)
          const clerkUserId = user.id;
          
          // Store in localStorage
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("clerkUserId", clerkUserId);
            localStorage.setItem("userEmail", user.emailAddresses[0]?.emailAddress || "");
            localStorage.setItem("userName", user.firstName || user.username || "");
            
            setloggedIn(true);
          }
        } catch (error) {
          console.error("❌ Error getting token or storing user data:", error);
        }
      } else if (isLoaded && !isSignedIn) {
        // Clear localStorage when user is not signed in
        localStorage.removeItem("token");
        localStorage.removeItem("clerkUserId");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId")
        setloggedIn(false);
      }
    };

    handleUserAuth();
  }, [isLoaded, isSignedIn, user, getToken]);

  // Add user to database after authentication data is stored
  useEffect(() => {
    const addUser = async () => {
      const token = localStorage.getItem("token");
      const clerkUserId = localStorage.getItem("clerkUserId");
      const userName = localStorage.getItem("userName");
      const userEmail = localStorage.getItem("userEmail");
      
      if (token && clerkUserId && userEmail) {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_USER_SERVER_URL}/api/user/adduser`, 
            {
              clerkUserId,
              userName,
              userEmail
            },
            {
              headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          );
          
          if (response.data.success && response.data.user?._id) {
            localStorage.setItem("userId", response.data.user._id);
          }
        } catch (error) {
          console.error("❌ Error adding user:", error.message);
        }
      }
    };
    
    // Add a small delay to ensure localStorage is populated
    const timeoutId = setTimeout(() => {
      if (isLoaded && isSignedIn && localStorage.getItem("token")) {
        addUser();
      }
    }, 1000); // 1 second delay
    
    return () => clearTimeout(timeoutId);
  }, [isLoaded, isSignedIn, user]) // Added 'user' to dependencies
  

  // Fallback check for existing token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isSignedIn) {
      setloggedIn(!!token);
    }
  }, [isSignedIn]);


  return (
    <>
      <header className="bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link href="/" prefetch={true} className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg border-2 border-blue-200 group-hover:border-blue-400 transition-all duration-300"
                  src="/media/logo.png"
                  alt="Stockify Logo"
                  width={48}
                  height={48}
                />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                Stockify
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                prefetch={true}
                href="/dashboard"
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                <span className="flex items-center space-x-2">
                  <i className="ri-line-chart-line text-lg"></i>
                  <span>Stocks</span>
                </span>

              </Link>
              
              <Link
                href="/product"
                prefetch={true}
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                <span className="flex items-center space-x-2">
                  <i className="ri-product-hunt-line text-lg"></i>
                  <span>Products</span>
                </span>

              </Link>
              
              <Link
                href="/pricing"
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                <span className="flex items-center space-x-2">
                  <i className="ri-price-tag-3-line text-lg"></i>
                  <span>Pricing</span>
                </span>

              </Link>
              
              <Link
                prefetch={true}
                href="/about"
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                <span className="flex items-center space-x-2">
                  <i className="ri-information-line text-lg"></i>
                  <span>About</span>
                </span>

              </Link>
              
              <Link
                href="/support"
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
                title="Support"
              >
                <i className="ri-customer-service-2-line text-xl group-hover:scale-110 transition-transform duration-300"></i>

              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <SignedOut>
                <SignInButton className="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105" />
                <SignUpButton>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="p-2 rounded-full bg-blue-50 border-2 border-blue-200">
                  <UserButton />
                </div>
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <SignedIn>
                <div className="p-1 rounded-full bg-blue-50 border border-blue-200">
                  <UserButton />
                </div>
              </SignedIn>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className={`w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 space-y-2">
            <Link
              prefetch={true}
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <i className="ri-line-chart-line text-lg"></i>
              <span className="font-medium">Stocks</span>
            </Link>
            
            <Link
              href="/product"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <i className="ri-product-hunt-line text-lg"></i>
              <span className="font-medium">Products</span>
            </Link>
            
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <i className="ri-price-tag-3-line text-lg"></i>
              <span className="font-medium">Pricing</span>
            </Link>
            
            <Link
              prefetch={true}
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <i className="ri-information-line text-lg"></i>
              <span className="font-medium">About</span>
            </Link>
            
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <i className="ri-customer-service-2-line text-lg"></i>
              <span className="font-medium">Support</span>
            </Link>
            
            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <SignInButton className="w-full px-4 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-center" />
                <SignUpButton>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
