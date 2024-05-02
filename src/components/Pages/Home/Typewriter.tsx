import { useState, useEffect } from 'react';

const Typewriter = ({ phrases, sleepTime }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let currentLetterIndex = 0;
    let timeoutId;

    const typeLetter = () => {
      if (currentLetterIndex < phrases[phraseIndex].length) {
        setCurrentWord(() => phrases[phraseIndex].substring(0, currentLetterIndex + 1));
        currentLetterIndex++;
        timeoutId = setTimeout(typeLetter, sleepTime);
      } else {
        timeoutId = setTimeout(eraseLetter, sleepTime * 10);
      }
    };

    const eraseLetter = () => {
      if (currentLetterIndex > 0) {
        setCurrentWord(() => phrases[phraseIndex].substring(0, currentLetterIndex - 1));
        currentLetterIndex--;
        timeoutId = setTimeout(eraseLetter, sleepTime);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        timeoutId = setTimeout(typeLetter, sleepTime * 5);
      }
    };

    typeLetter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [phrases, phraseIndex, sleepTime]);

  return <span>{currentWord}</span>;
};

export default Typewriter;