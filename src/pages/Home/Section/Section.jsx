

const Section = () => {
    return (
        <div className="bg-slate-200 my-10 py-10">
            <div className="w-6/12 mx-auto text-center">
                <h2 className="text-red-600">What We Do</h2>
                <p className="text-4xl my-3 font-semibold">We Have Knoladge And Experience</p>
                <p className="opacity-70"> <small>We are taught by qualified and experienced teachers And here we divide the students by different categories So that teaching can have proper knowledge</small> </p>
            </div>
            <div className="grid lg:grid-cols-3 my-10">
                <div className="border-r-2 border-stone-300 px-12 py-5 text-center">
                    <img className="w-full h-52 mx-auto rounded" src="https://i.ibb.co/kyD5YcG/cartoon-kids-playing-on-seesaw-in-the-park-free-vector.jpg" alt="" />
                    <h2 className="text-red-500 text-3xl font-bold">KIDS</h2>
                    <p className="opacity-80">Here the young students are reviewed and coached by qualified teachers</p>
                </div>
                <div className="border-r-2 border-stone-300 px-12 py-5 text-center">
                    <img className="w-full h-52 mx-auto rounded" src="https://i.ibb.co/bdWXk7G/Free-Vector-Man-Playing-Football.jpg" alt="" />
                    <h2 className="text-red-500 text-3xl font-bold">MAN</h2>
                    <p> Here all men are trained in all sports. And everyone is happy to train</p>
                </div>
                <div className=" px-12 py-5 text-center">
                    <img className="w-full h-52 mx-auto rounded" src="https://i.ibb.co/7kf26JH/cartoon-character-sticker-with-a-girl-playing-football-free-vector.jpg" alt="" />
                    <h2 className="text-red-500 text-3xl font-bold">WOMAN</h2>
                    <p> Girls choose their favorite sport and train. They are fully trained here</p>
                </div>
            </div>
        </div>
    );
};

export default Section;