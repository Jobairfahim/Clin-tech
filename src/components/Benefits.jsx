// src/components/Benefits.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 px-10 min-h-[400px] bg-[#0f172a]">
      <h2 className="text-3xl font-bold text-center text-[#60a5fa] mb-12">
        Benefits
      </h2>

      <div className="max-w-3xl mx-auto text-[#cbd5e1] space-y-4 leading-relaxed">
        <p>
          Healthcare providers using <strong>Clin Technologies</strong> solutions report:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Reduction in documentation time by 40-60%</li>
          <li>Improved work-life balance with less after-hours charting</li>
          <li>Enhanced patient interaction due to less focus on note-taking</li>
          <li>More comprehensive and consistent clinical documentation</li>
          <li>Reduced risk of documentation errors and omissions</li>
        </ul>

        {/* Buttons using React Router */}
        <div className="flex justify-center gap-6 mt-8">
          <Link
            to="/login"
            className="px-6 py-3 border border-[#60a5fa] hover:bg-[#60a5fa] hover:text-white text-[#60a5fa] font-semibold rounded-lg transition-all duration-300"    
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-[#60a5fa] hover:bg-[#3b82f6] text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
