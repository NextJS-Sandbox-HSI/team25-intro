"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from '../sandimar.module.css'; // Import styles untuk kelas animasi

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen terlihat (intersecting), atur isVisible menjadi true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opsional: berhenti mengamati setelah terlihat
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // Mengamati dari viewport
        rootMargin: '0px',
        threshold: 0.1, // Berapa persen elemen harus terlihat untuk memicu callback
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup observer saat komponen di-unmount
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []); // [] agar effect hanya berjalan sekali saat mount

  return (
    <div
      id="about"
      ref={aboutRef} // Pasangkan ref ke elemen
      className={`mt-20 pt-16 ${styles.appearOnScroll} ${isVisible ? styles['is-visible'] : ''}`}
    >
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6">
            About Me
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-4">
            Saya memiliki minat yang kuat dalam pengembangan web dan berkomitmen untuk mempelajari teknologi terbaru. Bootcamp ini adalah langkah awal saya untuk mewujudkan impian menjadi seorang web developer profesional. Saya percaya bahwa dengan kerja keras dan dedikasi, saya bisa mencapai tujuan saya.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-200">
            Selain coding, saya juga suka belajar hal baru dan mencari solusi kreatif untuk setiap tantangan. Saya antusias untuk berkolaborasi dalam proyek-proyek yang menarik dan memberikan dampak positif.
        </p>
    </div>
  );
};

export default About;