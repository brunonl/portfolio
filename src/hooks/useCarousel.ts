import { useState, useEffect, useCallback } from 'react';

// Use TouchEvent from React specifically if this hook is used in React components
import type { TouchEvent } from 'react';

interface UseCarouselProps {
    totalImages: number;
    autoplayInterval?: number;
    enabled?: boolean;
}

interface UseCarouselReturn {
    currentIndex: number;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    handlers: {
        onTouchStart: (e: TouchEvent) => void;
        onTouchMove: (e: TouchEvent) => void;
        onTouchEnd: () => void;
    };
}

export function useCarousel({
    totalImages,
    autoplayInterval = 3000,
    enabled = true
}: UseCarouselProps): UseCarouselReturn {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        if (totalImages <= 1) return;
        setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    }, [totalImages]);

    const prevSlide = useCallback(() => {
        if (totalImages <= 1) return;
        setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    }, [totalImages]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Autoplay logic
    useEffect(() => {
        if (!enabled || totalImages <= 1) return;

        const interval = setInterval(nextSlide, autoplayInterval);
        return () => clearInterval(interval);
    }, [enabled, totalImages, autoplayInterval, nextSlide]);

    // Touch handlers
    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    // Reset index if totalImages changes (e.g., modal closed/opened with diff project)
    useEffect(() => {
        setCurrentIndex(0);
    }, [totalImages]);

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide,
        handlers: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    };
}
