import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

const BasicInfo = () => {
    const { t } = useContext(LanguageContext);
    const data = {
        birthDay: "20.07.2002",
        location: "İstanbul",
        education: ["KadirHas Ünv. Elektrik-Elektronik Mühendisliği", "BSc, 2020"],
        position: "Frontend, FullStack",
    };

    return (
        <div className="space-y-3">
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex justify-start lg:justify-start gap-10">
                    <p className="text-hero-lime text-2xl w-max-[200px] md:w-max-[1000px] ">{t[key]}</p>
                    <p className="text-2xl text-gray-200 text-start w-min-[250px] ">
                        {Array.isArray(value) ? value.map((line, i) =>
                            (<span className="text-start" key={i}>{line}<br /></span>)) : value}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default BasicInfo