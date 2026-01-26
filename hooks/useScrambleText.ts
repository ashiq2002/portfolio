"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;':,./<>?";

export const useScrambleText = (targetText: string, duration = 2000) => {
    const [displayText, setDisplayText] = useState(targetText);

    useEffect(() => {
        let startTime: number;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / duration, 1);

            // Calculate how many characters should be revealed based on progress
            const revealLength = Math.floor(targetText.length * progressRatio);

            const scrambled = targetText
                .split("")
                .map((char, index) => {
                    if (index < revealLength) {
                        return targetText[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(scrambled);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setDisplayText(targetText);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [targetText, duration]);

    return displayText;
};
