
const ProjectLinks = ({links}) => {
    return (
        <div>
            {links.map((item) => (
                <div className="flex flex-row gap-4 text underline" key={item.site} >
                    <a href={item.site}>
                        View Site
                    </a>
                    <a href={item.github}>
                        Github
                    </a>
                </div>
            ))}
        </div>
    );
};
export default ProjectLinks;