import HeroHeader from "./HeroHeader";
import HeroMain from "./HeroMain";


const Hero = () => {
    return (
        <>
            <section className="h-265 md:h-184 bg-hero-split">
                <HeroHeader/>
                <HeroMain/>
            </section>
        </>
    )
}

export default Hero;