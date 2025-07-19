'use client';
import { useState } from 'react';
import styles from './dandyar.module.css';
import HamburgerButton from './_components/HamburgerButton';
import NavigationMenu from './_components/NavMenu';

export default function DandyarLayout({
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
