import { motion } from "framer-motion";



function Gallery() {
  const images = [
    // "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    // "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    // "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    // "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    // "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    // "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  ];

  return (
 <motion.section
    id="gallery"
    className="py-24 bg-white"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >         <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#556B2F] font-semibold uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mt-4">
            School Life & Campus
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Explore moments from academics, events, celebrations,
            sports, and campus activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Gallery;