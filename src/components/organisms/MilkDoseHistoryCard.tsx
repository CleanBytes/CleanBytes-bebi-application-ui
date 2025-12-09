import React from 'react';
import MilkDoseItem from "../molecules/MilkDoseItem";
import { LucideMessageCircleWarning } from 'lucide-react';
interface MilkDoseHistoryCardProps {
    history: number[]; 
}

const MilkDoseHistoryCard: React.FC<MilkDoseHistoryCardProps> = ({ history = [] }) => {
    
    const totalVolume = history.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="w-full bg-zinc-950/20 p-4 sm:p-6 lg:p-8 rounded-3xl h-full flex flex-col max-h-96">
            <div className="font-[Dynapuff] flex flex-col gap-y-2 h-full">
                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
                    Historique
                </h2>
                
                {history.length > 0 ? (
                    <>
                        <div className="flex flex-col gap-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar flex-grow">
                            {history.map((dose, index) => (
                                <MilkDoseItem
                                    key={index}
                                    quantity={dose}
                                />
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t-2 border-white/10 flex justify-between items-center">
                            <span className="text-white/60 text-lg font-medium">Total consommé</span>
                            <div className="text-white text-2xl font-bold bg-white/10 px-4 py-1 rounded-xl">
                                {totalVolume}<span className="text-sm ml-1 opacity-70">ml</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[250px] text-center border-2 bg-white/10 border border-white/15 rounded-3xl">
                        <LucideMessageCircleWarning className='text-white w-12 h-12'/>
                        <p className="text-white/80 font-bold text-lg">Pas de données</p>
                        <p className="text-white/40 text-sm mt-1 max-w-[200px]">
                            Les doses distribuées apparaîtront ici automatiquement.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MilkDoseHistoryCard;