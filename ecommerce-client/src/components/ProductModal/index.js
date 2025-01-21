import { Button, Rating } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useContext, useRef } from 'react';
import { MdClose } from "react-icons/md";
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';


const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    const goto = (index) => {
        if (zoomSlider.current?.slickGoTo) {
            zoomSlider.current.slickGoTo(index);
        }
        if (zoomSliderBig.current?.slickGoTo) {
            zoomSliderBig.current.slickGoTo(index);
        }
    };
    

    return (
        <>
            <Dialog open={true} className="productModal" onClose={()=>context.setisOpenProductModal(false)}>
                <Button className='close_'  onClick={()=>context.setisOpenProductModal(false)}><MdClose/></Button>
                <h4 class="mb-1 font-weight-bold">Blythe Cardholder Dompet Kecil Small Wallet Pouch anti air</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Merk:</span>
                        <span className='ml-2'><b>Blythe</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                </div>
                
                <hr/>

                <div className='row mt-2 productDetaileModal'>
                    <div className='col-md-5'>
                        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>67%</div>
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}
                            >
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full10_edyz595f.jpg'}/>
                                </div>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full11_und9a77h.jpg'}/>
                                </div>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full12_i1ilbtt2.jpg'}/>
                                </div>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full13_u4wk8gr0.jpg'}/>
                                </div>
                            </Slider>
                        </div>

                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/thumbnail/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full10_edyz595f.jpg?w=112'} 
                                    className='w-100' onClick={() => goto(0)}/>
                            </div>

                            <div className='item'>
                                <img src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/thumbnail/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full11_und9a77h.jpg?w=112'} 
                                    className='w-100' onClick={() => goto(1)}/>
                            </div>

                            <div className='item'>
                                <img src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/thumbnail/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full12_i1ilbtt2.jpg?w=112'} 
                                    className='w-100' onClick={() => goto(2)}/>
                            </div>

                            <div className='item'>
                                <img src={'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/thumbnail/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full13_u4wk8gr0.jpg?w=112'} 
                                    className='w-100' onClick={() => goto(3)}/>
                            </div>
                        </Slider>

                    </div>

                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>Rp119.000</span>
                            <span className='netPrice text-danger lg'>Rp39.000</span>
                        </div>

                        <span className="badge bg-success">TERSEDIA</span>

                        <p className='mt-3'>Blythe merupakan salah satu brand papas atas yang menawarkan koleksi fashion pria maupun Wanita. 
                            Blythe mengikuti tren fashion masa kini dengan desain yang simpel dan elegan.</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Tambah Ke Bag</Button>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                            <Button className='btn-round btn-sml' 
                            variant="outlined"><IoIosHeartEmpty/>&nbsp; TAMBAH FAVORIT</Button>
                            <Button className='btn-round btn-sml ml-3' 
                            variant="outlined"><MdOutlineCompareArrows/>&nbsp; COMPARE</Button>
                        </div>
                    </div>
                </div>

            </Dialog>
        </>
    )
}

export default ProductModal;