import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { submitContact } from "../utils/api";
import school from "../config/school";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const result = await submitContact({ school: school.id, ...form });
      setStatus({ type: "success", message: result.message });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1B4B]">Contact Us</h2>
          <p className="text-gray-600 mt-4">We&apos;d love to hear from you.</p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl">
            {status.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {status.message}
              </div>
            )}
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" required className="w-full border p-3 md:p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full border p-3 md:p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" required className="w-full border p-3 md:p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30" />
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Message *" required className="w-full border p-3 md:p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E1B4B]/30 resize-none" />
            <button type="submit" disabled={loading} className="w-full bg-[#1E1B4B] text-white py-3 md:py-4 rounded-xl font-semibold disabled:opacity-60">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E1B4B] mb-2">School Information</h3>
            {[
              { icon: FaMapMarkerAlt, title: "Address", value: school.contact.address },
              { icon: FaPhone, title: "Phone", value: school.contact.phone, href: `tel:${school.contact.phone.replace(/\s/g, "")}` },
              { icon: FaEnvelope, title: "Email", value: school.contact.email, href: `mailto:${school.contact.email}` },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-[#1E1B4B] text-white rounded-full flex items-center justify-center shrink-0">
                  <Icon />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E1B4B]">{title}</h4>
                  {href ? (
                    <a href={href} className="text-gray-600 hover:text-[#1E1B4B]">{value}</a>
                  ) : (
                    <p className="text-gray-600">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="School Location"
            src={school.mapEmbed}
            width="100%"
            height="350"
            className="md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
