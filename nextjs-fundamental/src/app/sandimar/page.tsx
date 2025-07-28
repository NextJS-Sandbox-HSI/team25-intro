"use client";

import styles from './sandimar.module.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';

export default function Sandimar() {
  const name = "Sandi Mardiansyah";
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Kecepatan ketik (ms)
      return () => clearTimeout(timeout);
    }
  }, [index, name]);

  return (
    <div className={`${styles.container} min-h-screen flex items-center justify-center`}>
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            
            {/* Navbar Component */}
            <Navbar />

            <h1 id="home" className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4 pt-16">
                {displayedName}
            </h1>
            
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Assalammu'alaikum, saya berasal dari Soreang-Bandung. Mengikuti bootcamp ini karena saya ingin beralih menjadi seorang web developer.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-5">Semoga setelah bootcamp selesai, saya bisa membuat produk yang dapat dimanfaatkan oleh semua orang.</p>

            {/* About dan Contact sekarang ada di halaman terpisah */}
        </div>
    </div>
  );
}