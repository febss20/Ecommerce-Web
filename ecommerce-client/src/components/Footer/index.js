import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Produk segar setiap hari</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free ongkir pesanan lebih dari 1jt</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Diskon Mega Harian</span>
                    </div>

                    <div className="col d-flex align-items-center">
                        <span><CiDollar/></span>
                        <span className="ml-2">Harga terbaik di pasaran</span>
                    </div>
                </div>


                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>BUAH DAN SAYURAN</h5>
                        <ul>
                            <li><Link to="#">Sayuran Segar</Link></li>
                            <li><Link to="#">Herbal & Bumbu</Link></li>
                            <li><Link to="#">Buah-buahan Segar</Link></li>
                            <li><Link to="#">Potongan & Kecambah</Link></li>
                            <li><Link to="#">Buah & Sayuran Eksotis</Link></li>
                            <li><Link to="#">Produk Kemasan</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>DAGING & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Sayuran Segar</Link></li>
                            <li><Link to="#">Herbal & Bumbu</Link></li>
                            <li><Link to="#">Buah-buahan Segar</Link></li>
                            <li><Link to="#">Potongan & Kecambah</Link></li>
                            <li><Link to="#">Buah & Sayuran Eksotis</Link></li>
                            <li><Link to="#">Produk Kemasan</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>MINUMAN</h5>
                        <ul>
                            <li><Link to="#">Sayuran Segar</Link></li>
                            <li><Link to="#">Herbal & Bumbu</Link></li>
                            <li><Link to="#">Buah-buahan Segar</Link></li>
                            <li><Link to="#">Potongan & Kecambah</Link></li>
                            <li><Link to="#">Buah & Sayuran Eksotis</Link></li>
                            <li><Link to="#">Produk Kemasan</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>SARAPAN & SUSU</h5>
                        <ul>
                            <li><Link to="#">Sayuran Segar</Link></li>
                            <li><Link to="#">Herbal & Bumbu</Link></li>
                            <li><Link to="#">Buah-buahan Segar</Link></li>
                            <li><Link to="#">Potongan & Kecambah</Link></li>
                            <li><Link to="#">Buah & Sayuran Eksotis</Link></li>
                            <li><Link to="#">Produk Kemasan</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Sayuran Segar</Link></li>
                            <li><Link to="#">Herbal & Bumbu</Link></li>
                            <li><Link to="#">Buah-buahan Segar</Link></li>
                            <li><Link to="#">Potongan & Kecambah</Link></li>
                            <li><Link to="#">Buah & Sayuran Eksotis</Link></li>
                            <li><Link to="#">Produk Kemasan</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="https://www.facebook.com/share/15ohSU24yw/"><FaFacebookF/></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="https://www.instagram.com/febss.rasy?igsh=dTFzcjRweDgyMTY="><FaInstagram/></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="https://www.linkedin.com/in/alif-rasyid-febriansyah-906743229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></Link>
                        </li>
                    </ul>
                </div>


            </div>
        </footer>
    )
}

export default Footer;