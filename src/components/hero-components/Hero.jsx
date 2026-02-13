import HeroHeader from "./HeroHeader";
import HeroMain from "./HeroMain";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const Hero = () => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className={`${language === "tr" ? "md:h-148":"md:h-164"} h-265 bg-hero-split shadow-xl`}>
                <HeroHeader/>
                <HeroMain/>
            </section>
        </>
    )
}

export default Hero;