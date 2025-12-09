import BackgroundSkyNight from "../atoms/BackgroundSkyNight";
import SensorStatCard from "../organisms/SensorStatCard";
import SerialLinkCard from "../organisms/SerialLinkCard";
import MilkDoseHistoryCard from "../organisms/MilkDoseHistoryCard";
import { useState } from "react";

const DashboardPage = () => {
    const [temperature, setTemperature] = useState(0);
    const [lightLevel, setLightLevel] = useState(0);
    const [soudLevel, setSoundLevel] = useState(0);

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
        // On utilise un tableau simple pour accumuler les octets d'une ligne
        let bufferAccumulator = [];

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                if (value) {
                
                    value.forEach((byte) => {
                    
                        if (byte === 10) {
                            let text = new TextDecoder().decode(new Uint8Array(bufferAccumulator));
                            console.log(text)
                            let values = text.split(",");
                            console.log(parseInt(values[0]))
                            
                            if (values.length == 3) {
                                setTemperature(parseInt(values[0]));
                                setLightLevel(parseInt(values[1]));
                                setSoundLevel(parseInt(values[2]));
                            }
                            bufferAccumulator = [];
                        } else {
    
                            bufferAccumulator.push(byte);
                        }
                        
                    });
                }
            }
        } catch (error) {
            console.error("Erreur de lecture :", error);
        } finally {
            reader.releaseLock();
        }
    }

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
            }
        }
    }

    const isAvailable = serialIsAvailable().supported;


    return (<>
        <BackgroundSkyNight />

        <main className="flex justify-center items-start lg:items-center min-h-screen">
            <div className="w-full max-w-7xl flex flex-col m-4 md:m-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 flex-row gap-4 sm:gap-6 lg:gap-8">
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
                        title="Luminosité"
                        description="Intensité lumineuse de la pièce"
                        value={lightLevel}
                        max={100}
                        unit="Lux"
                        optimalValueMin={0}
                        optimalValueMax={5}
                        decentValueMin={6}
                        decentValueMax={15}
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
                        value={1}
                        unit="lvl"
                        optimalValueMin={1}
                        optimalValueMax={1}
                        decentValueMin={2}
                        decentValueMax={2}
                    />
                    <SerialLinkCard
                        status={status}
                        isAvailable={isAvailable}
                        connect={connect}
                    />
                    <MilkDoseHistoryCard />
                </div>
            </div>
        </main>

    </>);
}

export default DashboardPage;