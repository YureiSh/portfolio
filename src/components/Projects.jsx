import Project from "./projects-components/Project";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
    const {t} = useContext(LanguageContext);

    return(
    <>
    <section className=" bg-hero-lime-nec pt-10 shadow-md">
        <div className="padding-opt ">
            <h1 className="text-6xl font-bold text-hero-blue pb-10" >{t.projects}</h1>
            <Project/>
        </div>
    </section>
    </>
    );
};
export default Projects;