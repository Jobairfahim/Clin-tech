import React from "react";

const Footer = () => {
  return (
   <footer className="bg-[#1e293b] py-8 px-10 border-t border-[rgba(96,165,250,0.2)]">
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Left side - Links */}
    <div className="flex gap-6 flex-wrap mb-4 md:mb-0">
      <a
        className="text-[#94a3b8] no-underline text-[0.833rem] font-medium tracking-normal transition-colors duration-300 hover:text-white"
        href="/login"
      >
        Terms of Use
      </a>
      <a
        className="text-[#94a3b8] no-underline text-[0.833rem] font-medium tracking-normal transition-colors duration-300 hover:text-white"
        href="/login"
      >
        Privacy Policy
      </a>
    </div>

    {/* Right side - Copyright */}
    <div className="text-sm text-center">
      &copy; {new Date().getFullYear()} Clin Technologies. All rights reserved.
    </div>
  </div>
</footer>


  );
};

export default Footer;
