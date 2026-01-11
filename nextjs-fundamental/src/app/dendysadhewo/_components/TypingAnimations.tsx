"use client";
import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  phrases: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ phrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDelay = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentPhrase.length) {
          setIsDeleting(true);
        }
      }
    };

    let timer: NodeJS.Timeout;
    if (isDeleting) {
      timer = setTimeout(handleTyping, deletingSpeed);
    } else {
      if (charIndex === phrases[phraseIndex].length) {
        timer = setTimeout(() => setIsDeleting(true), pauseDelay);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span style={{ fontFamily: 'monospace', backgroundColor: 'rgba(0,0,0,0.7)', padding: '0.5rem 1rem', borderRadius: '0.5rem', display: 'inline-block' }}>
      {displayedText}
      <span className="animate-blink-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
