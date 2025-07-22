// src/app/[username_github_anda]/page.tsx
'use client'; // Menandakan bahwa ini adalah Client Component

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ReusableHeader from '../_components/ReusableHeader'; // Sesuaikan path
import MyUniqueComponent from '../_components/MyUniqueComponent'; // Sesuaikan path

export default function DashboardAboutPage() {
  return (
    <div className=" bg-gray-50 font-sans">
      <ReusableHeader title="Komponen Penghitung Unik" />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Komponen Penghitung Unik</h1>


        <MyUniqueComponent />
        
    </div>
    </div>
    );
}
