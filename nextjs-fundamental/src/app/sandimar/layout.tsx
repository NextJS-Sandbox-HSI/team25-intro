import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandi Mardiansyah",
  description: "Generated by create next app",
};

export default function SandimarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}
