

const HeroMain = () => {
    return (
        <>
            <div className="py-8  flex justify-between items-center">
                <div className="" >
                    <h1 className="text-6xl font-bold pb-9 text-hero-lime">
                        I am a Frontend <br /> Developer...
                    </h1>
                    <h2 className="text-2xl pb-9 text-hero-lime " >...who likes to craft solid and scalable frontend
                        <br /> products with great user experiences.</h2>
                    <div className=" flex gap-5">
                        <a className="hero-button" >GitHub</a>
                        <a className="hero-button" >Linkedin</a>
                    </div>
                </div>
                <div>
                    <img src="../public/vite.svg" alt="Girl in a jacket" width="350" height="375" />
                </div>
            </div>
        </>
    );
};
export default HeroMain;