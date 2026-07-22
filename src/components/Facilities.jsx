import { motion } from "framer-motion";


import {
  FaDesktop,
  FaFlask,
  FaBook,
  FaBus,
  FaFutbol,
  FaSchool,
} from "react-icons/fa";

function Facilities() {
  const facilities = [
    {
      icon: <FaSchool />,
      title: "Smart Classrooms",
      desc: "Modern classrooms designed for interactive and engaging learning.",
    },
    {
      icon: <FaDesktop />,
      title: "Computer Lab",
      desc: "Advanced computer facilities supporting digital education.",
    },
    {
      icon: <FaFlask />,
      title: "Science Lab",
      desc: "Well-equipped laboratories for practical scientific learning.",
    },
    {
      icon: <FaBook />,
      title: "Library",
      desc: "Rich collection of books and educational resources.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports Facilities",
      desc: "Encouraging fitness, teamwork, and sportsmanship.",
    },
    {
      icon: <FaBus />,
      title: "Transportation",
      desc: "Safe and reliable transport services for students.",
    },
  ];

  return (
  <motion.section
    id="facilities"
    className="py-24 bg-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >    
    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#556B2F] font-semibold uppercase tracking-widest">
            Our Facilities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            A Modern Learning Environment
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We provide world-class facilities that support academic excellence
            and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-[#556B2F] mb-5 group-hover:scale-110 transition">
                {facility.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mb-3">
                {facility.title}
              </h3>

              <p className="text-gray-600">
                {facility.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </motion.section>

  );
}

export default Facilities;