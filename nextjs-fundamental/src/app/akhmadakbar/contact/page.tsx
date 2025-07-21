// src/app/[username_github_anda]/contact/page.tsx
'use client'; // Menandakan bahwa ini adalah Client Component

import Link from 'next/link';
import React from 'react'; // Hapus useState, useEffect karena tidak digunakan di sini
import ReusableHeader from '../_components/ReusableHeader'; // Sesuaikan path

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logika untuk mengirim form bisa ditambahkan di sini
    alert('Pesan Anda telah terkirim! (Ini adalah simulasi)'); // Menggunakan alert untuk demo, ganti dengan modal UI di aplikasi nyata
    // Reset form jika diperlukan
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="bg-gray-50 font-sans">
      <ReusableHeader title="Hubungi Kami" />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Halaman Kontak Kami</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Silakan hubungi kami melalui formulir di bawah ini atau kirim email langsung.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto transform transition duration-300 hover:scale-[1.01] hover:shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Nama Lengkap Anda"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="email@contoh.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan:</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-y"
              placeholder="Tulis pesan Anda di sini..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Kirim Pesan
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
