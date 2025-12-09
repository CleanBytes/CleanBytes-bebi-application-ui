

import { Usb, CheckCircle2} from "lucide-react";

interface SerialLinkCardProps {
    status: 'error' | 'inactive' | 'loading' | 'connected';
    isAvailable: boolean;
    connect: () => void;

}

const SerialLinkCard : React.FC<SerialLinkCardProps> = ({ status, isAvailable, connect}) => {


  return (
    <div className="w-full bg-zinc-950/20 p-4 sm:p-6 lg:p-8 rounded-3xl">
      <div className="font-[Dynapuff] flex flex-col gap-y-6">
        <h2 className="text-center text-white text-xl sm:text-3xl lg:text-4xl font-extrabold">
          Connexion appareil
        </h2>

        <div className="w-full h-36 bg-white/10 border border-white/15 rounded-3xl">
          <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center"> 
            { status === 'inactive' && (
              <>
                <Usb className="w-12 h-12 text-white" />
                <span className="text-white text-base">Aucun appareil connecté.</span>
              </>
            )}

            { status === 'loading' && (
              <>
                <div className="w-8 aspect-square border-4 border-l-transparent border-white rounded-full animate-spin"></div>
                <span className="text-white text-base">Connexion en cours</span>
              </>
            )}

            { status === 'connected' && (
              <>
                <CheckCircle2 className="w-12 h-12 text-white"/>
                <span className="text-white text-base">Moniteur connecté avec succès.</span>
              </>
            )}
          </div>
        </div>


        <button onClick={connect} className={`bg-white w-full h-16 rounded-2xl ${isAvailable ? "cursor-pointer hover:scale-102 transition-transform duration-300 ease-out" : "cursor-not-allowed"}`} disabled={!isAvailable}>
            <span className="text-black text-xl font-semibold">Rechercher l'appareil</span>
        </button>
        
      </div>
    </div>
  );
};



export default SerialLinkCard;