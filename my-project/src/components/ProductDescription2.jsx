import React from 'react'
import { useState } from 'react';
import Header from './Header'
import ProductImage from './ProductImage'
// import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { PiClipboard } from 'react-icons/pi';
import { TbTruckReturn } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import EMI from '../assets/credit.png'
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FcShare } from "react-icons/fc";
import AdBanner from './AdBanner';
import CardContainer from './CardContainer';



const ProductDescription2 = (props) => {
    const [countQuantity, setcountQuantity] = useState(0)

    const increment = () => {
        setcountQuantity(countQuantity+1)
    }
    const decrement = () => {
        setcountQuantity(countQuantity-1)
    }
  const [heading2, setheading2] = useState("Similar Products")

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
        <Header/>

        <div className='bg-white flex w-[95%] justify-between items-start shadow-xl rounded-[16px] relative p-3 my-3'>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                    <div>
                        <ProductImage imgUrl={"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false"}/>
                    </div>
                    <div className='flex justify-center gap-2'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false" alt="" className='w-[70px] object-contain'/>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false" alt="" className='w-[70px] object-contain'/>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false" alt="" className='w-[70px] object-contain'/>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false" alt="" className='w-[70px] object-contain'/>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/g/h/y/medium-god-budhha-art-posters-gautam-buddha-hd-god-photo-original-imagp4btfeburhun.jpeg?q=90&crop=false" alt="" className='w-[70px] object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <button className='bg-white shadow-2xl rounded-full p-2 text-2xl border text-red-600'><FaRegHeart /></button>
                    <button className='bg-white shadow-2xl rounded-full p-2 text-2xl border '><FcShare /></button>
                    <button className='bg-white shadow-2xl rounded-full p-2 text-2xl border'><AiOutlineZoomIn /></button>
                </div>
            </div>

            <div className='bg-white rounded-[16px] border hover:shadow-2xl p-3 flex flex-col gap-6'>
                <p className=''>Apple</p>
                <h2 className='font-bold text-2xl'>2024 Apple 11-inch iPad Air M2 Wi-Fi 256GB - Blue</h2>

                <div className='flex items-center gap-1 justify-start'>
                <div className='flex text-xl gap-1'>
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarBorderPurple500 />
                </div>
                <p className='text-xl'>(4.0)</p>
                <p className=' text-blue-700 text-lg'>400 review</p>
                </div>
                <div className='flex gap-4'>
                    <span className='flex items-center text-sm'><TbTruckDelivery /> Free Shipping</span>
                    <span className='flex items-center text-sm'><TbTruckReturn /> Free 30-day returns</span>
                </div>
                <div className='border-t pt-4'>
                    <p className='text-2xl flex gap-1 items-end'>₹50,000<span className='line-through text-lg text-gray-500'>₹1,00,000</span></p>
                    <p className='text-green-600 text-2xl'>50% OFF</p>
                    <p>Inclusive of all taxes</p>
                    <div className='flex items-center'><img src={EMI} alt="" className='w-[1.3rem] object-contain'/><p className='text-sm'><span className='font-bold'>EMI</span> Available from ₹1209.91/- per month.</p></div>
                </div>

                <div className='border-t pt-4'>
                    <h2 className='flex items-center text-xl gap-1'><BiSolidOffer className='text-orange-600 text-2xl'/>OFFERS(12)</h2>
                    <ul>
                        <li className='flex items-center gap-1'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 250 Instant Discount on OneCard Credit Card Non-EMI Txn. Minimum purchase value ₹7,500</li>
                        <li className='flex items-center gap-1'><MdOutlineLocalOffer className='text-green-600 text-xl'/>10% Instant Discount up to INR 1500 on HSBC Credit Card Non EMI Trnxs. Minimum purchase value ₹15,000</li>
                        <li className='flex items-center gap-1'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 2750 Instant Discount on OneCard Credit Card EMI Txn. Minimum purchase value ₹1,00,000</li>
                        <li className='flex items-center gap-1'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Get GST invoice and save up to 28% on business purchases.</li>
                    </ul>
                    <button className='bg-green-600 hover:brightness-110 rounded-[16px] text-white px-[16px] hover:shadow-2xl'>See all!</button>

                </div>

                <div className='border-t pt-4'>
                    <h2>Size:</h2>
                    <div className='flex gap-2'>
                    <button className=' hover:brightness-110 rounded-[16px] text-black px-[16px] border hover:shadow-2xl flex flex-col items-center'><span>256GB</span><span></span>₹1,00,000</button>
                    <button className=' hover:brightness-110 rounded-[16px] text-black px-[16px] border hover:shadow-2xl flex flex-col items-center'><span>512GB</span><span></span>₹2,00,000</button>
                    <button className=' hover:brightness-110 rounded-[16px] text-black px-[16px] border hover:shadow-2xl flex flex-col items-center'><span>1TB</span><span></span>₹3,00,000</button>
                    <button className=' hover:brightness-110 rounded-[16px] text-black px-[16px] border hover:shadow-2xl flex flex-col items-center'><span>2Tb</span><span></span>₹4,00,000</button>
                    </div>
                </div>
                <div>
                    <h2>Color:</h2>
                    <div className='space-x-3'>
                    <button className=' rounded-[16px] text-black px-[16px] border hover:shadow-2xl p-1'><div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-red-600'></div></button>
                    <button className=' rounded-[16px] text-black px-[16px] border hover:shadow-2xl p-1'><div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-green-600'></div></button>
                    <button className=' rounded-[16px] text-black px-[16px] border hover:shadow-2xl p-1'><div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-blue-600'></div></button>
                    <button className=' rounded-[16px] text-black px-[16px] border hover:shadow-2xl p-1'><div className='w-[60px] h-[60px] rounded-full overflow-hidden bg-yellow-600'></div></button>
                    </div>
                </div>

                <p className='border-t pt-4 text-sm'>Sold and shipped by Uoons.com</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='border rounded-[16px] shadow-2xl p-3 flex flex-col gap-2 w-[300px] hover:shadow-2xl'>
                    <div className=''>
                        <p className='text-2xl flex gap-1 items-end'>₹50,000<span className='line-through text-lg text-gray-500'>₹1,00,000</span></p>
                        <p className='text-green-600 text-2xl'>50% OFF</p>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <p className='border-t pt-4'>Availability: <span className='text-green-600'>In Stock</span></p>
                    <div className='flex flex-col justify-center'>
                        <span className='flex items-center'><FaLocationDot className='text-green-600 text-xl'/>Delivering to Indore 452001 - </span>
                        
                        <span className=' text-blue-700 flex items-center'>Update location<MdModeEdit className='text-green-600 text-xl'/></span>
                    </div>

                    <div>
                        <h2>Set Quantity:</h2>
                        <div className="bg-white flex gap-2 rounded-[16px] ">
                        
                        {/* <!-- negative button --> */}
                        <button  onClick={decrement} className="p-1">
                            <FaMinus />
                        </button>
                        
                        
                        <div id="counter" className="font-bold border rounded-lg p-2">
                            {countQuantity}
                        </div>
                        
                        {/* <!-- positive button --> */}
                        <button onClick={increment} className="p-1">
                            <FaPlus />
                        </button>

                        </div>
                        <p className='text-red-600'>Only 8 Left in stock</p>
                    </div>

                    <div className='flex flex-col gap-4 border-t pt-4'>
                        <button className='bg-white hover:brightness-110 rounded-lg text-orange-600 border border-orange-600  shadow-2xl text-xl'>Add to Cart</button>
                        <button className='bg-orange-600 hover:brightness-110 rounded-lg text-white  shadow-2xl text-xl'>BUY NOW</button>

                    </div>
                    <p className='border-t pt-4 text-sm'>Sold and shipped by Uoons.com</p>

                    </div>
                    <AdBanner type={2} width={"300px"}/>

                </div>
            </div>

            <div className='w-[95%] flex flex-col items-center relative'>
                <div className=" flex w-full justify-between items-center">
                    <CardContainer productDataList={productDataList} heading={heading2}/>
                    <AdBanner type={2} width={"350px"}/>
                </div>
            </div>
        
   
    </>
    
  )
}

export default ProductDescription2
