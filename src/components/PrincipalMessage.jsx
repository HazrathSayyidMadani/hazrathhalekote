import principal from "../assets/principal.jpg";
import { motion } from "framer-motion";

function PrincipalMessage() {
  return (
    <motion.section
      id="principal-message"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-[#556B2F] font-semibold uppercase tracking-widest">
           
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-3">
            Head Master's Message
          </h2>

          <div className="w-24 h-1 bg-[#F4A261] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-5 gap-0">

            {/* Image */}
            <div className="lg:col-span-2 bg-[#1F4D3A] flex items-center justify-center p-10">
              <img
                src={principal}
                alt="KMK Manjanady"
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* Message */}
            <div className="lg:col-span-3 p-8 md:p-12">

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Welcome to Sayyid Madani English Medium School, Kallapu. Our institution
                is dedicated to providing quality education that nurtures
                academic excellence, strong character, and moral values.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                We believe that every child possesses unique talents and
                potential. Our committed teachers work tirelessly to create an
                environment where students can learn, grow, and become
                responsible citizens prepared for future challenges.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Education is not merely the acquisition of knowledge; it is the
                development of confidence, discipline, leadership, and
                compassion. We strive to ensure that our students excel both
                academically and personally.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I invite parents and students to join us in this journey of
                learning and excellence as we work together to build a bright
                and successful future.
              </p>

              <div className="border-t pt-6">
                <h4 className="text-2xl font-bold text-[#1F4D3A]">
                  KMK Manjanady
                </h4>

                <p className="text-gray-500 text-lg mt-1">
                  Head Master
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default PrincipalMessage;