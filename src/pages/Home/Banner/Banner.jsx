import { FaPlayCircle } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="md:flex justify-center items-center">
            <div className="md:w-1/2 space-y-10 lg:p-0 p-2">
                <h2 className="text-5xl font-bold uppercase">creating <span className="text-[#D11F18]">world-class</span> <br /> champion athletes</h2>
                <p><small>Welcome to <span className="text-[#D11F18]">Wolves Sports Academy</span>, your premier destination for all things sports academy. Our platform is dedicated to providing a comprehensive and enriching experience for sports enthusiasts, students, and researchers alike</small></p>
                <div className='flex gap-8'>
                    <div>
                        <h2 className='text-3xl font-semibold'>20 <span className='text-[#D11F18]'>+</span></h2>
                        <p className='uppercase'>Years Of Experience</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold'>60 <span className='text-[#D11F18]'>+</span></h2>
                        <p className='uppercase'>Expert Coachs</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-semibold'>1200 <span className='text-[#D11F18]'>+</span></h2>
                        <p className='uppercase'>member joined</p>
                    </div>
                </div>
                <div className='flex space-x-5'>
                    <button className="px-5 py-2 bg-[#D11F18] font-bold text-white ">Get Start</button>
                    <button className="text-black text-3xl"><FaPlayCircle /></button>
                    <button className='text-2xl'>Watch Video</button>
                </div>
            </div>
            <div className="md:w-1/2">
                <img className='w-full' src="https://i.ibb.co/S3QvrBC/young.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;