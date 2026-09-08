import { useMemo } from "react";

export const FloatingDots = () => {
  // Deterministic star coordinates for high visibility and sharp look
  const stars = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: `${(i * 17 + (i % 7) * 11) % 99}%`,
      top: `${(i * 29 + (i % 5) * 19) % 99}%`,
      size: i % 11 === 0 ? 3 : i % 4 === 0 ? 2.2 : 1.5,
      opacity: i % 3 === 0 ? 0.85 : i % 2 === 0 ? 0.65 : 0.45,
      duration: `${2.5 + (i % 5) * 1.2}s`,
      delay: `${(i % 7) * 0.6}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Soft Indigo / Violet ambient glow circle matching reference image */}
      <div className="absolute top-12 right-4 md:right-24 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full bg-gradient-to-br from-indigo-700/25 via-purple-700/15 to-transparent blur-[90px] pointer-events-none" />
      <div className="absolute top-[45%] -left-32 w-[360px] h-[360px] rounded-full bg-blue-900/15 blur-[100px] pointer-events-none" />

      {/* Visible stars with crisp twinkle */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? "0 0 5px rgba(255, 255, 255, 0.9)" : "0 0 2px rgba(255, 255, 255, 0.6)",
            animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.25; transform: scale(0.85); }
          100% { opacity: 0.95; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};
