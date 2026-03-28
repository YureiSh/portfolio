import BasicInfo from "./profile-components/BasicInfo";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Profile = () => {
    const {t} = useContext(LanguageContext);

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#profileSec',
                start: "top 75%"
            }
        });

        tl.from("#basicInfo", {x:100, duration: 1, ease:"power1.inOut", opacity:0},0.3)
        tl.from("#profilePic", {y:-100, duration: 1, ease:"power1.inOut", opacity:0});
        tl.from("#aboutme", {x:-100, duration: 1, ease:"power1.inOut", opacity:0},0.3)

    },[])

    return (
        <>
            <section id="profileSec" className="bg-hero-blue-nec pb-10">
                <div className="padding-opt text-white">
                    <div className="pt-8">
                        <h1 className="text-6xl font-bold text-hero-lime pb-10">Profile</h1>

                        <div className="flex flex-wrap gap-12 justify-between">

                            <div id="basicInfo" className="lg:w-1/4 sm:w-1/2 w-full">
                                <h2 className="text-[2.5rem] pb-8">{t.basicInformation}</h2>
                                <BasicInfo />
                            </div>

                            <div id="profilePic" className="lg:w-1/4 sm:w-1/3 w-full flex justify-center ">
                                <img className="rounded-2xl " src="/me/about-me.jpeg" alt="" width="300" height="300" />
                            </div>

                            <div id="aboutme" className="lg:w-1/4 w-full">
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

