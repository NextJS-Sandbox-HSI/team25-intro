import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../kemalrizky.module.css'

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

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    keywords?: string[];
}

export default function ProjectCard({
    title,
    description,
    href,
    keywords,
}: ProjectCardProps) {
    const cardClasses = `${styles.card} transition-all duration-300 transform hover:-translate-y-1 shadow-lg group relative`;
    const cardContent = (
        <>
            <div className="absolute top-5 right-5 text-gray-400 group-hover:text-blue-500 transition-colors">
                <ExternalLinkIcon />
            </div>
            <div>
                <h1 className={styles.project_name}>{title}</h1>
                <hr className={styles.divider} />
                <p className={styles.bio}>{description}</p>
                { keywords &&(
                    <div className={styles.keywords}>
                    {keywords.map((keyword, index) => (
                        <span
                            key={index}
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
                )}
            </div>
        </>
    );

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