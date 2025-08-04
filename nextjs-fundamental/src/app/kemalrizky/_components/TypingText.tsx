'use client';

import { useEffect, useState } from 'react';

// const phrases = ['Ahlan wa sahlan.', 'Welcome to my website.', 'Let us learn Next.js together!'];

interface TypingTextProps {
  phrases: string[];
}

export default function TypingText({phrases}: TypingTextProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDelaying, setIsDelaying] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor only during delay
  useEffect(() => {
    let blink: NodeJS.Timeout | null = null;

    if (isDelaying) {
      blink = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    } else {
      setShowCursor(true); // solid cursor during typing/deleting
    }

    return () => {
      if (blink) clearInterval(blink);
    };
  }, [isDelaying]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    // Stop everything while delaying
    if (isDelaying) return;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (text.length > 0) {
          setText(prev => prev.slice(0, -1));
        } else {
          // Finished deleting → go to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        const nextText = currentPhrase.slice(0, text.length + 1);
        setText(nextText);

        // If full phrase is typed → start delay before deleting
        if (nextText === currentPhrase) {
          setIsDelaying(true);
          setTimeout(() => {
            setIsDelaying(false);
            setIsDeleting(true);
          }, 3000); // 3 second delay
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, isDelaying]);

  return (
    <h1 style={{ fontSize: '2rem', fontWeight: '600', color: '#141414' }}>
      {text}
      <span
        style={{
          color: '#141414',
          marginLeft: '2px',
          visibility: showCursor ? 'visible' : 'hidden',
        }}
      >
        |
      </span>
    </h1>
  );
}