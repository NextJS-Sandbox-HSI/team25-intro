// components/ProjectCard.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

// Definisikan props untuk komponen
interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode; // Opsi untuk menambahkan ikon, bisa berupa komponen/SVG
  isExternal?: boolean; // Opsi untuk menandakan link eksternal
}

/**
 * Ikon kecil untuk menandakan link eksternal.
 * Ditempatkan di dalam komponen agar self-contained.
 */
const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-up-right"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function ProjectCard({
  title,
  description,
  href,
  icon,
  isExternal = false,
}: ProjectCardProps) {
  // Kelas CSS yang sama untuk kedua jenis link agar konsisten
  const cardClasses =
    "bg-black card-bg border border-white rounded-2xl p-6 text-left flex flex-col hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg group relative";

  // Konten internal dari card
  const cardContent = (
    <>
      {/* Ikon untuk link eksternal, muncul di pojok kanan atas */}
      {isExternal && (
        <div className="absolute top-5 right-5 text-gray-400 group-hover:text-white transition-colors">
          <ExternalLinkIcon />
        </div>
      )}

      {/* Konten utama: ikon, judul, dan deskripsi */}
      <div className="flex items-start">
        {icon && (
          <div className="mr-4 mt-1 flex-shrink-0 text-white">{icon}</div>
        )}
        <div className="flex-1">
          <h2 className="text-white text-2xl font-bold mb-3 pr-8">{title}</h2>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Spacer untuk mendorong konten ke atas jika card memiliki tinggi yang sama */}
      <div className="flex-grow" />
    </>
  );

  // Render sebagai <a> jika link eksternal
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {cardContent}
      </a>
    );
  }

  // Render sebagai <Link> Next.js jika link internal
  return (
    <Link href={href} className={cardClasses}>
      {cardContent}
    </Link>
  );
}
