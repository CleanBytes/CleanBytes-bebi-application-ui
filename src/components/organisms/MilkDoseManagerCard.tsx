import BottleOfMilk from '@/assets/bottle-of-milk.png';

const MilkDoseManagerCard = () => {
    return (<>
        <div className="w-full bg-zinc-950/20 p-4 sm:p-6 lg:p-8 rounded-3xl">
            <div className="font-[Dynapuff] flex flex-col gap-y-2">
                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-extrabold">Gestion du Biberon</h2>
  
            
                <div className="flex flex-wrap gap-2">
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">30</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">90</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">120</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">150</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">180</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">240</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    <div className="bg-zinc-950/20 flex justify-center w-24 py-2 rounded-full">
                        <span className="text-white text-xl">240</span>
                        <span className="text-gray-300 text-lg">mL</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>);
}


export default MilkDoseManagerCard;