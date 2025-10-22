import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section
      id="get-started"
      className="bg-[#0f172a] text-[#f8fafc] py-20 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#60a5fa] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Clinical Documentation Process?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#cbd5e1] leading-relaxed mb-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact our team to learn how Clin Technologies can be tailored to your
          specific healthcare setting.
        </motion.p>

        {/* Email */}
        <motion.p
          className="text-[#94a3b8] text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Or reach us directly via email at{" "}
          <a
            href="mailto:support@clintechso.com"
            className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
          >
            support@clintechso.com
          </a>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/login"
            className="px-8 py-3 bg-transparent border-2 border-[#60a5fa] text-[#60a5fa] font-semibold rounded-lg hover:bg-[#60a5fa] hover:text-[#0f172a] transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 bg-[#60a5fa] text-[#0f172a] font-semibold rounded-lg shadow-md hover:bg-[#93c5fd] transition-all duration-300"
          >
            Signup
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
