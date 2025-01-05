import { Button } from "@mui/material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";


const Navigation=()=>{

    const[isOpenSidebarVal, setisOpenSidebarVal] = useState(false);

    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allcartTab align-items-center' onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                                <span className='icon1 mr-2'><IoMenu/></span>
                                <span class="text">SEMUA KATEGORI</span>
                                <span className='icon2 ml-2'><IoIosArrowDown/></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link top="/"><Button>pria <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link top="/"><Button>clothing</Button></Link>
                                            <Link top="/"><Button>footwear</Button></Link>
                                            <Link top="/"><Button>watches</Button></Link>
                                            <Link top="/"><Button>fragrances</Button></Link>
                                            <Link top="/"><Button>grooming</Button></Link>
                                            <Link top="/"><Button>accessories</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link top="/"><Button>wanita <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link top="/"><Button>clothing</Button></Link>
                                            <Link top="/"><Button>footwear</Button></Link>
                                            <Link top="/"><Button>watches</Button></Link>
                                            <Link top="/"><Button>fragrances</Button></Link>
                                            <Link top="/"><Button>grooming</Button></Link>
                                            <Link top="/"><Button>accessories</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link top="/"><Button>kecantikan</Button></Link></li>
                                    <li><Link top="/"><Button>jam tangan</Button></Link></li>
                                    <li><Link top="/"><Button>anak</Button></Link></li>
                                    <li><Link top="/"><Button>gift</Button></Link></li>
                                    <li><Link top="/"><Button>pria</Button></Link></li>
                                    <li><Link top="/"><Button>wanita</Button></Link></li>
                                    <li><Link top="/"><Button>kecantikan</Button></Link></li>
                                    <li><Link top="/"><Button>jam tangan</Button></Link></li>
                                    <li><Link top="/"><Button>anak</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                            
                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link top="/"><Button>Beranda</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link top="/"><Button>pria</Button></Link>
                                <div className='submenu shadow'>
                                    <Link top="/"><Button>clothing</Button></Link>
                                    <Link top="/"><Button>footwear</Button></Link>
                                    <Link top="/"><Button>watches</Button></Link>
                                    <Link top="/"><Button>fragrances</Button></Link>
                                    <Link top="/"><Button>grooming</Button></Link>
                                    <Link top="/"><Button>accessories</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>wanita</Button></Link>
                                <div className='submenu shadow'>
                                    <Link top="/"><Button>clothing</Button></Link>
                                    <Link top="/"><Button>footwear</Button></Link>
                                    <Link top="/"><Button>watches</Button></Link>
                                    <Link top="/"><Button>fragrances</Button></Link>
                                    <Link top="/"><Button>grooming</Button></Link>
                                    <Link top="/"><Button>accessories</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>kecantikan</Button></Link>
                                <div className='submenu shadow'>
                                    <Link top="/"><Button>clothing</Button></Link>
                                    <Link top="/"><Button>footwear</Button></Link>
                                    <Link top="/"><Button>watches</Button></Link>
                                    <Link top="/"><Button>fragrances</Button></Link>
                                    <Link top="/"><Button>grooming</Button></Link>
                                    <Link top="/"><Button>accessories</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>jam tangan</Button></Link>
                                <div className='submenu shadow'>
                                    <Link top="/"><Button>clothing</Button></Link>
                                    <Link top="/"><Button>footwear</Button></Link>
                                    <Link top="/"><Button>watches</Button></Link>
                                    <Link top="/"><Button>fragrances</Button></Link>
                                    <Link top="/"><Button>grooming</Button></Link>
                                    <Link top="/"><Button>accessories</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>anak</Button></Link>
        
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>gift</Button></Link>
                                
                            </li>
                            <li className='list-inline-item'><Link top="/"><Button>Blog</Button></Link></li>
                            <li className='list-inline-item'><Link top="/"><Button>Kontak</Button></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;