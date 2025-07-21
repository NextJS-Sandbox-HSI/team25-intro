
// src/app/[username_github_anda]/about/page.tsx
'use client'; // Menandakan bahwa ini adalah Client Component

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ReusableHeader from './_components/ReusableHeader'; // Sesuaikan path

// Data dummy untuk dashboard
const dashboardData = {
  totalUsers: 250, // Data yang sedikit berbeda
  activeUsers: 180,
  newSignupsToday: 12,
  revenueThisMonth: 3500,
  tasksCompleted: 40,
  pendingTasks: 5,
};

export default function DashboardHomePage() {
  const [data, setData] = useState(dashboardData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasikan fetching data
    const timer = setTimeout(() => {
      setData({
        ...dashboardData,
        totalUsers: dashboardData.totalUsers + Math.floor(Math.random() * 20),
        revenueThisMonth: dashboardData.revenueThisMonth + Math.floor(Math.random() * 100),
      });
      setLoading(false);
    }, 1500); // Simulasi loading 1.5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 font-sans mx-auto my-6 ">
      <ReusableHeader title="Dashboard" />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="ml-4 text-lg text-gray-600">Memuat data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Total Pengguna */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Total Pengguna</h3>
                <span className="text-blue-500 text-2xl">📊</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{data.totalUsers.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">Jumlah pengguna terdaftar</p>
            </div>

            {/* Card 2: Pengguna Aktif */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Pengguna Aktif</h3>
                <span className="text-green-500 text-2xl">🟢</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{data.activeUsers.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">Pengguna aktif hari ini</p>
            </div>

            {/* Card 3: Pendaftaran Baru Hari Ini */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Pendaftaran Baru</h3>
                <span className="text-purple-500 text-2xl">✨</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{data.newSignupsToday}</p>
              <p className="text-sm text-gray-500 mt-2">Pengguna baru hari ini</p>
            </div>

            {/* Card 4: Pendapatan Bulan Ini */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Pendapatan Bulan Ini</h3>
                <span className="text-yellow-500 text-2xl">💰</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">${data.revenueThisMonth.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">Total pendapatan YTD</p>
            </div>

            {/* Card 5: Tugas Selesai */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Tugas Selesai</h3>
                <span className="text-indigo-500 text-2xl">✅</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{data.tasksCompleted}</p>
              <p className="text-sm text-gray-500 mt-2">Tugas yang telah diselesaikan</p>
            </div>

            {/* Card 6: Tugas Tertunda */}
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Tugas Tertunda</h3>
                <span className="text-red-500 text-2xl">⏳</span>
              </div>
              <p className="text-4xl font-bold text-gray-900">{data.pendingTasks}</p>
              <p className="text-sm text-gray-500 mt-2">Tugas yang perlu diselesaikan</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
