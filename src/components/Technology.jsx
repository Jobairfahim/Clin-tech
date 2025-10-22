import React from "react";
import { ShieldCheck, Brain, Settings } from "lucide-react"; // for icons

const Technology = () => {
  return (
    <section className="bg-[#0a1425] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          Technology
        </h2>
        <p className="text-gray-400 mt-2">
          Discover the advanced systems that power our AI-driven platform.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#0e1b33] rounded-2xl p-8 shadow-lg hover:shadow-blue-800/50 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="bg-[#1b2a4a] p-4 rounded-full">
              <Brain className="text-pink-400 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
            Sophisticated Natural Language Processing
          </h3>
          <div className="border-t border-gray-700 my-4 w-16 mx-auto"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            At the core of our platform is an advanced foundation model. It
            enables our system to grasp clinical nuances — understanding context,
            recognizing intent, and accurately interpreting medical terminology
            to generate clear and concise medical notes automatically.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0e1b33] rounded-2xl p-8 shadow-lg hover:shadow-blue-800/50 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="bg-[#1b2a4a] p-4 rounded-full">
              <Settings className="text-blue-400 w-8 h-8" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
            Learning Mode & Personalization
          </h3>
          <div className="border-t border-gray-700 my-4 w-16 mx-auto"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Our AI refines its understanding based on user feedback and
            real-world workflows. Over time, it adapts to your specific
            documentation style, ensuring precision and personalization for
            every user.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0e1b33] rounded-2xl p-8 shadow-lg hover:shadow-blue-800/50 transition duration-300">
          <div className="flex flex-col items-center gap-3 mb-4">
            <span className="bg-[#004d43] text-[#00ffcc] text-xs font-semibold px-4 py-1 rounded-full">
              HIPAA COMPLIANT
            </span>
            <span className="bg-[#1b2a4a] text-[#b89bff] text-xs font-semibold px-4 py-1 rounded-full">
              BUSINESS ASSOCIATE AGREEMENT
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 text-center">
            Robust Data Privacy & Security
          </h3>
          <div className="border-t border-gray-700 my-4 w-16 mx-auto"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Protecting sensitive health information is our top priority. We
            implement advanced encryption, strict access controls, and follow
            zero-trust security principles to ensure your data remains private
            and protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;

