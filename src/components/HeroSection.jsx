import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- Large Circles Setup ---
    const circles = [
      { x: 0.1 * width, y: 0.1 * height, r: 120, angle: 0, speed: 0.003, shape: 1 },
      { x: 0.9 * width, y: 0.1 * height, r: 150, angle: 0, speed: 0.0025, shape: 2 },
      { x: 0.5 * width, y: 0.85 * height, r: 140, angle: 0, speed: 0.0032, shape: 3 },
    ];

    // --- Small Dots Setup ---
    const numDots = 50;
    const dots = Array.from({ length: numDots }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: 2,
      connections: [],
    }));

    // --- Predefine connections to form triangular and rectangular shapes ---
    dots.forEach((dot, i) => {
      const potential = dots
        .map((d, idx) => ({ idx, dist: Math.hypot(dot.x - d.x, dot.y - d.y) }))
        .filter((d) => d.idx !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3); // nearest 3 dots
      dot.connections = potential.map((p) => p.idx);
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // --- Animate Large Circles ---
      circles.forEach((c) => {
        c.angle += c.speed;

        let offsetX = 0,
          offsetY = 0;
        switch (c.shape) {
          case 1:
            offsetX = Math.cos(c.angle) * 50;
            offsetY = Math.sin(c.angle) * 30;
            break;
          case 2:
            offsetX = Math.sin(c.angle) * 60;
            offsetY = Math.cos(c.angle) * 40;
            break;
          case 3:
            offsetX = Math.cos(c.angle * 1.5) * 55;
            offsetY = Math.sin(c.angle * 1.2) * 35;
            break;
          default:
            break;
        }

        const cx = c.x + offsetX;
        const cy = c.y + offsetY;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, c.r);
        gradient.addColorStop(0, "rgba(59,130,246,0.25)");
        gradient.addColorStop(1, "rgba(10,16,34,0.95)");

        ctx.beginPath();
        ctx.ellipse(cx, cy, c.r * 1.1, c.r, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // --- Animate Small Dots & Connections ---
      dots.forEach((dot, i) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(191,219,254,0.4)"; // lower opacity
        ctx.fill();

        // Draw connections
        dot.connections.forEach((j) => {
          const other = dots[j];
          const opacity = 0.05; // lower opacity
          ctx.strokeStyle = `rgba(147,197,253,${opacity})`;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0a1022] flex flex-col justify-center items-center overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] animate-fadeInUp">
          Clin Technologies
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto animate-fadeInUp delay-200">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span>{" "}
          AI solutions. Give healthcare providers more time for what truly
          matters — patient care. Try it for{" "}
          <span className="text-[#f59e0b] font-semibold">FREE</span> today.
        </p>

        {/* Buttons with Torch Glow */}
        <div className="relative mt-10 flex flex-col md:flex-row justify-center gap-5 animate-fadeInUp delay-400">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[220px] h-[220px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_70%)] rounded-full blur-3xl animate-[torchGlow_3s_ease-in-out_infinite_alternate]" />
          </div>

          <Link
            to="/login"
            className="relative bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-all duration-300 shadow-[0_5px_15px_rgba(37,99,235,0.25)]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="relative bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.45)] transition-all duration-300 shadow-[0_5px_15px_rgba(37,99,235,0.3)]"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes torchGlow {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.85; }
            100% { transform: scale(1); opacity: 0.6; }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
