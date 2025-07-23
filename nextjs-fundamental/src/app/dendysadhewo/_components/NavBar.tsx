// _components/NavBar.tsx

"use client";
import React from "react";

// Definisikan PageType di sini agar Navbar juga mengenali tipe ini
type PageType = "home" | "about" | "contact";

interface NavbarProps {
  // Ubah tipe 'page' dari 'string' menjadi 'PageType'
  onNavigate: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => (
  <nav style={{ position: 'fixed', top: 0, right: 0, padding: '1rem', zIndex: 50 }}>
    <ul style={{ display: 'flex', gap: '1.5rem', color: 'white', fontSize: '1.125rem', fontWeight: 600, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '9999px', padding: '0.75rem 1.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}>
      <li><button onClick={() => onNavigate("home")} style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}>Home</button></li>
      <li><button onClick={() => onNavigate("about")} style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}>About</button></li>
      <li><button onClick={() => onNavigate("contact")} style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}>Contact Me</button></li>
    </ul>
  </nav>
);

export default Navbar;