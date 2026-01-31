'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectOptions {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function useTypingEffect({
    texts,
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000,
}: UseTypingEffectOptions) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isComplete, setIsComplete] = useState(false);

    const currentText = texts[currentIndex];

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (displayedText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, typingSpeed);
            } else {
                setIsComplete(true);
                timeout = setTimeout(() => {
                    setIsTyping(false);
                    setIsComplete(false);
                }, pauseDuration);
            }
        } else {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, deletingSpeed);
            } else {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isTyping, currentText, texts.length, typingSpeed, deletingSpeed, pauseDuration]);

    return { displayedText, isComplete };
}

interface UseTypewriterOptions {
    text: string;
    speed?: number;
    delay?: number;
}

export function useTypewriter({ text, speed = 50, delay = 0 }: UseTypewriterOptions) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!hasStarted) {
            timeout = setTimeout(() => {
                setHasStarted(true);
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (displayedText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);
        } else if (!isComplete) {
            setIsComplete(true);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, text, speed, delay, hasStarted]);

    return { displayedText, isComplete };
}
