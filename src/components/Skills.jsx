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
            <section className="py-20  flex pb-15">
                <h1 className="w-5/12 text-6xl font-bold text-hero-blue">Skills</h1>

                <div className="flex flex-wrap">
                    {data.map((item) => (
                        <div key={item.src} className="w-1/2 flex items-center gap-6 mb-12 ps-12">
                            <img
                                className="rounded-md object-contain w-30 h-30"
                                src={`/logo/${item.src}`}
                                alt={item.title}
                            />
                            <p className="text-gray-400 text-3xl tracking-wide max-w-37.5">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
export default Skills;

