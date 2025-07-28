import React from 'react';
import About from '../about/Abouts'; // Import komponen About
import styles from '../sandimar.module.css'; // Import CSS untuk konsistensi layout
import Navbar from '../components/Navbar'; // Import Navbar

export default function AboutPage() {
  return (
    <div className={`${styles.container} min-h-screen flex flex-col items-center justify-start py-12`}>
        <Navbar /> {/* Tampilkan Navbar di halaman ini juga jika diinginkan */}
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center mt-20">
            <About />
        </div>
    </div>
  );
}