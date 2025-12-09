import BackgroundSkyNight from "../atoms/BackgroundSkyNight";
import SensorStatCard from "../organisms/SensorStatCard";
import SerialLinkCard from "../organisms/SerialLinkCard";
import MilkDoseHistoryCard from "../organisms/MilkDoseHistoryCard";
import { useState } from "react";

const DashboardPage = () => {
    const [temperature, setTemperature] = useState<number | null>(null);
    const [agitationLevel, setAgitationLevel] = useState<number | null>(null);
    const [soudLevel, setSoundLevel] = useState<number | null>(null);

    const [milkHistory, setMilkHistory] = useState<number[]>([]);

    const [status, setStatus] = useState<'error' | 'inactive' | 'loading' | 'connected'>('inactive');

    const serialIsAvailable = () => {
        if (!window.isSecureContext) {
            return {
                supported: false,
                message: "L'API nécessite le HTTPS ou localhost."
            };
        }

        if (!('serial' in navigator)) {
            return {
                supported: false,
                message: "Le navigateur ne supporte pas le Web Serial."
            };
        }

        return {
            supported: true
        }
    }

    const readLoop = async (port) => {
        const reader = port.readable.getReader();
        let bufferAccumulator = [];

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                if (value) {

                    value.forEach((byte) => bufferAccumulator.push(byte));
                    if (bufferAccumulator.length > 500) {
                        console.warn("Buffer trop plein, reset !");
                        bufferAccumulator = [];
                    }

                    while (bufferAccumulator.length > 0) {
                        const header = bufferAccumulator[0];
                        if (header === 0x01) {
                            if (bufferAccumulator.length < 4) break; 
                            
                            // ... traitement capteurs ...
                            const tempByte = bufferAccumulator[1];
                            const soundByte = bufferAccumulator[2];
                            const agitationByte = bufferAccumulator[3];
                            setTemperature(tempByte);
                            setSoundLevel(soundByte);
                            setAgitationLevel(agitationByte);

                            bufferAccumulator.splice(0, 4);
                        }
                        else if (header === 0x02) {
                            if (bufferAccumulator.length < 2) {

                                break; 
                            }

                            const dataLength = bufferAccumulator[1]; 

                            if (bufferAccumulator.length < 2 + dataLength) {
        
                                break;
                            }

                            const milkHistory = bufferAccumulator.slice(2, 2 + dataLength);
                            
                            setMilkHistory(milkHistory);
            
                            bufferAccumulator.splice(0, 2 + dataLength);
                        }
                        else {
                            bufferAccumulator.shift();
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Erreur de lecture :", error);
        } finally {
            reader.releaseLock();
        }
    };

    const connect = async () => {
        setStatus('loading');
        try {
            const port = await navigator.serial.requestPort({
                filters: [{ usbVendorId: 0x0d28, usbProductId: 0x0204 }]
            });
            await port.open({ baudRate: 9600 });

            setStatus('connected');

            readLoop(port);

        } catch (error) {
            if (error.name === 'NotFoundError') {
                setStatus('inactive');
            } else {
                setStatus('error');
                console.error(error); 
            }
        }
    };

    const isAvailable = serialIsAvailable().supported;


    return (<>
        <BackgroundSkyNight />

        <main className="flex justify-center items-start lg:items-center min-h-screen">
            <div className="w-full max-w-7xl flex flex-col m-4 md:m-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 flex-row gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    <SensorStatCard
                        title="Température"
                        description="Température ambiante de la pièce"
                        max={100}
                        value={temperature}
                        unit="&deg;C"
                        optimalValueMin={18}
                        optimalValueMax={20}
                        decentValueMin={16}
                        decentValueMax={22}
                    />
                    <SensorStatCard
                        title="Niveau sonore"
                        description="Intensité sonore de la pièce"
                        max={100}
                        value={soudLevel}
                        unit="dB"
                        optimalValueMin={0}
                        optimalValueMax={30}
                        decentValueMin={31}
                        decentValueMax={45}

                    />
                    <SensorStatCard
                        title="Agitation"
                        description="Intensité de l'agitation de votre bébé"
                        max={3}
                        value={agitationLevel}
                        unit="lvl"
                        optimalValueMin={1}
                        optimalValueMax={1}
                        decentValueMin={2}
                        decentValueMax={2}
                    />

                    </div>
                    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    <SerialLinkCard
                        status={status}
                        isAvailable={isAvailable}
                        connect={connect}
                    />
                    <MilkDoseHistoryCard
                        history={milkHistory}
                    />
                    </div>
 
                </div>
            </div>
        </main>

    </>);
}

export default DashboardPage;