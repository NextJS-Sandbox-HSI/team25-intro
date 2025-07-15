import Link from 'next/link';

export default function NavigationMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Daftar link navigasi
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // Overlay yang menutupi layar
    <div
    style={{
  background: 'radial-gradient(circle at right, rgba(255, 105, 180, 0.75) 30%, rgba(0, 0, 0, 0.6) 100%)',
}}
      className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose} // Menutup menu saat klik di luar area menu
    >
      {/* Kontainer Menu yang slide dari kanan */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // Mencegah menu tertutup saat klik di dalam menu
      >
        <nav className="mt-24 text-center">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="my-4">
                <Link 
                href={link.href} 
                onClick={onClose}
                className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-200">
                    {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}