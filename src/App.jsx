import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import OurSolutions from "./components/OurSolutions"; 
import InAction from "./components/InAction";
import Technology from "./components/Technology";
import Benefits from "./components/Benefits";
import CaseUse from "./components/CaseUse";
import GetStarted from "./components/GetStarted"; // ✅ Added import

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-[Inter] bg-[#0f172a] text-[#f8fafc] overflow-x-hidden">
      {/* ✅ Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg"
            : "bg-[#0f172a]/80"
        }`}
      >
        <div
          className="text-2xl font-bold cursor-pointer text-white"
          onClick={() => scrollToSection("hero")}
        >
          Clin Technologies
        </div>

        <div className="flex gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Our Solutions", id: "features" },
            { label: "In Action", id: "solutions-in-action" },
            { label: "Technology", id: "technology" },
            { label: "Benefits", id: "benefits" },
            { label: "Case Use", id: "case-use" },
          ].map((link) => (
            <button
              key={link.id}
              className="text-[#94a3b8] hover:text-white relative transition-colors after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#60a5fa] after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-24 px-10 min-h-[400px]">
        <h2 className="text-3xl font-bold text-center text-[#60a5fa] mb-8">
          About Clin Technologies
        </h2>
        <div className="max-w-[1000px] mx-auto leading-relaxed space-y-4 text-[#cbd5e1]">
          <p>
            Headquartered in the Midwest, Clin Technologies is a{" "}
            <strong>specialized AI firm</strong> that empowers healthcare
            providers across the Midwest and beyond to conquer their most
            pressing operational challenges. We deliver this through a powerful
            and flexible AI platform that powers both a{" "}
            <strong>suite of ready-to-deploy solutions</strong> for
            documentation and compliance, and the creation of{" "}
            <strong>fully bespoke engines</strong> for enterprise-level
            transformation.
          </p>
          <p>
            Our expertise lies in applying cutting-edge{" "}
            <strong>Large Language Models (LLMs)</strong> and{" "}
            <strong>Machine Learning (ML)</strong> to solve real-world
            challenges in healthcare documentation. We partner closely with
            healthcare organizations, leveraging{" "}
            <strong>real-world data</strong> to build robust and effective AI
            systems.
          </p>
          <p>
            Whether you need a <strong>ready-to-use product</strong> or a{" "}
            <strong>custom AI engine</strong> for challenges like Utilization
            Management, Clin transforms your data into a strategic asset that
            eliminates administrative friction and enhances patient care.
          </p>
        </div>
      </section>

      {/* ✅ Our Solutions Section */}
      <section id="features" className="py-24 px-10 min-h-[400px] bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center text-[#60a5fa] mb-12">
          Our Solutions
        </h2>
        <OurSolutions /> {/* ✅ Renders your animated cards */}
      </section>

      {/* ✅ In Action Section */}
      <section id="solutions-in-action" className="py-24 px-10 min-h-[400px]">  
        <InAction />  {/* ✅ Render the component here */}
      </section>

      {/* ✅ Technology Section */}
      <section id="technology" className="py-24 px-10 min-h-[400px] bg-[#0f172a]">
        <Technology />
      </section>

      {/* ✅ Benefits Section */}
      <section id="benefits" className="py-24 px-10 min-h-[400px]">
        <Benefits />
      </section>

      {/* ✅ Case Use Section */}
      <section id="case-use" className="py-24 px-10 min-h-[400px] bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center text-[#60a5fa] mb-8">
          Case Use
        </h2>
        <CaseUse />
      </section>

      <section id="case-use" className="py-24 px-10 min-h-[400px] bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center text-[#60a5fa] mb-8">
          Get Started
        </h2>
        <GetStarted />
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default App;
