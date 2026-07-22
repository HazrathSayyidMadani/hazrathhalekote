import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaTrophy,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "380",
      label: "Students",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "12",
      label: "Faculty Members",
    },
    {
      icon: <FaAward />,
      number: "10+",
      label: "Years of Excellence",
    },
    {
      icon: <FaTrophy />,
      number: "100%",
      label: "Academic Success",
    },
  ];

  return (
    <section className="py-24 bg-[#1E1B4B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Building future leaders through academic excellence,
            discipline, and holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center"
            >
              <div className="text-5xl text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mb-2">
                {item.number}
              </h3>

              <p className="text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          <div className="bg-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-300">
              Consistent outstanding performance in board examinations.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Sports Excellence
            </h3>
            <p className="text-gray-300">
              Active participation and achievements in various sports.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Character Building
            </h3>
            <p className="text-gray-300">
              Developing responsible, disciplined and confident students.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;