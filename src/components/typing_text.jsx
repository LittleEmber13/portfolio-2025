import { useState, useEffect } from "react";

export default function TypingText({ text, size = 64, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div
      className="flex items-center gradient-primary-text text-[${size}px]"
      style={{ fontSize: `${size}px` }}
    >
      <span>{displayedText}</span>
      <span className="animate-pulse bg-[var(--color-primary)] ml-2 h-14 w-[6px]">|</span>
    </div>
  );
}
