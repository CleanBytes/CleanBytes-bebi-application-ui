import type React from "react";

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
    value = value > max ? max : value;

    const circumRadius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * circumRadius;
    const step = circumference / max;

    return (
        <>
            <div className="inline-flex items-center justify-center">
                <svg width={size} height={size}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={circumRadius}
                        stroke={outerStrokeColor}
                        stroke-width={strokeWidth}
                        fill="transparent"
                    />

                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={circumRadius}
                        stroke={innerStrokeColor}
                        stroke-width={strokeWidth * 0.6}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - value * step}
                        strokeLinecap="round"
                        fill="transparent"
                        className="
                            rotate-90 
                            origin-center 
                            transition-all 
                            duration-900"
                    />
                </svg>
            </div>
        </>
    );
};

export default CircularProgressBar;
