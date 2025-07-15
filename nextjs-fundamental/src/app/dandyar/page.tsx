'use client';

import { useState } from 'react'
import styles from './dandyar.module.css'
import HamburgerButton from './_components/HamburgerButton' // Impor komponen tombol
import NavigationMenu from './_components/NavMenu'

export default function Dandyar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${styles.container} min-h-screen flex items-center justify-center`}>
        <HamburgerButton 
          isOpen={isMenuOpen} 
          onClick={() => setMenuOpen(!isMenuOpen)} 
        />
        <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
                Dandy Alfaz
            </h1>
            
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Hi, I'm from Bandung, Indonesia. On a daily basis, I actively engage in developer advocacy, perform code reviews, and facilitate Scrum practices as a Scrum Master. Most of my daily work involves coding in Java.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-5">I am passionate about badminton, motorcycles, literature, computers, and books. I am also continuously seeking opportunities to learn, collaborate, and contribute to impactful technology solutions.</p>

        </div>
    </div>
  );
}
