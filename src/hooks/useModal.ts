import { useState, useCallback, useEffect } from 'react';

interface UseModalReturn<T> {
    isOpen: boolean;
    data: T | null;
    openModal: (data: T) => void;
    closeModal: () => void;
}

export function useModal<T>(): UseModalReturn<T> {
    const [data, setData] = useState<T | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback((modalData: T) => {
        setData(modalData);
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Lock scroll
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        // Delay clearing data slightly for fade-out animation if needed, 
        // but for now immediate close logic:
        setTimeout(() => {
            setData(null);
            document.body.style.overflow = ''; // Unlock scroll
        }, 300); // Wait for transition
    }, []);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeModal]);

    return {
        isOpen,
        data,
        openModal,
        closeModal
    };
}
