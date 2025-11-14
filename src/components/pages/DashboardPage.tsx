import BackgroundSkyNight from "../atoms/BackgroundSkyNight";
import SensorStatCard from "../organisms/SensorStatCard";
import MilkDoseHistoryCard from "../organisms/MilkDoseHistoryCard";

const DashboardPage = () => {
    
    return (<>
        <BackgroundSkyNight/>

        <main className="flex justify-center items-start lg:items-center min-h-screen">
            <div className="w-full max-w-7xl flex flex-col gap-y-10 m-4 md:m-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 flex-row gap-4 sm:gap-6 lg:gap-8">
                    <SensorStatCard 
                        title="Température"
                        description="Température ambiante de la pièce"
                        max={100}
                        value={22}
                        unit="&deg;C"
                        optimalValueMin={20}
                        optimalValueMax={24}
                    />
                    <SensorStatCard 
                        title="Luminosité"
                        description="Intensité lumineuse de la pièce"
                        max={100}
                        value={35}
                        unit="Lux"
                        optimalValueMin={35}
                        optimalValueMax={50} 
                    />
                    <SensorStatCard 
                        title="Niveau sonore"
                        description="Intensité sonore de la pièce"
                        max={100}
                        value={76}
                        unit="dB"
                        optimalValueMin={20}
                        optimalValueMax={30}
                    />
                    <SensorStatCard 
                        title="Agitation"
                        description="Intensité de l'agitation de votre bébé"
                        max={5}
                        value={2}
                        unit="lvl"
                        optimalValueMin={1}
                        optimalValueMax={2}
                    />
                </div>

            </div>
        </main>
        
    </>);
}

export default DashboardPage;