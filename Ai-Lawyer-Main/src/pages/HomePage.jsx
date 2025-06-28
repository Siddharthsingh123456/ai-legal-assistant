import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Advantage from "../component/Advantage";
import Testimonials from "../component/Testimonials";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
// import FooterTwo from "../component/FooterTwo";


const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 ">
      <Navbar />
      <Hero isVisible={isVisible} />
      {/* <HeroFour/> */}
      <About isVisible={isVisible} />
      <Advantage isVisible={isVisible} />

      <Testimonials isVisible={isVisible} />
      {/* <TestimonialsV3 isVisible={isVisible} /> */}

      <FAQ isVisible={isVisible} />
      <Footer />
      {/* <FooterTwo/> */}
    </div>
  );
};

export default HomePage;

