import "./dendysadhewo.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSI Sandbox",
  description: "Next.js Sandbox HSI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <img
          src="https://sandbox.hsi.id/favicon.ico"
          alt="Logo HSI Sandbox"
          className="fixed top-4 left-4 w-12 h-12 z-50 rounded-lg shadow-lg"
        />
        {children}
      </div>
  );
}
