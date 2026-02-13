import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


const LMButtons = ({languages}) => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="flex flex-row gap-2" >
            {languages.map((item) => (
                <div className="" key={item} >
                    <p className={`${darkMode ? "bg-[#8173DA]":"bg-hero-blue"} text-white  rounded-2xl py-1 px-4 font-extralight`}>
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default LMButtons;