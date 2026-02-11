const data = [
    {
        src: "js-logo.svg",
        title: "JAVASCRIPT"
    }, {
        src: "node-logo.svg",
        title: "NODE"
    }, {
        src: "react-logo.svg",
        title: "REACT"
    }, {
        src: "vsc-logo.svg",
        title: "VS CODE"
    }, {
        src: "redux-logo.svg",
        title: "REDUX"
    }, {
        src: "figma-logo.svg",
        title: "FIGMA"
    }
];


const Skills = () => {

    return (
        <>
            <section className="padding-opt pb-15">
                <div className="flex flex-col md:flex-row pt-10">
                    <h1 className="w-5/12 pb-10 md:pb-0 text-6xl font-bold text-hero-blue">Skills</h1>

                    <div className="flex flex-wrap">
                        {data.map((item) => (
                            <div key={item.src} className="w-1/3 md:w-1/2 flex flex-col md:flex-row items-center gap-6 mb-12 ">
                                <img
                                    className="rounded-md object-contain w-20 h-20 md:w-30 md:h-30"
                                    src={`/logo/${item.src}`}
                                    alt={item.title}
                                />
                                <p className="text-gray-400 text-xl md:text-3xl tracking-wide max-w-37.5">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
export default Skills;

