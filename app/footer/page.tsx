"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* More on BIGBABS */}
        <div className="bg-neutral-900 rounded-md p-5">
          <h4 className="font-semibold mb-4">More on BIGBABS</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Drivers</Link></li>
            <li><Link href="#">Register your store</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Ride with Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="bg-neutral-900 rounded-md p-5">
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Cookies</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="bg-neutral-900 rounded-md p-5">
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Contact US</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">More</Link></li>
          </ul>
        </div>

        {/* Get More on the App */}
        <div className="bg-neutral-900 rounded-md p-5">
          <h4 className="font-semibold mb-4">Get More on the App</h4>
          <div className="space-y-3">
            <Link href="#">
              <Image
                src="/Download_on_the_App_Store.png"
                alt="App Store"
                width={150}
                height={45}
              />
            </Link>
            <Link href="#">
              <Image
                src="/Google_Play_Store.png"
                alt="Google Play"
                width={150}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-8">
        <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
          <FaFacebookF size={18} />
        </Link>
        <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
          <FaInstagram size={18} />
        </Link>
        <Link href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
          <FaXTwitter size={18} />
        </Link>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-6 opacity-75">
        © 2024 BIGBABS
      </div>
    </footer>
  );
}
