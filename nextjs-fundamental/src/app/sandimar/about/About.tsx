'use client';

import React, { useRef, useEffect, useState } from 'react';
// Pastikan path ke sandimar.module.css benar relatif dari lokasi About.tsx
import styles from '../sandimar.module.css'; // Path disesuaikan untuk 2 level ke atas

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about" // ID ini mungkin tidak lagi diperlukan jika halaman tidak di-scroll ke sana dari Navbar utama
      ref={aboutRef}
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