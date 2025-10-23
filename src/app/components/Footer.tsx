import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-8  border-t border-[#0A0A23]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            © {new Date().getFullYear()} Sandalindu Gunarathna
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Developer & Designer
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex space-x-6">
          <Link
            href="#home"
            className="hover: transition-all duration-300 hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="hover: transition-all duration-300 hover:scale-110"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="hover: transition-all duration-300 hover:scale-110"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="hover:transition-all duration-300 hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/sandalindu-gunarathna-879574364/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover: transition-all duration-300 hover:scale-125"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sandalinduu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover: transition-all duration-300 hover:scale-125"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}