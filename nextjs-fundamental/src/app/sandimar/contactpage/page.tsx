import React from 'react';
import Contact from '../contacts/Contacts'; // Import komponen Contact
import styles from '../sandimar.module.css'; // Import CSS untuk konsistensi layout
import Navbar from '../components/Navbar'; // Import Navbar
import Link from 'next/link'; // Import Link

export default function ContactPage() {
  return (
    <div className={`${styles.container} min-h-screen flex flex-col items-center justify-start py-12`}>
        <Navbar />
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center mt-20">
            <Contact />
            {/* Tombol kembali ke menu utama */}
            <div className="mt-12">
                <Link href="/sandimar" className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
                    Kembali ke Home
                </Link>
            </div>
        </div>
    </div>
  );
}