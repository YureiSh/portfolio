import Toggle from "./Toggle";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const HeroHeader = () => {
    const { t, handleLanguageToggle } = useContext(LanguageContext);
    return (
        <>
            <div className="padding-opt-header h-48 md:h-32 flex flex-col md:flex-row justify-between items-center">

                <p className="text-3xl ps-0 md:ps-19 font-bold text-hero-lime order-2 md:order-1">
                    Enis Ata
                </p>

                <div className="text-2xl flex gap-16 pt-10 md:pt-0 pb-0 md:pb-8 order-1 md:order-2">
                    <button
                    onClick={()=>handleLanguageToggle()} 
                    className="text-hero-lime font-bold text-xl">{t.toggleButton}</button>
                    <div className="flex flex-row gap-4">
                        <Toggle/>
                        <span className="font-bold text-xl text-hero-lime md:text-hero-blue">DARK MODE</span>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HeroHeader;
//darkmode tema seçimi slider function
