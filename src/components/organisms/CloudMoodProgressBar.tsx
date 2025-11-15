import AngryCloud from '@/assets/angry-cloud.png';
import HappyCloud from '@/assets/happy-cloud.png';
import CircularProgressBar from "../molecules/CircularProgressBar";

interface CircularProgressBarProps {
    size: number;
    strokeWidth: number;
    outerStrokeColor: string;
    innerStrokeColor: string;
    optimalValueMin: number;
    optimalValueMax: number;
    value: number;
    max: number;
}

const CloudMoodProgressBar: React.FC<CircularProgressBarProps> = ({
    size,
    strokeWidth,
    outerStrokeColor,
    innerStrokeColor,
    optimalValueMin,
    optimalValueMax,
    value,
    max
}) => {
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
            {(value >= optimalValueMin && value <= optimalValueMax) ?
                <div className="w-[45%] absolute">
                    <img className="w-full animate-bounce" src={HappyCloud} />
                </div> :

                <div className="w-[45%] absolute">
                    <img className="w-full animate-pulse" src={AngryCloud} />
                </div>
            }

        </div>
    </>);
}


export default CloudMoodProgressBar;