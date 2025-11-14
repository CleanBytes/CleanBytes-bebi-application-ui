import MilkDoseItem from "../molecules/MilkDoseItem";


const MilkDoseHistoryCard = () => {
    return (<>
        <div className="w-full bg-zinc-950/20 p-4 sm:p-6 lg:p-8 rounded-3xl">
            <div className="font-[Dynapuff] flex flex-col gap-y-2">
                <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-extrabold">Historique</h2>
                <div className="flex flex-col gap-y-5">
                    <MilkDoseItem
                        quantity={100}
                    />
                    <MilkDoseItem
                        quantity={150}
                    />
                </div>
            </div>
        </div>
    </>);
}


export default MilkDoseHistoryCard;
            