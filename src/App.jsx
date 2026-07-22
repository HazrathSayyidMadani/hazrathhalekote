import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero, { Loader } from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Admission from "./components/Admission";
import Alumni from "./components/Alumni";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PrincipalMessage from "./components/PrincipalMessage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PrincipalMessage />
      <WhyChooseUs />
      <Facilities />
      <Stats />
      <Gallery />
      <Admission />
      <Alumni />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;