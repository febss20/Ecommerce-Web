import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = ()=>{

    const[itemBg, setitemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',

    ])

    return (
        <section className="homeCat">
            <div className="container">
                <h3 class="mb-3 hd">Fitur Kategori</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{background:item}}>
                                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png"/>

                                        <h6>Apel Merah</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;