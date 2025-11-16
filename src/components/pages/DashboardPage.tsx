import BackgroundSkyNight from "../atoms/BackgroundSkyNight";
import SensorStatCard from "../organisms/SensorStatCard";
import MilkDoseManagerCard from "../organisms/MilkDoseManagerCard";
import MilkDoseHistoryCard from "../organisms/MilkDoseHistoryCard";

const DashboardPage = () => {
    
    return (<>
        <BackgroundSkyNight/>

        <main className="flex justify-center items-start lg:items-center min-h-screen">
            <div className="w-full max-w-7xl flex flex-col m-4 md:m-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 flex-row gap-4 sm:gap-6 lg:gap-8">
                    <SensorStatCard 
                        title="Température"
                        description="Température ambiante de la pièce"
                        max={100}
                        value={22}
                        unit="&deg;C"
                        optimalValueMin={18}
                        optimalValueMax={20}
                        decentValueMin={16}
                        decentValueMax={22}
                    />
                    <SensorStatCard 
                        title="Luminosité"
                        description="Intensité lumineuse de la pièce"
                        max={100}
                        value={2}
                        unit="Lux"
                        optimalValueMin={1}
                        optimalValueMax={5} 
                        decentValueMin={6}
                        decentValueMax={15}
                    />
                    <SensorStatCard 
                        title="Niveau sonore"
                        description="Intensité sonore de la pièce"
                        max={100}
                        value={15}
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
                    <MilkDoseManagerCard/>
                    <MilkDoseHistoryCard/>
                </div>


            </div>
        </main>
        
    </>);
}

export default DashboardPage;