import { FaWhatsapp } from "react-icons/fa";
import school from "../config/school";

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${school.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;
