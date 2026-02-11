import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const HeroMain = () => {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <div className="flex flex-col md:flex-row padding-opt justify-between items-center">
                <div className="max-w-87.5" >
                    <h1 className="text-5xl sl:text-6xl font-bold pb-9 text-hero-lime whitespace-pre-line">
                        {t.heroH1}
                    </h1>
                    <h2 className="text-2xl pb-9 text-hero-lime whitespace-pre-line " >{t.heroH2}</h2>
                    <div className="flex justify-center md:justify-start gap-5">
                        <a className="hero-button" href="" >GitHub</a>
                        <a className="hero-button" href="" >Linkedin</a>
                    </div>
                </div>
                <div className="pt-12 md:pt-0" >
                    <img src="../public/vite.svg" alt="Girl in a jacket" width="350" height="375" />
                </div>
            </div>
        </>
    );
};
export default HeroMain;