// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Hamburger icon, install: npm install lucide-react

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for background shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Our Solutions", id: "features" },
    { name: "In Action", id: "solutions-in-action" },
    { name: "Technology", id: "technology" },
    { name: "Benefits", id: "benefits" },
    { name: "Case Use", id: "case-use" },
  ];

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0f172a] ${
        scrolled ? "shadow-lg py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="text-white font-bold text-xl cursor-pointer"
          onClick={() => handleScrollTo("hero")}
        >
          Clin
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-gray-300 hover:text-white relative transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] text-white px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-gray-300 hover:text-white text-lg transition-colors duration-300 text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
