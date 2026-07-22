import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { submitAdmission } from "../utils/api";
import school from "../config/school";

function Admission() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    course: "",
    address: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await submitAdmission({ school: school.id, ...form });
      setStatus({ type: "success", message: result.message });
      setForm({ studentName: "", parentName: "", phone: "", course: "", address: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admissions" className="py-16 md:py-24 bg-gradient-to-r from-[#1E1B4B] to-[#556B2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
              Admissions Open 2026-27
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6">Join Our Learning Community</h2>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Admissions are open for 2026-27. Give your child the opportunity to learn and grow in a nurturing environment.
            </p>
            <ul className="space-y-2 mb-8 text-sm md:text-base">
              {["Experienced Faculty", "Smart Classrooms", "Safe Campus", "Academic Excellence", "Sports & Activities"].map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
            <a
              href="/Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              <FaDownload /> Download Prospectus
            </a>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl text-gray-900">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E1B4B] mb-6">Admission Enquiry</h3>

            {status.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name *" required className="w-full border p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
              <input type="text" name="parentName" value={form.parentName} onChange={handleChange} placeholder="Parent Name" className="w-full border p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className="w-full border p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
              <select name="course" value={form.course} onChange={handleChange} required className="w-full border p-3 md:p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30">
                <option value="">Select Class *</option>
                {school.classes.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
              <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full border p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
              <button type="submit" disabled={loading} className="w-full bg-[#1E1B4B] text-white py-3 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? "Submitting..." : <>Submit Enquiry <FaArrowRight /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admission;
