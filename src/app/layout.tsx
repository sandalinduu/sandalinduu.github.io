import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Sandalindu Gunarathna Portfolio",
  description: "My personal portfolio website built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
