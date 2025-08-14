"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Banner from "./banner/page";
import Footer from "./footer/page";
import Groceries from "./groceries/page";

export default function Home() {
  const [address, setAddress] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen font-sans relative flex flex-col">
        {/* Top navigation - compact */}
        <header className="w-full flex justify-between items-center px-4 md:px-8 py-3 z-20 bg-white shadow-sm">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo5.png"
              alt="BIGBABS Logo"
              width={40}
              height={20}
              priority
              className="object-contain"
            />
          </div>

          <button
            className="md:hidden text-[#001856]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-[#001856] font-medium">
            <a href="#" className="hover:text-blue-600">Careers</a>
            <a href="#" className="hover:text-blue-600">Drivers</a>
            <a href="#" className="hover:text-blue-600">Merchants</a>
            <a href="#" className="hover:text-blue-600">Events</a>
            <button className="bg-[#001856] text-white px-3 py-1.5 rounded-[100px] hover:bg-blue-700 transition text-sm">
              Login
            </button>
            <button className="bg-[#FFD966] text-[#001856] px-3 py-1.5 rounded-[100px] hover:bg-yellow-500 transition text-sm">
              Signup
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-3 px-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-[#001856] font-medium hover:text-blue-600">Careers</a>
                <a href="#" className="text-[#001856] font-medium hover:text-blue-600">Drivers</a>
                <a href="#" className="text-[#001856] font-medium hover:text-blue-600">Merchants</a>
                <a href="#" className="text-[#001856] font-medium hover:text-blue-600">Events</a>
                <div className="flex space-x-3 pt-2">
                  <button className="bg-[#001856] text-white px-3 py-1.5 rounded-[100px] w-full hover:bg-blue-700 transition text-sm">
                    Login
                  </button>
                  <button className="bg-[#FFD966] text-[#001856] px-3 py-1.5 rounded-[100px] w-full hover:bg-yellow-500 transition text-sm">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main content - single 100vh screen */}
        <main className="flex-1 flex flex-col h-[calc(100vh-64px)]">
          {/* Image + Text + Image Row - compact */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between py-8 gap-4 flex-1">
  
            {/* Left Image - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block md:col-span-4 flex justify-center h-full">
              <div className="relative w-full h-[190%] -mt-40">
                <Image
                  src="/shopping.png"
                  alt="Shopping Woman"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 868px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Centered Text - Always visible */}
            <div className="col-span-12 md:col-span-4 flex flex-col items-center text-center space-y-4 px-4">
              <h2 className="text-[#001856] text-2xl md:text-3xl font-bold">
                Your Favorite, Restaurants. <br />
                Supermarkets, Shops <br /> and Many More!
              </h2>
            </div>

            {/* Right Image - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block md:col-span-4 flex justify-center h-full">
              <div className="relative w-full h-[140%]">
                <Image
                  src="/groceriess.png"
                  alt="Groceries Basket"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Yellow Ribbon with dramatic curve */}
          <div className="relative w-full mt-auto">
            {/* Curved background container */}
            <div className="absolute bottom-0 left-0 w-full h-48 z-0 overflow-hidden">
              {/* The actual curved element */}
              <div 
                className="w-[200%] h-[300px] bg-[#FFBC00] rounded-tl-[5000%] rounded-tr-[1000%] relative left-[-50%]"
                style={{
                  height: '300px',
                  borderRadius: '100% 100% 0 0'
                }}
              ></div>
            </div>
            
            {/* Content container - positioned above the curve */}
            <div className="relative z-10 w-full max-w-md mx-auto px-4 pt-8 pb-16">
              <h3 className="text-[#001856] text-lg font-semibold text-center mb-4">
                Order Delivery Near You
              </h3>
              <div className="relative">
                <div className="flex items-center bg-white rounded-[100px] shadow-lg px-4 py-2 pr-12">
                  <span className="text-gray-500 mr-2">📍</span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Delivery Address"
                    className="flex-1 outline-none text-sm bg-transparent"
                  />
                </div>
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#001856] text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform">
                  ➡
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <p className="text-[#001856] text-sm font-bold text-right">
                  Or{" "}
                  <Link href="/groceries">
                    <span className="underline cursor-pointer hover:text-blue-600">
                      Login to your account!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Groceries />
      <Banner />
      <Footer />
    </>
  );
}