"use client"

import type { Metadata } from "next";
import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import styles from './akbar.module.css';
import "./globals.css";
import HamburgerButton from '../dandyar/_components/HamburgerButton';
import NavigationMenu from './_components/NavMenu';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function AkbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${styles.container} min-h-screen flex flex-col items-center justify-center p-4`}>
        <HamburgerButton 
          isOpen={isMenuOpen} 
          onClick={() => setMenuOpen(!isMenuOpen)} 
        />
        <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
      {children}
    </div>
  );
}