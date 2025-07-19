'use client';
import React, { useState, useEffect } from 'react';

// Define the TypingAnimation functional component
const TypingAnimation = () => {
  // Array of texts to display in the animation
  const texts = ["Hello there", "It's me, Dandy", "I am a Lead Software Engineer"];

  // State to hold the currently displayed text
  const [currentText, setCurrentText] = useState('');
  // State to track the index of the text being typed/backspaced from the 'texts' array
  const [textIndex, setTextIndex] = useState(0);
  // State to track the current character index within the current text
  const [charIndex, setCharIndex] = useState(0);
  // State to determine if the animation is currently deleting (backspacing) or typing
  const [isDeleting, setIsDeleting] = useState(false);

  // Configuration for animation speeds and delays
  const typingSpeed = 150; // Time in milliseconds between each character typed
  const backspaceSpeed = 100; // Time in milliseconds between each character backspaced
  const delayAfterTyping = 2000; // Pause in milliseconds after a word is fully typed
  const delayAfterBackspace = 500; // Pause in milliseconds after a word is fully backspaced

  // useEffect hook to manage the animation logic
  useEffect(() => {
    let timer;
    // Get the current word to be processed based on textIndex
    const currentWord = texts[textIndex % texts.length];

    // Logic for backspacing (deleting characters)
    if (isDeleting) {
      // If there are characters to delete
      if (charIndex > 0) {
        timer = setTimeout(() => {
          // Remove the last character from currentText
          setCurrentText(currentWord.substring(0, charIndex - 1));
          // Decrement charIndex
          setCharIndex(prevCharIndex => prevCharIndex - 1);
        }, backspaceSpeed);
      } else {
        // If all characters are deleted, switch to typing mode for the next word
        setIsDeleting(false);
        setTextIndex(prevTextIndex => prevTextIndex + 1);
        // Add a delay before starting to type the next word
        timer = setTimeout(() => {}, delayAfterBackspace);
      }
    } else { // Logic for typing (adding characters)
      // If there are more characters to type in the current word
      if (charIndex < currentWord.length) {
        timer = setTimeout(() => {
          // Add the next character to currentText
          setCurrentText(currentWord.substring(0, charIndex + 1));
          // Increment charIndex
          setCharIndex(prevCharIndex => prevCharIndex + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
            setIsDeleting(true);
        }, delayAfterTyping);
      }
    }

    // Cleanup function to clear the timeout when the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, charIndex, textIndex, texts]); // Dependencies for useEffect

  return (
    <div className="h-32 flex items-center justify-center typing-container text-xl md:text-2xl lg:text-4xl font-bold">
      <h1 className="text-white typing-text relative inline-block overflow-hidden whitespace-nowrap border-r-[.15em] border-orange-500 pr-1 tracking-wider animate-blinking-cursor">
        {currentText}
      </h1>

      {/* Custom CSS for the blinking cursor effect */}
      <style jsx>{`
        .typing-text {
          animation: blinking-cursor .75s step-end infinite;
        }
        @keyframes blinking-cursor {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }
      `}</style>
    </div>
  );
};

export default TypingAnimation;
