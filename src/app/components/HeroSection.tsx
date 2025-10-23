"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-8 md:px-16 pt-24 bg-[#0A0A23] text-white"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-[#1A1A70]/30">
            <Image
              src="/dp.png"
              alt="Profile"
              fill
              className="object-cover transition-all duration-500 hover:grayscale"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, It&apos;s <br />
            <span className="font-extrabold text-white">Sandalindu Gunarathna</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            I&apos;m a <span className="border-b-4 border-white">Developer & Designer</span>
          </h2>

          <p className="text-lg mb-8 max-w-xl md:max-w-none mx-auto md:mx-0 text-gray-300">
            Pixels meet code <span>&lt;/&gt;</span>, creating digital experiences
            where thoughtful design meets reliable development. I build modern,
            user-friendly interfaces that look great and work seamlessly.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mb-10">
            <a
              href="https://www.linkedin.com/in/sandalindu-gunarathna-879574364/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:scale-125 text-3xl"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/sandalinduu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-300 hover:scale-125 text-3xl"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-[#0B0B45] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#1A1A70] hover:shadow-[#0B0B45]/50 transform hover:-translate-y-1"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
}
