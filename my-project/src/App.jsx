import { useState } from 'react'
import Header from './components/Header'
import SlideShow from './components/SlideShow'
import CardContainer from './components/CardContainer'
import ad1 from './assets/ad1.jpg'
import AdSection from './components/AdSection'
import ProductAdContainer from './components/ProductAdContainer'
import AdBanner from './components/AdBanner'
import ShopByBrand from './components/ShopByBrand'

import CategoriesContainer from './components/CategoriesContainer'
import CardContainer2 from './components/CardContainer2'

import ad4 from './assets/ad333.jpg'
import NewFooter from './components/NewFooter'

import PopUP from './components/PopUP'



function App() {
  const [heading1, setheading1] = useState("Deal of The Day!")
  const [heading2, setheading2] = useState("New Arrival")
  const [heading3, setheading3] = useState("Made in India")
  const [heading4, setheading4] = useState("Recently viewed!")
  const [heading6, setheading6] = useState("Best Seller1")
  const [heading7, setheading7] = useState("SmartPhones & Tablets")

  const [productDataList, setProductDataList] = useState([
    {
        id: 1,
        // image: require("../assets/itemImage/Shivji1.jpg").default,
        title:"Water Sensor shivling Smokeless Sensor LED Light (Pack of 2) for Indoor and Outdoor Festival Decoration Light (Black & Red) SHIVLING Water Sensor",
        price:"₹399",
        offerPrice:"₹95",
    },

    {
        id: 2,
        // image: require("../assets/itemImage/Chromton_electrode2.jpg").default,
        title:"CROMPTON ELECTRIC HEATER ( IMMERSION ROD ) 1000WATT 2 YEAR WARRANTY",
        price:"₹950",
        offerPrice:"₹650",
    },

    {
        id: 3,
        // image: require("../assets/itemImage/Halonix_primeD3.jpg").default,
        title:"HALONIX PRIME DJ SPEAKER BULB SOUND + COLORFUL LIGHT 9 WATT LED BULB 1 YEAR WARRANTY",
        price:"₹1000",
        offerPrice:"₹850",
    },

    {
        id: 4,
        // image: require("../assets/itemImage/Mixer_grinder4.jpg").default,
        title:"ECONOMICAL MINI Domestic Mixer Grinding Machine 3 Stainless Steel Jars with 500 Watts Motor Champ",
        price:"₹2899",
        offerPrice:"₹1899",
    },

    {
        id: 5,
        // image: require("../assets/itemImage/Mounted_chimneyWall5.jpg").default,
        title:"Hindware Marvia 60 Auto Clean Chimney Wall Mounted Chimney",
        price:"₹13490",
        offerPrice:"₹7800",
    },

    {
        id: 6,
        // image: require("../assets/itemImage/Build_in_oven6.jpeg").default,
        title:"The Hindware Orcus 80L Built-In Oven: Elevate Your Culinary Creations",
        price:"₹59990",
        offerPrice:"₹53000",
    },

    {
        id: 7,
        // image: require("../assets/itemImage/Ring_light7.png").default,
        title:"Ring Light, for Photo and Video with 7 Feet Tripod Stand Compatible with Camera and Smartphones (10 Inch LED Ring Light)",
        price:"₹2999",
        offerPrice:"₹799",
    },

    {
        id: 8,
        // image: require("../assets/itemImage/Washing_machine8.jpg").default,
        title:"Haier 6.5 kg Fully-Automatic Top Loading Washing Machine HWM65-707NZP (Silver Grey)",
        price:"₹21200",
        offerPrice:"₹18100",
    },

    {
        id: 9,
        // image: require("../assets/itemImage/Micro_usb9.jpg").default,
        title:"Smart Micro USB OTG Adapter (Pack of 2) Multi color, Available with Prepaid order only",
        price:"₹125",
        offerPrice:"₹12",
    },

    {
        id: 10,
        // image: require("../assets/itemImage/Nano_drone10.jpg").default,
        title:"Denzcart Spike 10 min Fly Time| 50m Range | Non-Camera Nano Drone",
        price:"₹14599",
        offerPrice:"₹9999",
    },

    {
        id: 11,
        // image: require("../assets/itemImage/Hair_straightener11.jpg").default,
        title:"Kemei KM-329 Professional Hair Straightener 40W (Multicolour) -1 pcs",
        price:"₹899",
        offerPrice:"₹399",
    },

    {
        id: 12,
        // image: require("../assets/itemImage/Gaming_Headset12.jpg").default,
        title:"ANT ESPORTS H707 HD RGB LED GAMING HEADSET",
        price:"₹1610",
        offerPrice:"₹1279",
    },

    
   
])

  return (
    <>
      <div className='w-[95%] flex flex-col items-center relative'>
        <Header />
        <SlideShow />
        <div className=" flex w-full justify-between items-center dealOfTheDay">
          <CardContainer productDataList={productDataList} heading={heading1}/>
          <div className='rounded-[16px] overflow-hidden flex justify-center'><img className='w-[350px] h-[394px] object-cover' src={ad1} alt="" /></div>
        </div>
        <AdSection />

        <ProductAdContainer rr={1} />

      <div className=" flex w-full justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading2}/>
        <AdBanner type={2}/>
      </div>

        <ShopByBrand />

      <div className=" flex w-full justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading3}/>
        <div className='rounded-[16px] overflow-hidden flex justify-center'><img className='w-[350px] h-[394px] object-cover' src={ad1} alt="" /></div>
      </div>

      <div className=' flex w-full justify-between items-center'>
        <CategoriesContainer />
        <div className=''><img src={ad4} alt="" /></div>
      </div>

      <div className='w-full h-[570px] startupInd rounded-[16px] overflow-hidden flex justify-center relative my-3'>

        <CardContainer2 productDataList={productDataList}/>

      </div>

      <div className=" flex w-full justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading4}/>
        <AdBanner type={2}/>
      </div>

      <ProductAdContainer rr={1} />

      <div className=" flex w-full justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading6}/>
        <AdBanner type={2}/>
      </div>
      <div className=" flex w-full justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading7}/>
        <AdBanner type={2}/>
      </div>

      <ProductAdContainer rr={2} />





      </div>

      <NewFooter />

    </>
  )
}

export default App
