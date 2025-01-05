import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import CountryDropdown from '../CountryDropDown';
import { Button } from '@mui/material';
import { FiUser } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header =()=>{

    const context = useContext(MyContext);

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Karena epidemi <b>COVID 19</b>, pesanan dapat diproses dengan sedikit penundaan</p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                
                                {
                                    context.countryList.length!==0 && <CountryDropdown/>
                                }
                                
                                <SearchBox/>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser/></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>Rp.2.500.000</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><FaCartShopping/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <Navigation/>

            </div>
            
        </>
    );
}

export default Header;