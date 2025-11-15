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
    value = value > max ? max : value && value < 0 ? 0 : value;

    const circumRadius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * circumRadius;
    const step = (circumference * 0.70 / max);

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
                "
            />

            <circle
                cx={size / 2}
                cy={size / 2}
                r={circumRadius}
                stroke={innerStrokeColor}
                strokeWidth={strokeWidth * 0.50}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - value * step}
                strokeLinecap="round"
                fill="transparent"
                className="
                    rotate-145 
                    origin-center 
                    transition-all 
                    duration-900"
            />
        </svg>
    </>);
};

export default CircularProgressBar;
