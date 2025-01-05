import { Button, Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { SwiperSlide } from "swiper/react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductItem = ()=>{
    return(
        
        <div className="item productItem">
            <div className="imgWrapper">
                <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-156453451/blythe_blythe_cardholder_dompet_kecil_small_wallet_pouch_anti_air_dompet_kartu_resleting_pria_229_full05_ngtyvu2r.jpg?" className="w-100"/>

                <span className="badge badge-primary">67%</span>

                <div className="actions">
                    <Button><TfiFullscreen/></Button>
                    <Button><IoMdHeartEmpty style={{fontSize: '20px'}}/></Button>
                </div>

            </div>

            <div className="info">
                <h4>Blythe Cardholder Dompet Kecil Small Wallet Pouch anti air Dompet Kartu Resleting Pria 229</h4>
                <span className="text-success d-block">Tersedia</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                <div className="d-flex">
                    <span className="oldPrice">Rp119.000</span>
                    <span className="netPrice text-danger ml-2">Rp39.000</span>
                </div>

            </div>
        </div>
    
    )
}

export default ProductItem;