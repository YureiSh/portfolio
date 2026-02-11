

const HeroHeader = () => {
    return (
        <>
            <div className="padding-opt h-48 md:h-32 flex flex-col md:flex-row justify-between items-center">

                <p className="text-4xl text-hero-lime order-2 md:order-1">
                    *NAME*
                </p>

                <div className="text-2xl flex gap-8 pt-10 md:pt-0 pb-0 md:pb-8 order-1 md:order-2">
                    <p className="text-hero-lime">TÜRKÇEYE GEÇ</p>
                    <p className=" text-hero-lime md:text-hero-blue">DARK MODE</p>
                </div>

            </div>

        </>
    )
}

export default HeroHeader;
