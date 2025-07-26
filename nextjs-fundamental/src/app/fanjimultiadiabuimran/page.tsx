import { title } from 'process';
import styles from './fanjimultiadiabuimran.module.css'


export default function fanjimultiadiabuimran () {
 return (
    <div className={`${styles.container} min-h-screen flex items-center justify-center`}>
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center">

            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
                Abu Imran Sikumbang, S.T.
            </h1>
            <h2 className="text-blue-300 text-xl md:text-2xl font-medium tracking-wide mb-4">
                Administrative Professional
            </h2>
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Halo semua, saya Abu Imran Sikumbang, berasal dari Pariaman, Sumatera Barat, berdomisli di Pekanbaru, Riau. Alumnus Teknik Informatika yang telah berkecimpung di bidang administrasi selama dua tahun.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Memiliki pengalaman kerja sebagai Admin Officer di Koperasi Sarumpun Bersyarikat dan Staff Administrasi di PT. Ashiil Cahaya Tauhid.
            </p>

            <div className="flex justify-center items-center space-x-6">
                <a href="https://www.linkedin.com/in/fanjimultiadi/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.746s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="https://github.com/fanjimultiadi-abuimran" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="https://facebook.com/abuimransikumbang" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                </a>
                <a href="https://instagram.com/abuimransikumbang" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                    </svg>
                </a>
                <a href="mailto:fanjimultiadi@gmail.com" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">Email</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>
                </a>
                </div>
            </div>
        </div>
 );
}
