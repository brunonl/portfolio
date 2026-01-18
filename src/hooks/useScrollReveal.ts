import { useEffect, useRef, RefObject } from 'react';
import { ANIMATION } from '@/constants';

// ============================================
// useScrollReveal Hook - Bruno Meireles Portfolio
// ============================================

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook for scroll reveal animations using IntersectionObserver
 * @param options - Configuration options for the observer
 * @returns ref to attach to the element and visibility state
 */
export function useScrollReveal<T extends HTMLElement>(
    options: UseScrollRevealOptions = {}
): {
    ref: RefObject<T | null>;
    isVisible: boolean;
} {
    const ref = useRef<T | null>(null);
    const isVisibleRef = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const {
            threshold = ANIMATION.scrollRevealThreshold,
            rootMargin = '0px',
            triggerOnce = true,
        } = options;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisibleRef.current = true;
                        entry.target.classList.add('is-visible');

                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        isVisibleRef.current = false;
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [options]);

    return { ref, isVisible: isVisibleRef.current };
}
