import { useState, useRef, useEffect } from "react";

export default function InAction() {
  const tools = ["TranscriptX", "Chartwright", "Redactify", "Validify"];
  const [activeTool, setActiveTool] = useState("TranscriptX");
  const [activeExample, setActiveExample] = useState("Example 1");
  const [isExpanded, setIsExpanded] = useState(true);
  const [dividerPosition, setDividerPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 20), 80);
      setDividerPosition(newPosition);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const newPosition = Math.min(Math.max((x / rect.width) * 100, 20), 80);
      setDividerPosition(newPosition);
    };

    const stopDrag = () => (isDragging.current = false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  const data = {
    TranscriptX: {
      "Example 1": {
        title: "Basic Voice Transcription",
        left: "Doctor: The patient is 35 years old with mild chest discomfort and fatigue for two days. No cough or fever.",
        right: "Transcription:\nPatient, 35, reports chest discomfort and fatigue for 2 days.\nNo cough or fever. Possible early signs of stress-induced fatigue.",
      },
      "Example 2": {
        title: "Multi-Speaker Transcription",
        left: "Doctor: How are you feeling today?\nPatient: Much better, the dizziness is gone.\nDoctor: Great, we’ll continue the same medication.",
        right: "Transcribed Conversation:\nDoctor asks about current condition. Patient reports improvement with dizziness resolved. Continue same medication plan.",
      },
      "Example 3": {
        title: "Complex Medical Note Conversion",
        left: "Patient: Anna, 42, complains of blurry vision and headaches for one week. Diagnosed with migraine previously.",
        right: "Transcribed Record:\nAnna, 42 – Blurry vision and headaches for one week.\nPast history: Migraine.\nAssessment: Recurrence of migraine symptoms.",
      },
      "Example 4": {
        title: "Long-Form Consultation Summary",
        left: "Doctor discusses dietary changes, increased hydration, and reduced caffeine for insomnia treatment.",
        right: "Generated Transcript Summary:\nAdvice: Reduce caffeine, improve hydration, follow a balanced diet.\nPurpose: Support better sleep hygiene and reduce insomnia.",
      },
    },

    Chartwright: {
      "Example 1": {
        title: "Create a Patient Chart",
        left: "Notes: Patient experiencing knee pain for 3 weeks. Swelling noted, no trauma history.",
        right: "Generated Chart:\nSymptom: Knee pain (3 weeks)\nFindings: Swelling, no trauma\nPlan: Ice therapy, pain reliever, recheck in 1 week.",
      },
      "Example 2": {
        title: "Follow-up Visit Structuring",
        left: "Follow-up: Patient reports reduced pain, mobility improved, mild stiffness remains.",
        right: "Structured Chart:\nProgress: Pain reduced, mobility improved\nResidual: Mild stiffness\nPlan: Continue exercises, gradual increase in activity.",
      },
      "Example 3": {
        title: "Lab Result Integration",
        left: "Lab Results: Hemoglobin 12.8, WBC normal, Cholesterol slightly elevated.",
        right: "Chart Summary:\nVitals: Normal blood parameters.\nConcern: Mild cholesterol elevation.\nAction: Recommend diet modification.",
      },
      "Example 4": {
        title: "Treatment Progress Comparison",
        left: "Before: Severe knee pain.\nAfter: Pain decreased by 70%, improved walking stability.",
        right: "Progress Chart:\nInitial: Severe pain.\nCurrent: 70% improvement, stable gait.\nOutcome: Positive treatment response.",
      },
    },

    Redactify: {
      "Example 1": {
        title: "Hide Patient Identifiers",
        left: "Patient Name: Emma Watson, Age: 45, Address: 22 Maple Ave.",
        right: "Redacted: Name █████, Age 45, Address ████████████",
      },
      "Example 2": {
        title: "Mask Contact Details",
        left: "Contact Info: Phone: 555-321-8899, Email: emma.watson@mail.com",
        right: "Redacted: Phone ██████████, Email ████████████████",
      },
      "Example 3": {
        title: "Protect Hospital Record Numbers",
        left: "Patient ID: 00572-A, Admission No: AD-991",
        right: "Redacted: Patient ID ███████, Admission No ██████",
      },
      "Example 4": {
        title: "Completely Anonymize a Report",
        left: "Emma Watson, 45, admitted for diabetes control at City Health Clinic.",
        right: "Redacted Report: [Name Hidden], [Age Hidden], admitted for diabetes control at [Facility Hidden].",
      },
    },

    Validify: {
      "Example 1": {
        title: "Detect Drug Interaction",
        left: "Patient on Aspirin 75mg and Ibuprofen 400mg for pain.",
        right: "Validation Result: ⚠️ Conflict detected – both NSAIDs. Recommend discontinuing one.",
      },
      "Example 2": {
        title: "Flag Incorrect Dosage",
        left: "Prescription: Paracetamol 1000mg every 2 hours.",
        right: "Validation: ❌ Unsafe dosage interval. Minimum safe gap is 4 hours.",
      },
      "Example 3": {
        title: "Identify Missing Allergy Info",
        left: "Patient: John, 50, on antibiotics, no allergy data recorded.",
        right: "Validation: ⚠️ Missing allergy info. Recommend verifying before administering medication.",
      },
      "Example 4": {
        title: "Verify Data Consistency",
        left: "Age: 25, Diagnosis: Alzheimer’s Disease.",
        right: "Validation Result: ⚠️ Inconsistent data. Alzheimer’s rarely diagnosed at this age. Review record accuracy.",
      },
    },
  };

  const current = data[activeTool][activeExample];

  return (
    <section className="bg-[#0b1324] text-white min-h-screen py-16 flex justify-center items-center">
      <div className="w-[95%] md:w-[85%] lg:w-[80%] bg-[#121b36] rounded-2xl shadow-2xl p-8 border border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-400 text-center">
          See Our Solutions in Action
        </h2>

        {/* Tool Tabs */}
        <div className="flex justify-center flex-wrap border-b border-gray-700 mb-6">
          {tools.map((tool) => (
            <button
              key={tool}
              onClick={() => {
                setActiveTool(tool);
                setActiveExample("Example 1");
              }}
              className={`px-6 py-3 font-semibold transition-all duration-300 ${
                activeTool === tool
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* Example Tabs */}
        <div className="flex justify-center flex-wrap border-b border-gray-700 mb-6">
          {["Example 1", "Example 2", "Example 3", "Example 4"].map((ex) => (
            <button
              key={ex}
              onClick={() => setActiveExample(ex)}
              className={`px-4 py-2 font-medium transition-all duration-300 ${
                activeExample === ex
                  ? "text-white border-b-2 border-yellow-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Collapse Button */}
        <div
          className="bg-blue-600 cursor-pointer py-3 text-center rounded-md mb-6 text-base font-medium"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Click to collapse comparison" : "Click to expand comparison"}
        </div>

        {/* Comparison Content */}
        {isExpanded && (
          <div className="transition-all duration-500 ease-in-out">
            <h3 className="text-lg md:text-xl font-semibold mb-8 text-center text-blue-300">
              {current.title}
            </h3>

            {/* Comparison Box */}
            <div
              ref={containerRef}
              className="relative w-full h-[520px] bg-[#1a2545] rounded-xl overflow-hidden border border-gray-700"
            >
              {/* Left Side */}
              <div
                className="absolute top-0 left-0 h-full p-6 overflow-auto"
                style={{ width: `${dividerPosition}%` }}
              >
                <h4 className="text-blue-400 font-semibold mb-2">
                  Original Input
                </h4>
                <p className="text-sm md:text-base text-gray-300 whitespace-pre-line leading-relaxed">
                  {current.left}
                </p>
              </div>

              {/* Divider */}
              <div
                className="absolute top-0 h-full w-1 bg-yellow-400 cursor-col-resize"
                style={{ left: `${dividerPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={() => (isDragging.current = true)}
                onTouchStart={() => (isDragging.current = true)}
              ></div>

              {/* Right Side */}
              <div
                className="absolute top-0 right-0 h-full p-6 overflow-auto bg-[#0f1a38]"
                style={{ width: `${100 - dividerPosition}%` }}
              >
                <h4 className="text-yellow-400 font-semibold mb-2">
                  AI Output
                </h4>
                <p className="text-sm md:text-base text-gray-300 whitespace-pre-line leading-relaxed">
                  {current.right}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
