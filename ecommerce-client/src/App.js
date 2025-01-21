import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values={
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
      <Footer/>

      {
        isOpenProductModal===true && <ProductModal/>
      }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}
