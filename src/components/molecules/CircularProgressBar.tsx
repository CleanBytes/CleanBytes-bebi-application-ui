import type React from "react";
import { useEffect, useState } from "react";

interface CircularProgressBarProps {
    size: number;
    strokeWidth: number;
    outerStrokeColor: string;
    innerStrokeColor: string;
    value: number;
    max: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
    size,
    strokeWidth,
    outerStrokeColor,
    innerStrokeColor,
    value,
    max,
}) => {
    const circumRadius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * circumRadius;
    const clampedValue = Math.min(Math.max(value, 0), max);

    const [filledLength, setFilledLength] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilledLength(((circumference * 0.70) / max) * clampedValue);
        }, 200)
        return () => clearTimeout(timeout);
    }, [circumference, max, clampedValue]);

    return (<>
        <svg width={size} height={size}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={circumRadius}
                stroke={outerStrokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference * 0.70}
                strokeLinecap="round"
                fill="transparent"
                className="
                    rotate-145 
                    origin-center
                    animate-none   
                "
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={circumRadius}
                stroke={innerStrokeColor}
                strokeWidth={strokeWidth * 0.50}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - filledLength}
                strokeLinecap="round"
                fill="transparent"
                className="
                    rotate-145 
                    origin-center 
                    transition-[stroke-dashoffset] 
                    duration-2000"
            />
        </svg>
    </>);
};

export default CircularProgressBar;
