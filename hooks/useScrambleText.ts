"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;':,./<>?";

export const useScrambleText = (targetText: string, duration = 2000, pauseDuration = 3000) => {
    const [displayText, setDisplayText] = useState(targetText);

    useEffect(() => {
        let startTime: number;
        let animationFrameId: number;
        let timeoutId: NodeJS.Timeout;

        const startAnimation = () => {
            startTime = 0;
            animationFrameId = requestAnimationFrame(animate);
        };

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / duration, 1);

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
                timeoutId = setTimeout(startAnimation, pauseDuration);
            }
        };

        startAnimation();

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timeoutId);
        };
    }, [targetText, duration, pauseDuration]);

    return displayText;
};
