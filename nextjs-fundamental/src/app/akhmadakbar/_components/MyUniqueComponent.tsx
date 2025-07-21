// src/app/[username_github_anda]/components/MyUniqueComponent.tsx
'use client'

// src/app/[username_github_anda]/components/MyUniqueComponent.tsx
import React, { useState } from 'react';

const MyUniqueComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div className="border-2 border-dashed border-blue-500 p-6 my-8 rounded-lg text-center bg-blue-50">
      <h3 className="text-xl font-semibold text-blue-800 mb-3">Komponen Penghitung Unik</h3>
      <p className="text-3xl font-bold text-blue-700 mb-4">Nilai: {count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Tambah
        </button>
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Kurang
        </button>
      </div>
    </div>
  );
};

export default MyUniqueComponent;
