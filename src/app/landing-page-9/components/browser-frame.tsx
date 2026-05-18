"use client";

import React from "react";

export function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E9E9EC] p-4 md:p-8 flex flex-col">
      <div className="flex-1 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col overflow-hidden relative">
        {/* Top Browser Bar */}
        <div className="h-12 bg-[#F5F5F7] border-b border-gray-200/50 flex items-center px-6 justify-between shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner" />
          </div>
          
          <div className="hidden md:flex items-center gap-2 bg-white/80 rounded-lg px-4 py-1 border border-gray-200/50 w-full max-w-[400px]">
             <div className="w-3 h-3 rounded-full bg-gray-200" />
             <div className="h-2 w-32 bg-gray-100 rounded-full" />
          </div>
          
          <div className="flex gap-4 items-center">
             <div className="w-4 h-4 rounded bg-gray-200" />
             <div className="w-4 h-4 rounded bg-gray-200" />
          </div>
        </div>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
