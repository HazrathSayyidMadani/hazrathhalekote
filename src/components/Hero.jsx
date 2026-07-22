import { FaArrowRight, FaDownload } from "react-icons/fa";
import hero from "../assets/hero.jpg";
import school from "../config/school";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-[#1E1B4B] flex items-center justify-center z-[9999]">
      <div className="text-center text-white px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">{school.name}</h1>
        <p className="text-blue-200">{school.subtitle}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={hero} alt={school.fullName} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1E1B4B]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
        <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold mb-4 text-sm">
          Admissions Open 2026-27
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
          {school.fullName}
        </h1>

        <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 text-gray-200 px-2">
          {school.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-12">
          <a
            href="#admissions"
            className="bg-[#D4AF37] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            Apply Now <FaArrowRight />
          </a>
          <a
            href="/Prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
          >
            Prospectus <FaDownload />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {school.stats.map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{stat.number}</h3>
              <p className="text-sm md:text-base text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
