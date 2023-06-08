
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/football.jpg'
import img2 from '../../../assets/hockey.jpg'
import img3 from '../../../assets/tennis.jpg'
const Banner = () => {
    return (
        <Carousel>
                <div className="h-96">
                    <img className="w-full" src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div className="h-96">
                    <img className="w-full bg-cover" src={img3} />
                </div>
            </Carousel>
    );
};

export default Banner;