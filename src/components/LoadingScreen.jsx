import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "</> Jahnavi.dev";

  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, charIndex));
      charIndex++;
      if (charIndex > fullText.length) {
        clearInterval(typeInterval);
      }
    }, 40);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 250);
          return 100;
        }
        return prev + 6;
      });
    }, 35);

    return () => {
      clearInterval(typeInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#080B14] flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center px-6">
        <div className="mb-4 text-3xl sm:text-4xl font-mono font-bold text-white tracking-wider flex items-center">
          <span className="text-[#818CF8]">&lt;/&gt;</span>
          <span className="mx-2 text-white">
            {text.slice(3) || ""}
          </span>
          <span className="animate-blink text-[#818CF8]">_</span>
        </div>

        <div className="text-xs font-mono text-[#64748B] mb-4">
          INITIALIZING • {progress}%
        </div>

        <div className="w-56 h-1 bg-[#1E293D] rounded-[2px] overflow-hidden">
          <div
            className="h-full bg-[#6366F1] rounded-[2px] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
