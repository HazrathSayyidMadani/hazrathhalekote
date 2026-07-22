import { motion } from "framer-motion";



function About() {
  return (
   <motion.section
  id="about"
  className="py-24 bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/hero.jpg"
              alt="School Building"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-[#556B2F] font-semibold uppercase tracking-widest">
              About Our School
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-3 mb-6">
              Inspiring Excellence,
              Building Character
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sayyid Madani English Medium School, Halekote, Ullal,
              is committed to providing quality education that
              nurtures academic excellence, moral values, leadership,
              and lifelong learning.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our mission is to create confident, responsible,
              and compassionate individuals who are prepared
              to contribute positively to society.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-gray-50 p-5 rounded-2xl shadow">
                <h3 className="font-bold text-[#1E1B4B] text-xl mb-2">
                  Our Vision
                </h3>

                <p className="text-gray-600">
                  To empower students through knowledge,
                  values, and innovation.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl shadow">
                <h3 className="font-bold text-[#1E1B4B] text-xl mb-2">
                  Our Mission
                </h3>

                <p className="text-gray-600">
                  Deliver holistic education for academic
                  and personal growth.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;
