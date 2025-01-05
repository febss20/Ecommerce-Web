import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

const CountryDropdown=()=>{

    const [isOpenModel, setisOpenModel] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [countryList, setcountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry=(index, country)=>{
        setselectedTab(index);
        setisOpenModel(false);
        context.setselectedCountry(country);
    }

    useEffect(()=>{
        setcountryList(context.countryList);
    },[])

    const filterList=(e)=>{
        const keyword = e.target.value.toLowerCase();

        if(keyword!==""){
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            });
            setcountryList(list);
        }else {
            setcountryList(context.countryList);
        }

    }

    return(
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='lable'>Lokasi Anda</span>
                    <span className='name'>{context.selectedCountry!=="" ? context.
                    selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.
                    selectedCountry : 'Pilih Lokasi'}</span>
                </div>
                <span className='ml-auto'><IoIosArrowDown/></span>
            </Button>


            <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)} 
            className='locationModel' TransitionComponent={Transition}>
                <h4 className='mb-0'>Pilih Lokasi Pengiriman Anda</h4>
                <p>Masukkan alamat Anda dan kami akan menentukan penawaran untuk wilayah Anda</p>
                <Button className='close_' onClick={()=>setisOpenModel(false)}><MdClose/></Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Cari lokasi anda...' onChange={filterList}/>
                    <Button><IoIosSearch/></Button>
                </div>

                <ul className='countryList mt-3'>
                {
                    countryList?.length!==0 && countryList?.map((item,index)=>{
                        return(
                            <li key={index}><Button onClick={()=>selectCountry(index,item.country)}
                                className={`${selectedTab===index ? 'active' : ''}`}
                            >{item.country}</Button></li>
                        )
                    })
                }
                    
                </ul>
            </Dialog>

        </>
    )
}

export default CountryDropdown;