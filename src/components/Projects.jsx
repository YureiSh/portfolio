import Project from "./projects-components/Project";

const Projects = () => {
    return(
    <>
    <section className=" bg-hero-lime pt-10 shadow-md">
        <div className="padding-opt ">
            <h1 className="text-6xl font-bold text-hero-blue pb-10" >Projects</h1>
            <Project/>
        </div>
    </section>
    </>
    );
};
export default Projects;