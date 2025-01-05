import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const HomeBanner = () => {

    return (
        <section className="homeBannerSection">
            <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper3"
            >
                <SwiperSlide>
                <div className="item">
                    <img src="https://www.static-src.com/siva/asset/11_2024/Home-Desk-Philips-Histeria-11-11-2024.jpg?" className="w-100"/>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                    <img src="https://www.static-src.com/siva/asset/11_2024/dekoruma_11.11-carousel-2000x500__.jpg?" className="w-100"/>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                    <img src="https://www.static-src.com/siva/asset/11_2024/Tgl5ses2_2000x500.jpg?" className="w-100"/>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                    <img src="https://www.static-src.com/siva/asset/11_2024/11.11_-_-revKV_Carousel-Desktop-5-NOV-23.gif?" className="w-100"/>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                    <img src="https://www.static-src.com/siva/asset/11_2024/Home-Desk-Panasonic-Double-date-11-11.jpg?" className="w-100"/>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeBanner;