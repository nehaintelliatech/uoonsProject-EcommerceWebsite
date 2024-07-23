import React from 'react'
import { useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow';
import ProductsContainer from '../components/ProductsContainer';
import ProductsContainerMII from '../components/ProductsContainerMII';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import BrandContainer from '../components/BrandContainer';

const Homepage = () => {

  const [heading1, setheading1] = useState("Deal of The Day!")
  const [heading2, setheading2] = useState("New Arrival")

  const [heading3, setheading3] = useState("Made in India")
  const [heading4, setheading4] = useState("Best Seller")
  const [heading5, setheading5] = useState("Recently viewed!")
  const [heading6, setheading6] = useState("SmartPhones & Tablets")



  const [orderPopup, setOrderPopup] = React.useState(false);

  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white duration-200">
      <Navbar />
      <Slideshow />
      <ProductsContainer heading={heading1}/>
      <ProductsContainer heading={heading2}/>
      <Banner />
      <ProductsContainerMII heading={heading3}/>
      <ProductsContainer heading={heading4}/>
      <BrandContainer />
      <ProductsContainer heading={heading5}/>
      <ProductsContainer heading={heading6}/>
      <Footer />
    </div>
  )
}

export default Homepage
