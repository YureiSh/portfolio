

const LMButtons = ({languages}) => {
    
    return (
        <div className="flex flex-row gap-2" >
            {languages.map((item) => (
                <div className="" key={item} >
                    <p className=" text-white bg-hero-blue rounded-2xl py-1 px-4 font-extralight">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default LMButtons;