import BasicInfo from "./profile-components/BasicInfo";

const Profile = () => {
    return (
        <>
            <section className="h-160 bg-hero-blue">
                <div className="py-16  text-white">
                    <h1 className="text-6xl font-bold text-hero-lime pb-10">Profile</h1>

                    <div className="flex gap-12 justify-between">

                        <div className="w-112.5 ">
                            <h2 className="text-[2.5rem] pb-8">Basic Information</h2>
                            <BasicInfo />
                        </div>

                        <div className="w-75  flex justify-center">
                            <img src="/vite.svg" alt="" width="300" height="300" />
                        </div>

                        <div className="w-87.5 ">
                            <h2 className="text-[2.5rem] pb-8">About Me</h2>
                            <p className="text-2xl">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                                <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};
export default Profile;

