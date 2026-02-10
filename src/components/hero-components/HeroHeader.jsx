

const HeroHeader = () => {
    return (
        <>
            <div className="py-8 h-32 flex justify-between items-center">

                <p className="text-4xl text-hero-lime">
                    *NAME*
                </p>

                <div className="text-2xl flex gap-12 self-start">
                    <p className="text-hero-lime">TÜRKÇEYE GEÇ</p>
                    <p className="text-hero-blue">DARK MODE</p>
                </div>

            </div>

        </>
    )
}

export default HeroHeader;
