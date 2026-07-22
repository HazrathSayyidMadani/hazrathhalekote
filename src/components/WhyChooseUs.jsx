

import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBookOpen,
  FaFutbol,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";



function WhyChooseUs() {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Faculty",
      desc: "Highly qualified and experienced teachers dedicated to student success.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning",
      desc: "Modern technology-enabled classrooms for interactive learning.",
    },
    {
      icon: <FaBookOpen />,
      title: "Academic Excellence",
      desc: "Strong focus on academics with consistent outstanding results.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Activities",
      desc: "Encouraging physical fitness and extracurricular development.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Campus",
      desc: "Secure and student-friendly environment for holistic growth.",
    },
    {
      icon: <FaStar />,
      title: "Value-Based Education",
      desc: "Building character, discipline, and leadership qualities.",
    },
  ];

  return (
<motion.section
  id="why-us"
  className="py-24 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#556B2F] font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            Excellence Beyond Academics
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We provide a nurturing environment where students develop
            academically, socially, morally, and emotionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl text-[#556B2F] mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#1E1B4B] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUs;