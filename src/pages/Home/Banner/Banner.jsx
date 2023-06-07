const Banner = () => {
    return (
        <div className="md:flex justify-center items-center">
            <div className="w-1/2 space-y-5">
                <h2 className="text-5xl font-bold uppercase">creating <span className="text-[#D11F18]">world-class</span> <br /> champion athletes</h2>
                <p><small>Welcome to <span className="text-[#D11F18]">Wolves Sports Academy</span>, your premier destination for all things sports academy. Our platform is dedicated to providing a comprehensive and enriching experience for sports enthusiasts, students, and researchers alike</small></p>
                <button className="px-5 py-2 bg-[#D11F18] font-bold text-white ">Get Start</button>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/S3QvrBC/young.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;