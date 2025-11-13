import bgSkyNight from "@/assets/bg-sky-night.jpg";

const BackgroundSkyNight = () => {
    return (<>
        <div className={`-z-10 fixed inset-0 bg-cover bg-center bg-slate-950 bg-[url(${bgSkyNight})] blur`}></div>
    </>)
}

export default BackgroundSkyNight;