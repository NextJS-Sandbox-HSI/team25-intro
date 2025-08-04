import type { Metadata } from "next";
import NavBar from "./_components/NavBar";

export const metadata: Metadata = {
    title: "Kemal Rizky Fadhlurrohman",
    description: "Self introduction by Kemal Rizky"
}

export default function KemalRizkyLayout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
}