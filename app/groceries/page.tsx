"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "../banner/page";
import Footer from "../footer/page";

export default function HomePage() {
  const categories = [
    {
      title: "GROCERIES",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
      img: "/groceries.jpg",
      btn: "Shop Stores",
    },
    {
      title: "Electronics",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
      img: "/electronics.jpg",
      btn: "Order Online",
    },
    {
      title: "Health Care",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
      img: "/health.png",
      btn: "Browse Stores",
    },
    {
      title: "Fitness",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
      img: "/fitness.png",
      btn: "Join Fitness Club",
    },
  ];

  return (
    <main className="font-sans">
      {/* Categories Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-start text-left">
            <div className="w-full h-48 relative rounded-lg overflow-hidden">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{cat.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
            <button className="mt-3 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition">
              {cat.btn}
            </button>
          </div>
        ))}
      </section>

      {/* Order Tracking Section */}
     <section className=" px-6 py-10">
  <div className="max-w-7xl mx-auto bg-gray-50">
    {/* Container with col-span-9 equivalent width (75% of max-w-7xl) */}
    <div className="mx-auto w-full lg:w-9/12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
        {/* Text Side - remains the same */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Track Your Orders to Your Doorstep
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Enjoy your favorite orders delivered quickly and effortlessly. Stay
            updated as your rider picks up your order and follow their journey in
            real-time. You&apos;ll also receive a notification when they&apos;re
            just around the corner!
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 mt-6">
            <Link href="/">
              <Image
                src="/Download_on_the_App_Store.png"
                alt="Download on the App Store"
                width={150}
                height={45}
              />
            </Link>

            <Link href="/">
              <Image
                src="/Google_Play_Store.png"
                alt="Get it on Google Play"
                width={150}
                height={45}
              />
            </Link>
          </div>
        </div>

        {/* Image Side - remains the same */}
        <div className="relative w-full h-72 md:h-80">
          <Image
            src="/delivery.png"
            alt="Delivery Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>

   
    </main>
  );
}
