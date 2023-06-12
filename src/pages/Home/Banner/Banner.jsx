// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import img1 from '../../../assets/football.jpg'
import img2 from '../../../assets/hockey.jpg'
import img3 from '../../../assets/tennis.jpg'

const Banner = () => {
    return (
        <div className="mb-5">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[600px]">
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;