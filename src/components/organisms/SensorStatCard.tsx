import type React from "react";
import CloudMoodProgressBar from "./CloudMoodProgressBar";


interface SensorStatCardProps {
    title: string;
    description: string;
    max: number;
    value: number;
    optimalValueMin: number;
    optimalValueMax: number;
    unit: string;

}

const SensorStatCard : React.FC<SensorStatCardProps> = ({ 
    title, 
    description,
    max,
    value, 
    unit, 
    optimalValueMin, 
    optimalValueMax, 
    
     }) => {
    return (<>

        <div className="w-full bg-zinc-950/20 p-4 sm:p-6 lg:p-8 rounded-3xl">
            <div className="font-[Dynapuff] flex justify-between items-start gap-x-4">
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-extrabold">
                        { title }
                    </h2>
                    <div className="font-[Knewave] text-white flex items-end gap-x-2 ">
                        <span className="text-4xl sm:text-6xl text-zinc-200 font-extrabold">
                            { value }
                        </span>
                        <span className="text-2xl sm:text-4xl font-semibold opacity-80">
                            { unit }
                        </span>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-xl lg:text-base font-light">{ description}</span>
                </div>

                <div className="sm:hidden">
                    <CloudMoodProgressBar
                        size={100}
                        strokeWidth={12}
                        outerStrokeColor="#f0e8f0"
                        innerStrokeColor="#ffadcd"
                        optimalValueMin={optimalValueMin}
                        optimalValueMax={optimalValueMax}
                        value={value}
                        max={max}
                    /> 
                </div>
                <div className="hidden sm:inline">
                    <CloudMoodProgressBar
                        size={160}
                        strokeWidth={16}
                        outerStrokeColor="#f0e8f0"
                        innerStrokeColor="#ffadcd"
                        optimalValueMin={optimalValueMin}
                        optimalValueMax={optimalValueMax}
                        value={value}
                        max={max}
                    /> 
                </div>
            </div>   
        </div>
    </>);
}

export default SensorStatCard;