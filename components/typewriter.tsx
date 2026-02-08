'use client';

import { useEffect, useState, useCallback } from 'react';

type Phase = 'typing' | 'paused' | 'deleting' | 'waiting';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  waitDuration?: number;
  className?: string;
}

export default function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  waitDuration = 500,
  className,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  const currentPhrase = phrases[phraseIndex];

  const advancePhrase = useCallback(() => {
    setPhraseIndex((prev) => (prev + 1) % phrases.length);
  }, [phrases.length]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case 'typing': {
        if (displayText.length < currentPhrase.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setPhase('paused'), pauseDuration);
        }
        break;
      }
      case 'paused': {
        setPhase('deleting');
        break;
      }
      case 'deleting': {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, deletingSpeed);
        } else {
          timeout = setTimeout(() => setPhase('waiting'), waitDuration);
        }
        break;
      }
      case 'waiting': {
        advancePhrase();
        setPhase('typing');
        break;
      }
    }

    return () => clearTimeout(timeout);
  }, [
    phase,
    displayText,
    currentPhrase,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    waitDuration,
    advancePhrase,
  ]);

  return (
    <p className={className} aria-label={currentPhrase}>
      {displayText}
      <span className="animate-blink ml-0.5 inline-block w-[2px] translate-y-[1px] self-stretch bg-current">
        &nbsp;
      </span>
    </p>
  );
}
