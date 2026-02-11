const Contacts = () => {
    return (
        <>
            <section className="pt-12 w-full h-120">
                <div className="flex flex-col text-center gap-8">
                    <h1 className="text-hero-blue text-6xl font-bold" >Send me a Message!</h1>
                    <p className="text-2xl font-normal">Got a question or proposal, or just want
                       <br /> to say hello? Go ahead.</p>
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