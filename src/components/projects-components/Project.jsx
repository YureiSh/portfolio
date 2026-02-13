import { useContext } from "react";
import LMButtons from "./LMButtons";
import ProjectLinks from "./ProjectLinks";
import { ThemeContext } from "../../contexts/ThemeContext";

const data = [{
    image: "/projects/project-0.png",
    title: "SPA-Teknolojik Yemekler",
    description: "Teknolojik yemekler projemi kullanıcının belli sipariş seçenekleriyle yemek seçebildiği çoğaltılabilir bir site tasarımı ile tamamladım. Sayfamızın üzerinden pizza sipariş verip, belirli api call'u ile sipariş seçeneklerini ulaştırabiliriz.",
    languages: ["HTML5", "JS", "CSS", "REST-API"],
    links: [
        { github: "https://github.com/YureiSh/fsweb-s8-challenge-pizza", site: "#1" }
    ]
},
{
    image: "/projects/project-1.png",
    title: "Seesaw with physics",
    description: "I added realistic physics and its calculations for a simple seesaw. Its simply click and use, get bored and reset try other possibilities type of project. It is fun you can try.",
    languages: ["JS", "HTML5", "CSS"],
    links: [
        { github: "https://github.com/YureiSh/seesaw-simulation-byEnis-Ata-Erkol", site: "https://yureish.github.io/seesaw-simulation-byEnis-Ata-Erkol/" }
    ]
}
]

const Project = () => {
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className="flex flex-col gap-12 pb-12 ">
            {data.map((item, index) => (
                <div key={`${item.title}-${index}`} className={` ${darkMode ? "bg-[#252128] text-white" : "bg-white" } rounded-md shadow-2xl flex flex-col items-center md:flex-row gap-15 `} >
                    <div className="w-93.75 h-93.75 flex justify-center">
                        <img className="rounded-2xl" src={item.image} alt={item.title} width="360" height="360" />

                    </div>
                    <div className="md:w-2/3 w-full py-4 px-4 flex flex-col gap-y-6">
                        <h2 className={`text-4xl ${darkMode ? "text-[#8173DA]": "text-hero-blue"} font-bold`} > {item.title} </h2>
                        <p className={`font-sans ${darkMode ? "text-white" : "text-gray-600"}`} > {item.description} </p>
                        <LMButtons languages={item.languages} />
                        <ProjectLinks links={item.links} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Project
