import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slideshow from './components/Slideshow'
import CardContainer from './components/CardContainer'
import ad1 from './assets/Special weekend.jpg'
import ad3 from './assets/ad222.jpg'
import ad4 from './assets/ad333.jpg'
import ShopByBrand from './components/ShopByBrand'
import AdsSection from './components/AdsSection'
import NewFooter from './components/NewFooter'
import CardContainer3 from './components/CardContainer3'
import CategoriesContainer from './components/CategoriesContainer'
import CardContainer4 from './components/CardContainer4'
import CardContainer5 from './components/CardContainer5'

function App() {
    const [heading1, setheading1] = useState("Deal of The Day!")
    const [heading2, setheading2] = useState("New Arrival")
    const [heading3, setheading3] = useState("Made in India")
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
const [first, setfirst] = useState("Featured Products!")
const [firsttt, setfirsttt] = useState("New Arrival")

  return (
    <>
    <div className='flex flex-col w-full items-center'>
      <Header />
      {/* <Navbar /> */}
      <Slideshow />
      <div className=" flex w-[95%] justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading1}/>
        <div className='rounded-[16px] overflow-hidden flex items-center'><img className='w-[320px] object-cover' src={ad1} alt="" /></div>
      </div>

      <AdsSection />

      <div className=" flex w-[95%] justify-between items-center">
        <CardContainer productDataList={productDataList} heading={heading2}/>
        <div className='w-[320px] h-[420px] p-2 rounded-[16px] flex flex-col justify-between bg-[#f3f6ff]'>
            <h2 className='text-2xl'>Shop activity trackers and smartwatches</h2>
            <img className='w-[full] object-cover' src={ad3} alt="" />
            <span className='text-blue-700 hover:underline cursor-pointer'>Shop Now!</span>
        </div>
      </div>
      
        <ShopByBrand />

    <div className=" flex w-[95%] justify-between items-center">
        <CardContainer3 productDataList={productDataList} heading={heading3}/>
        <div className='rounded-[16px] flex items-center overflow-hidden cursor-pointer'><img className='w-[320px] object-cover' src={ad1} alt="" /></div>
    </div>

    <div className=' flex w-[95%] justify-between items-center my-4'>
        <CategoriesContainer />
        <div className='w-[42%] rounded-[16px] flex items-center overflow-hidden'><img className='w-full h-[555px] object-cover' src={ad4} alt="" /></div>
    </div>

    <div className='w-[95%] h-[570px] startupInd rounded-[16px] overflow-hidden flex justify-center'>

        <CardContainer4 productDataList={productDataList} heading={heading2}/>

    </div>

    {/* 3 card */}
    <div className=" flex w-[95%] justify-between items-center">
        <CardContainer5 productDataList={productDataList} />
    </div>

    </div>
    {/* <Footer /> */}
    <NewFooter />
    </>
  )
}

export default App
