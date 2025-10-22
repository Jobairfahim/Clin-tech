import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Primary Care",
    description:
      'Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.',
    quote:
      '"This AI tool streamlines a tedious process, reduces ‘click fatigue,’ and helps me reclaim some sanity."',
    author: "— Dr. SJ, MD",
  },
  {
    title: "Emergency Medicine",
    description:
      "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
    quote: "— Emergency Department (ED) Nurse Manager",
  },
  {
    title: "Behavioral Health",
    description:
      '"Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; we\'ve slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we\'ve seen a significant reduction in documentation errors and compliance flags. It\'s not just faster; it\'s smarter documentation."',
    quote: "— Clinical Director, Behavioral Health Practice",
  },
  {
    title: "Case Management",
    description:
      '"Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I\'m getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing."',
    quote: "— Social Worker/Case Manager",
  },
];

const CaseUse = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
      {cases.map((item, index) => (
        <motion.div
          key={index}
          className="bg-[#1e293b] border-t-4 border-[#60a5fa] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: { type: "spring", stiffness: 200, damping: 12 },
          }}
        >
          <h3 className="text-2xl font-bold text-[#60a5fa] mb-3">
            {item.title}
          </h3>
          <p className="text-[#cbd5e1] leading-relaxed mb-4">
            {item.description}
          </p>
          <p className="italic text-[#94a3b8]">"{item.quote}"</p>
          <p className="text-[#e2e8f0] mt-3 font-medium">{item.author}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseUse;
