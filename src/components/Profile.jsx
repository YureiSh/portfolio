import BasicInfo from "./profile-components/BasicInfo";

const Profile = () => {
    return (
        <>
            <section className="bg-hero-blue pb-10">
                <div className="padding-opt text-white">
                    <div className="pt-8">
                        <h1 className="text-6xl font-bold text-hero-lime pb-10">Profile</h1>

                        <div className="flex flex-wrap gap-12 justify-between">

                            <div className="lg:w-1/4 sm:w-1/2 w-full">
                                <h2 className="text-[2.5rem] pb-8">Basic Information</h2>
                                <BasicInfo />
                            </div>

                            <div className="lg:w-1/4 sm:w-1/3 w-full flex justify-center ">
                                <img className="" src="/vite.svg" alt="" width="300" height="300" />
                            </div>

                            <div className="lg:w-1/4 w-full">
                                <h2 className="text-[2.5rem] pb-8">About Me</h2>
                                <p className="text-2xl">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                                    <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
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

