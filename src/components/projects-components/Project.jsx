import LMButtons from "./LMButtons";
import ProjectLinks from "./ProjectLinks";

const data = [{
    image: "/vite.svg",
    title: "Workintech",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolorem blanditiis esse harum dolorum voluptate eos ab laboriosam molestias repudiandae quibusdam ad, quae quia numquam, voluptatibus quos, itaque architecto id?",
    languages: ["react", "redux", "vercel"],
    links: [
        { github: "https://ss", site: "https://ss1" }
    ]
},
{
    image: "/vite.svg",
    title: "Workintech",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolorem blanditiis esse harum dolorum voluptate eos ab laboriosam molestias repudiandae quibusdam ad, quae quia numquam, voluptatibus quos, itaque architecto id?",
    languages: ["react", "redux", "vercel"],
    links: [
        { github: "https://ss", site: "https://ss1" }
    ]
}
]

const Project = () => {
    return (
        <div className="flex flex-col gap-12 pb-12 ">
            {data.map((item, index) => (
                <div key={`${item.title}-${index}`} className="bg-white rounded-md shadow-2xl flex flex-col items-center md:flex-row gap-15 " >
                    <div className="w-93.75 h-93.75 flex justify-center">
                        <img src={item.image} alt={item.title} width="360" height="360" />

                    </div>
                    <div className="md:w-2/3 w-full py-4 px-4 flex flex-col gap-y-6">
                        <h2 className="text-4xl text-hero-blue font-bold" > {item.title} </h2>
                        <p className="font-sans text-gray-600" > {item.description} </p>
                        <LMButtons languages={item.languages} />
                        <ProjectLinks links={item.links} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Project