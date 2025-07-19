import Image from "next/image";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home() {
  const appDir = path.join(process.cwd(), 'src/app');
  const items = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !dirent.name.startsWith('(') && // optional: exclude special folders
        !dirent.name.startsWith('_') && // optional: exclude internal folders
        !['api'].includes(dirent.name) // exclude system folders like 'api'
    )
    .map((dirent) => dirent.name);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h2 className="text-2xl mb-3 font-bold">Sandbox IT HSI 2025</h2>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        </div>
        <div className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2 tracking-[-.01em]">
            Assalamualaikum, ahlan wa sahlan
          </p>
          <p className="tracking-[-.01em]">
            Materi untuk NextJS Fundamental bisa diakses di{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              sini
            </a>
            .
          </p>
        </div>

        <section>
      <h1 className="text-2xl font-bold mb-4">Team Member</h1>
      <ul className="space-y-2">
        {items.map((name) => (
          <li key={name}>
            <Link href={`/${name}`} className="text-blue-600 hover:underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
