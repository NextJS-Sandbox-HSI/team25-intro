"use client";

import React, { useRef, useEffect, useState, use } from 'react';
import styles from '../sandimar.module.css'; // Import styles untuk kelas animasi

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef} // Pasangkan ref ke elemen
      className={`mt-20 pt-16 pb-16 ${styles.appearOnScroll} ${isVisible ? styles['is-visible'] : ''}`}
    >
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Contact
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-4">
            Anda bisa menghubungi saya melalui email atau LinkedIn. Saya terbuka untuk diskusi dan kesempatan kolaborasi.
        </p>
        <div className="flex justify-center items-center space-x-6">
            <a href="mailto:dandyalfaz@yahoo.co.id" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                <span className="sr-only">Email</span>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/dandyalfaz/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
        </div>
    </div>
  );
};

export default Contact;