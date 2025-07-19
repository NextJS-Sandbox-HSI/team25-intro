// penggunaan layout yang dipakai oleh beberapa halaman di Next.js App Router.
// Untuk proyek menengah–besar: lebih baik pisahkan styling agar rapi (pakai globals.css atau Tailwind)
// disini kita langsung tanpa globals.css

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yokie Yusnika Supono',
  description: 'Perkenalan untuk Sandbox 25 oleh Yokie Yusnika Supono',
  keywords: ['Yokie', 'Yusnika', 'Next.js', 'Sandbox 25'],
  authors: [{ name: 'Yokie Yusnika Supono' }],
  creator: 'Yokie',
};

export default function YokieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '100vh',
      }}
    >
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
        <h1>Selamat Datang di Halaman Yokie YS</h1>
      </header>

      <main style={{ padding: '2rem' }}>{children}</main>

      <footer style={{ backgroundColor: '#eee', padding: '1rem', marginTop: '2rem' }}>
        <p>© 2025 Yokie Yusnika Supono</p>
      </footer>
    </div>
  );
}
