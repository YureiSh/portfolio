import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Contacts = () => {
    const {t} = useContext(LanguageContext);
    const {darkMode} = useContext(ThemeContext);
    return (
        <>
            <section className={`pt-12 w-full h-120 ${darkMode ? "text-white" : "text-black"}`}>
                <div className="flex flex-col text-center gap-8">
                    <h1 className="text-hero-blue text-6xl font-bold" >{t.message}</h1>
                    <p className="text-2xl font-normal whitespace-pre-line">{t.altMessage}</p>
                       <p className="text-blue-700 font-semibold text-2xl underline" >
                        enisataerkol@hotmail.com</p>
                    <div className="flex flex-row justify-center gap-8">
                        <img src="/icons/twitter-icon.svg" alt="" />
                        <img src="/icons/codepen-icon.svg" alt="" />
                        <img src="/icons/at-icon.svg" alt="" />
                        <img src="/icons/insta-icon.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contacts;

//