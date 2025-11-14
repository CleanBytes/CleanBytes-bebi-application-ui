interface MilkDoseProps {
    quantity: number;
}

const MilkDoseItem: React.FC<MilkDoseProps> = ({ quantity }) => {
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    return (<>
        <div className="w-full flex flex-row justify-between">
            <div>
                <span className="text-white text-3xl">{getCurrentTime()}</span>
            </div>
            <div className="flex items-end gap-x-2">
                <span className="text-white text-3xl">{quantity}</span>
                <span className="text-gray-200 text-2xl">mL</span>
            </div>
        </div>
    </>);
}

export default MilkDoseItem;