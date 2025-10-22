import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Validify",
    description:
      "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Redactify",
    description:
      "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "TranscriptX",
    description:
      "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Chartwright",
    description:
      "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
    color: "from-purple-500 to-indigo-400",
  },
];

const OurSolutions = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-14">
      {solutions.map((solution, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.05,
            y: -8,
            boxShadow: "0px 18px 40px rgba(96,165,250,0.25)",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          className="relative bg-[#1e293b] h-[300px] md:h-[340px] p-8 rounded-2xl border border-[#334155] shadow-lg overflow-hidden cursor-pointer"
        >
          {/* Colored top border */}
          <div
            className={`absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r ${solution.color} rounded-t-2xl`}
          ></div>

          <h3 className="text-2xl font-semibold mt-6 text-white mb-3">
            {solution.title}
          </h3>
          <p className="text-[#cbd5e1] text-base leading-relaxed">
            {solution.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default OurSolutions;
