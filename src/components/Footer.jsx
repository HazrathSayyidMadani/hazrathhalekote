import school from "../config/school";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">{school.fullName}</h3>
          <p className="text-gray-400 text-sm md:text-base">{school.motto}</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            {school.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm md:text-base mb-1">{school.contact.address}</p>
          <p className="text-gray-400 text-sm md:text-base mb-1">{school.contact.phone}</p>
          <p className="text-gray-400 text-sm md:text-base">{school.contact.email}</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs md:text-sm px-4">
        © {new Date().getFullYear()} {school.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
