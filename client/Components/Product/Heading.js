import React from 'react'

const Heading = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
          🚀 Our Products
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 font-serif leading-tight">
          Stockify Products
        </h1>
        
        {/* Accent Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
        
        {/* Subtitle */}
        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Sleek, modern, and intuitive trading platforms designed to empower your investment journey
        </h2>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <i className="ri-smartphone-line text-blue-600 text-xl"></i>
            <span className="font-medium">Mobile First</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <i className="ri-shield-check-line text-green-600 text-xl"></i>
            <span className="font-medium">Secure Trading</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <i className="ri-flashlight-line text-purple-600 text-xl"></i>
            <span className="font-medium">Lightning Fast</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="border-b border-gray-200"></div>
    </div>
  )
}

export default Heading
