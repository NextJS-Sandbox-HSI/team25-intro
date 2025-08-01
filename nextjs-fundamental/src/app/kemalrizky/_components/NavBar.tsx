'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
    };
    const activeStyle = { 
        fontWeight: 'bold', 
        color: '#0050b3',
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#f8f8f8',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            zIndex: 1000,
        }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0}}>
                <li>
                    <Link href="/kemalrizky" style={pathname === '/kemalrizky' ? activeStyle : linkStyle}>Home</Link>
                </li>
                <li>
                    <Link href="/kemalrizky/about" style={pathname === '/kemalrizky/about' ? activeStyle : linkStyle}>About</Link>
                </li>
                <li>
                    <Link href="/kemalrizky/projects" style={pathname === '/kemalrizky/projects' ? activeStyle : linkStyle}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}