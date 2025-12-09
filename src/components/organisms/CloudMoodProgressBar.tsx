import AngryCloud from '@/assets/angry-cloud.png';
import HappyCloud from '@/assets/happy-cloud.png';
import ImpassiveCloud from '@/assets/impassive-cloud.png';
import CircularProgressBar from "../molecules/CircularProgressBar";

interface CircularProgressBarProps {
    size: number;
    strokeWidth: number;
    outerStrokeColor: string;
    innerStrokeColor: string;
    optimalValueMin: number;
    optimalValueMax: number;
    decentValueMin: number;
    decentValueMax: number;
    value: number | null;
    max: number;
}

const CloudMoodProgressBar: React.FC<CircularProgressBarProps> = ({
    size,
    strokeWidth,
    outerStrokeColor,
    innerStrokeColor,
    optimalValueMin,
    optimalValueMax,
    decentValueMin,
    decentValueMax,
    value,
    max
}) => {
    const isOptimalValue = value >= optimalValueMin && value <= optimalValueMax;
    const isDecentValue = !isOptimalValue && value >= decentValueMin && value <= decentValueMax;
    const isBadValue = !isOptimalValue && !isDecentValue;

    return (<>
        <div className="relative inline-flex justify-center items-center">
            <CircularProgressBar
                size={size}
                strokeWidth={strokeWidth}
                outerStrokeColor={outerStrokeColor}
                innerStrokeColor={innerStrokeColor}
                value={value}
                max={max}
            />

            <div className={`w-[45%] absolute ${isOptimalValue || value === null ? "opacity-100" : "opacity-0"} transition-opacity duration-750`}>
                <img className="w-full animate-bounce" src={HappyCloud} />
            </div>

            <div className={`w-[45%] absolute ${isDecentValue && value !== null ? "opacity-100" : "opacity-0"} transition-opacity duration-750`}>
                <img className="w-full animate-bounce" src={ImpassiveCloud} />
            </div>

            <div className={`w-[45%] absolute ${isBadValue && value !== null ? "opacity-100" : "opacity-0"} transition-opacity duration-750`}>
                <img className="w-full animate-bounce" src={AngryCloud} />
            </div>

        </div>
    </>);
}


export default CloudMoodProgressBar;