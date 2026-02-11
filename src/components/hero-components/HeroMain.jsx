

const HeroMain = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row padding-opt justify-between items-center">
                <div className="max-w-87.5" >
                    <h1 className="text-6xl font-bold pb-9 text-hero-lime">
                        I am a Frontend <br /> Developer...
                    </h1>
                    <h2 className="text-2xl pb-9 text-hero-lime " >...who likes to craft solid and scalable frontend
                        <br /> products with great user experiences.</h2>
                    <div className="flex justify-center md:justify-start gap-5">
                        <a className="hero-button" >GitHub</a>
                        <a className="hero-button" >Linkedin</a>
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