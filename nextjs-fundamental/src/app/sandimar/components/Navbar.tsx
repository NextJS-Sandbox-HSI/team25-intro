import React from 'react';
import Link from 'next/link'; // Import Link dari next/link

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-center z-10">
        <ul className="flex space-x-6 md:space-x-10">
            <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link href="/sandimar#home" className="text-white text-lg md:text-xl font-medium hover:text-gray-300 transition duration-300">Home</Link>
            </li>
            <li>
                <Link href="/sandimar/aboutpage" className="text-white text-lg md:text-xl font-medium hover:text-gray-300 transition duration-300">About</Link>
            </li>
            <li>
                <Link href="/sandimar/contactpage" className="text-white text-lg md:text-xl font-medium hover:text-gray-300 transition duration-300">Contact</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;