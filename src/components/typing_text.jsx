import { useState, useEffect } from "react";

export default function TypingText({ text, color = "orange", size = 64, speed = 100 }) {
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
      className="flex items-center"
      style={{ fontSize: `${size}px`, color }}
    >
      <span>{displayedText}</span>
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
}
