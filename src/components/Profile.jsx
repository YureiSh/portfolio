import BasicInfo from "./profile-components/BasicInfo";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const Profile = () => {
    const {t} = useContext(LanguageContext);
    return (
        <>
            <section className="bg-hero-blue pb-10">
                <div className="padding-opt text-white">
                    <div className="pt-8">
                        <h1 className="text-6xl font-bold text-hero-lime pb-10">Profile</h1>

                        <div className="flex flex-wrap gap-12 justify-between">

                            <div className="lg:w-1/4 sm:w-1/2 w-full">
                                <h2 className="text-[2.5rem] pb-8">{t.basicInformation}</h2>
                                <BasicInfo />
                            </div>

                            <div className="lg:w-1/4 sm:w-1/3 w-full flex justify-center ">
                                <img className="" src="/vite.svg" alt="" width="300" height="300" />
                            </div>

                            <div className="lg:w-1/4 w-full">
                                <h2 className="text-[2.5rem] pb-8">{t.aboutMe}</h2>
                                <p className="text-2xl whitespace-pre-line">
                                    {t.aboutMeText}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Profile;

