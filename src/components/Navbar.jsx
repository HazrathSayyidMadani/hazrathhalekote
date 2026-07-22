import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import school from "../config/school";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4">
          <a href="#home" className="flex items-center gap-3 min-w-0">
            <img src={logo} alt="School Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0" />
            <div className="min-w-0">
              <h1 className="text-sm md:text-lg font-bold text-[#1E1B4B] leading-tight truncate">
                {school.name.toUpperCase()}
              </h1>
              <p className="text-[10px] md:text-xs text-gray-600">{school.subtitle}</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {school.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 hover:text-[#1E1B4B] transition text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="bg-[#1E1B4B] text-white px-5 py-2 rounded-full hover:scale-105 transition text-sm font-semibold"
            >
              Apply Now
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {school.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="bg-[#1E1B4B] text-white py-3 rounded-lg text-center font-semibold mt-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
