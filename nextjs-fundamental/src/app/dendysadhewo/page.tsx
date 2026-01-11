"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./_components/NavBar";
import TypingAnimation from "./_components/TypingAnimations";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Footer from './_components/Footer';

// Definisikan tipe untuk halaman-halaman yang valid
type PageType = "home" | "about" | "contact";

const HomePage = () => {
  const phrasesToAnimate = ["Dendy Sadhewo", "santri HSI", "peserta sandbox HSI", "hamba ٱللَّٰه", "teknisi IT", "apa lagi ya?"];
  return (
    <div className="flex flex-col items-start justify-center h-full w-full text-white text-left p-4">
      <h1 className="text-6xl font-extrabold mb-4">أهلاً وسهلاً</h1>
      <p className="text-3xl font-medium mb-2">
        Saya adalah <TypingAnimation phrases={phrasesToAnimate} />
      </p>
      <p className="text-3xl font-medium">Ini adalah proyek Sandbox HSI</p>
    </div>
  );
};

export default function Page() {
  // Gunakan PageType untuk state currentPage
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const backgroundImages: Record<PageType, string> = { // Tambahkan Record<PageType, string> di sini
    home: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    about: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
    contact: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[currentPage]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background-image 1s ease-in-out";
  }, [currentPage]);

  // Gunakan PageType untuk parameter page
  const handleNavigate = (page: PageType) => setCurrentPage(page);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar onNavigate={handleNavigate} />
      <main className="flex-grow flex items-center p-4">
        <div key={currentPage} className="w-full h-full animate-fade-in-page flex items-center">
          {currentPage === "home" && <HomePage />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "contact" && <ContactPage />}
        </div>
      </main>
      <Footer />
    </div>
  );
}