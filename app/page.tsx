"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
// import GroceriesPage from "./components/groceries";
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
      {/* Top navigation */}
      <header className="w-full flex justify-between items-center px-4 md:px-8 py-4 z-20">
        {/* Logo */}
       <div className="flex items-center space-x-2">
  <Image
    src="/logo5.png"
    alt="BIGBABS Logo"
    width={40}  // Reduced from 120
    height={13} // Reduced proportionally (20/120 = 0.166 → 80*0.166 ≈ 13)
    priority
    className="object-contain" // Ensures proper scaling
  />
</div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#001856]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#001856] font-medium">
          <a href="#">Careers</a>
          <a href="#">Drivers</a>
          <a href="#">Merchants</a>
          <a href="#">Events</a>
          <button className="bg-[#001856] text-white px-4 py-2 rounded-[100px]">
            Login
          </button>
          <button className="bg-[#FFD966] text-[#001856] px-4 py-2 rounded-[100px]">
            Signup
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[#001856] font-medium">Careers</a>
              <a href="#" className="text-[#001856] font-medium">Drivers</a>
              <a href="#" className="text-[#001856] font-medium">Merchants</a>
              <a href="#" className="text-[#001856] font-medium">Events</a>
              <div className="flex space-x-4 pt-2">
                <button className="bg-[#001856] text-white px-4 py-2 rounded-[100px] w-full">
                  Login
                </button>
                <button className="bg-[#FFD966] text-[#001856] px-4 py-2 rounded-[100px] w-full">
                  Signup
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Rest of your code remains the same */}
      {/* Fullscreen image background */}
     

      {/* Main content - grows to fill space */}
      <main className="flex-1 flex flex-col">
         <div className="absolute inset-0 -z-10">
        <Image
          src="/landing1.png"
          alt="Shopping Woman"
          fill
          className="object-cover"
          priority
        />
      </div>
        {/* Text content - centered vertically */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-[#001856] text-3xl md:text-4xl font-bold">
            Your Favorite, Restaurants.
          </h1>
          <h2 className="text-[#001856] text-3xl md:text-4xl font-bold">
            Supermarkets, Shops 
            <br />and Many More!
          </h2>
        </div>

        {/* Delivery section - fixed at bottom */}
        <div className="w-full pb-12 pt-6">
          <div className="max-w-md mx-auto px-4">
            <h3 className="text-[#001856] text-xl font-semibold text-center mb-4">
              Order Delivery Near You
            </h3>
            <div className="relative">
              <div className="flex items-center bg-white rounded-[100px] shadow-lg px-4 py-3 pr-14">
                <span className="text-gray-500 mr-2">📍</span>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Delivery Address"
                  className="flex-1 outline-none text-sm bg-transparent"
                />
              </div>
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#001856] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform">
                ➡
              </button>
            </div>
          
          </div>
            {/* <div className="flex justify-end mt-2">
              <p className="text-[#001856] font-bold text-right">
                Or <span className="underline cursor-pointer">Login to your account!</span>
              </p>
            </div> */}
            <div className="flex justify-end mt-2">
  <p className="text-[#001856] font-bold text-right">
    Or{" "}
    <Link href="/groceries">
      <span className="underline cursor-pointer">Login to your account!</span>
    </Link>
  </p>
</div>
        </div>
      </main>
     
    </div>

<Groceries/>
 <Banner/>
 <Footer/>
    </>
    
  );
}