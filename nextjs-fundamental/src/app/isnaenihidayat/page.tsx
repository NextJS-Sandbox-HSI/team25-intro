import styles from './isnaenihidayat.module.css'

export default function Isnaeni() {
  return (
    <div className={`${styles.container} min-h-screen flex items-center justify-center`}>
        <div className="w-full max-w-4xl mx-auto bg-black bg-opacity-25 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
                Dandy Alfaz
            </h1>
            
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Hi, I'm from Bandung, Indonesia. On a daily basis, I actively engage in developer advocacy, perform code reviews, and facilitate Scrum practices as a Scrum Master. Most of my daily work involves coding in Java.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-5">I am passionate about badminton, motorcycles, literature, computers, and books. I am also continuously seeking opportunities to learn, collaborate, and contribute to impactful technology solutions.</p>

            <div className="flex justify-center items-center space-x-6">
                <a href="https://www.linkedin.com/in/dandyalfaz/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="https://github.com/dandyar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="mailto:dandyalfaz@yahoo.co.id" className="text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-110">
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
