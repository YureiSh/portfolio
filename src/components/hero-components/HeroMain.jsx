import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const HeroMain = () => {
    const { t } = useContext(LanguageContext);
    const {darkMode} = useContext(ThemeContext);
    
    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.from("#heroH1", {x:-100, duration: 1, ease:"power1.inOut", opacity:0});
        tl.from("#heroH2", {x:-100, duration: 1, ease:"power1.inOut", opacity:0},0.8);
        tl.from("#buttons", {x:-100, duration: 1, ease:"power1.inOut", opacity:0},1.8);
        tl.from("#img", {x:100, duration: 1, ease:"power1.inOut", opacity:0},0);

    },[t, darkMode])

    return (
        <>
            <div className="flex flex-col md:flex-row padding-opt justify-between items-center">
                <div className="max-w-87.5" >
                    <h1 id="heroH1" className="text-5xl sl:text-6xl font-bold pb-9 text-hero-lime whitespace-pre-line">
                        {t.heroH1}
                    </h1>
                    <h2 id="heroH2" className="text-2xl pb-9 text-hero-lime whitespace-pre-line " >{t.heroH2}</h2>
                    <div id="buttons" className="flex justify-center md:justify-start gap-5">
                        <a className="hero-button" href="https://github.com/YureiSh" >GitHub</a>
                        <a className="hero-button" href="https://www.linkedin.com/in/enis-ata-erkol-2b72b9231/" >Linkedin</a>
                    </div>
                </div>
                <div id="img" className="pt-12 md:pt-0" >
                    <img className="rounded-2xl w-80" src="/me/me-hero.jpeg" alt="Mewithmygirl" width="350" height="375" />
                </div>
            </div>
        </>
    );
};
export default HeroMain;