// src/app/components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 bg-opacity-95 backdrop-blur-md shadow-md border-b border-slate-800">
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-white">
          S.GN
        </div>
        <div className="space-x-8 hidden md:flex">
          <Link href="#home" className="text-white transform hover:scale-110 transition-all duration-300">Home</Link>
          <Link href="#projects" className="text-white transform hover:scale-110 transition-all duration-300">Projects</Link>
          <Link href="#skills" className="text-white transform hover:scale-110 transition-all duration-300">Skills</Link>
          <Link href="#contact" className="text-white transform hover:scale-110 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}