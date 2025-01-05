import HomeBanner from "../../components/HomeBanner";
import banner from '../../assets/images/banner.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import newsletter from '../../assets/images/newsletter.png';
import { IoMailOutline } from "react-icons/io5";
import Footer from "../../components/Footer";


const Home =()=>{

    return(
        <>
            <HomeBanner/>
            <HomeCat/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner} className="cursor w-100"/>
                                </div>
                                <div className="banner mt-4">
                                    <img src={banner2} className="cursor w-100"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-light text-sml mb-0">Jangan lewatkan penawaran saat ini hingga akhir November.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">Lihat Semua 
                                <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                </Swiper>
                            </div>



                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">PRODUK BARU</h3>
                                    <p className="text-light text-sml mb-0">Produk baru dengan stok yang diperbarui.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">Lihat Semua 
                                <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                            </div>

                            
                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} className="cursor w-100"/>
                                </div>

                                <div className="banner">
                                    <img src={banner4} className="cursor w-100"/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">Diskon Rp300.000 untuk pembelian pertama</p>
                            <h3 className="text-white">Bergabunglah dengan Buletin Kami dan dapatkan...</h3>
                            <p className="text-light">Bergabunglah dengan langganan email kami sekarang untuk mendapatkan <br/> pembaruan tentang promosi dan kupon.</p>


                            <form>
                                <IoMailOutline/>
                                <input type="text" placeholder="Alamat Email Anda..."/>
                                <Button>Langganan</Button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <img src={newsletter}/>
                        </div>
                    </div>
                </div>
            </section>

            

        </>
    );
}

export default Home;