"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const ASCII_MAP: Record<string, string[]> = {
    M: ["#   #", "## ##", "# # #", "#   #", "#   #"],
    D: ["#### ", "#   #", "#   #", "#   #", "#### "],
    ".": ["     ", "     ", "     ", "     ", " #   "],
    " ": ["     ", "     ", "     ", "     ", "     "],
    A: [" ### ", "#   #", "#####", "#   #", "#   #"],
    S: [" ####", "#    ", " ### ", "    #", "#### "],
    H: ["#   #", "#   #", "#####", "#   #", "#   #"],
    I: ["#####", "  #  ", "  #  ", "  #  ", "#####"],
    Q: [" ### ", "#   #", "# # #", "#  ##", " ####"],
    O: [" ### ", "#   #", "#   #", "#   #", " ### "],
    N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
};

const NAME = "MD. ASHIQ HOSSAIN";

const BinaryCharacter = ({ isNamePart, rowIndex }: { isNamePart: boolean; rowIndex: number }) => {
    const [char, setChar] = useState("0");

    useEffect(() => {
        const interval = setInterval(() => {
            setChar(Math.random() > 0.5 ? "1" : "0");
        }, 100 + Math.random() * 200);
        return () => clearInterval(interval);
    }, []);

    const opacity = isNamePart ? 1 : 0.05;

    return (
        <motion.span
            animate={isNamePart ? {
                color: ["#000000", "#333333", "#000000"],
                opacity: [0.8, 1, 0.8],
            } : {
                opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: (rowIndex * 0.1) + Math.random(),
            }}
            className={`inline-block font-bold transition-all duration-300 ${isNamePart ? "text-black scale-110" : "text-black/20"
                } text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px]`}
        >
            {char}
        </motion.span>
    );
};

export default function BinaryRainAsciiName() {
    const grid = useMemo(() => {
        const rows = [0, 1, 2, 3, 4];
        return rows.map((rowIndex) => {
            return NAME.split("").map((char) => {
                const asciiChar = ASCII_MAP[char.toUpperCase()] || ASCII_MAP[" "];
                return asciiChar[rowIndex];
            }).join(" ");
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center leading-none select-none py-2">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-[1px]">
                    {row.split("").map((char, charIndex) => (
                        <BinaryCharacter
                            key={`${rowIndex}-${charIndex}`}
                            isNamePart={char === "#"}
                            rowIndex={rowIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
