"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans bg-gradient-to-br from-pink-50 to-purple-100 text-gray-800 min-h-screen">

      {/* --- FIXED TOP NAVBAR --- */}
      <header className="backdrop-blur-xl bg-white/70 border-b border-white/40 shadow-xl fixed top-0 left-0 w-full z-50 py-4 px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">

          {/* LOGO */}
          <img
            src="/fig-ss.png"
            alt="Logo"
            className="w-16 drop-shadow-2xl animate-pulse"
          />

          {/* HAMBURGER BUTTON (Mobile) */}
          <button
            className="text-purple-600 text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* MENU (Desktop) */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-lg font-semibold">

              <li>
                <Link href="/">
                  <span className="bg-gradient-to-r from-pink-300 to-pink-400 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition block">
                    🌸 Home
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <span className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition block">
                    💐 About
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/services">
                  <span className="bg-gradient-to-r from-blue-300 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition block">
                    🌷 Services
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <span className="bg-gradient-to-r from-green-300 to-green-400 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition block">
                    🌻 Contact
                  </span>
                </Link>
              </li>

            </ul>
          </nav>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {open && (
          <div className="md:hidden bg-white/80 backdrop-blur-xl mt-4 rounded-xl shadow-xl p-6">
            <ul className="flex flex-col gap-4 text-lg font-semibold text-center">

              <li>
                <Link href="/">
                  <span className="block bg-pink-300 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
                    🌸 Home
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <span className="block bg-purple-300 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
                    💐 About
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/services">
                  <span className="block bg-blue-300 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
                    🌷 Services
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <span className="block bg-green-300 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
                    🌻 Contact
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 pt-48">
        <section className="text-left mb-14 bg-white/70 p-10 rounded-3xl shadow-lg backdrop-blur-xl">
          <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm mb-4 animate-pulse pl-14">
            Welcome to Our Bloom 🌺
          </h1>
          <p className="text-xl text-gray-600 pl-14">
            Explore the beauty of nature with our fresh & vibrant flowers.
          </p>
        </section>

        <section className="bg-white/70 p-10 rounded-3xl shadow-lg backdrop-blur-xl">
          <p className="text-gray-700 text-lg leading-relaxed pl-14">
            We deliver the freshest flowers wrapped with love. Handcrafted bouquets
            designed to bring smiles, elegance, and unforgettable beauty to your
            special moments.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
