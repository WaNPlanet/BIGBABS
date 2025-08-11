"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnnouncementsSection() {
  const cards = [
    {
      img: "/image1.png",
      title: "Ride with BIGBABS",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
    },
    {
      img: "/image2.png",
      title: "Partner With US",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
    },
    {
      img: "/image3.png",
      title: "BIGBABS for your Employees",
      desc: "designing a resilient architecture in advance, with region-based redundancies and",
      highlight: true, // Blue border as in the screenshot
    },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col">
      {/* Banner */}
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-100 p-4 md:p-20 rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          This is a banner for announcements, discounts, promotions etc
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 max-w-7xl mx-auto w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center border border-transparent ${
              card.highlight ? "border-blue-500" : ""
            } rounded-md p-4 shadow-sm`}
          >
            <div className="relative w-48 h-40 mb-4">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-base md:text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
            <Link
              href="#"
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
