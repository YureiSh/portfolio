import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Contacts = () => {
    const {t} = useContext(LanguageContext);
    const {darkMode} = useContext(ThemeContext);
    return (
        <>
            <section className={`pt-12 w-full h-100 ${darkMode ? "text-white" : "text-black"}`}>
                <div className="flex flex-col text-center gap-8">
                    <h1 className={`${darkMode ? "text-[#8173DA]" : "text-blue-700"} text-6xl font-bold`} >{t.message}</h1>
                    <p className="text-2xl font-normal whitespace-pre-line">{t.altMessage}</p>
                       <a href="mailto:enisataerkol@hotmail.com" className={`${darkMode ? "text-[#8173DA]" : "text-blue-700"} font-semibold text-2xl underline`} >
                        enisataerkol@hotmail.com</a>
                </div>
            </section>
        </>
    );
};
export default Contacts;

//