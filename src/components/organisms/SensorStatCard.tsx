import type React from "react";
import CircularProgressBar from "../molecules/CircularProgressBar";


interface SensorStatCardProps {
    title: string;
    value: number;
    max: number;
    unit: string;
    description: string;
}

const SensorStatCard : React.FC<SensorStatCardProps> = ({ title, value, max, unit, description }) => {
    return (<>
        <div className="w-full max-w-xl bg-slate-900/30 px-5 py-7 rounded-3xl">
            <div className="flex justify-between items-center">
                <div className="font-[Dynapuff] flex flex-col gap-y-3">
                    <h2 className="text-white text-3xl font-extrabold">{ title }</h2>
                    <div className="font-[Knewave] text-white flex items-end gap-x-2 ">
                        <span className="text-6xl text-zinc-200 font-extrabold">{ value }</span>
                        <span className="text-5xl font-semibold">{ unit }</span>
                    </div>
                    <span className="text-gray-300 text-lg font-light">{ description}</span>
                </div>

                <div>
                    <CircularProgressBar
                        size={190}
                        strokeWidth={32}
                        outerStrokeColor="white"
                        innerStrokeColor="#ebcad5"
                        value={value}
                        max={max}
                    /> 
                </div>
            </div>   
        </div>
    </>);
}

export default SensorStatCard;