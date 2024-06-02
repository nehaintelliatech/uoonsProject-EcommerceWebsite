import React from 'react'
import { useRef, useState } from 'react'
import Header from './Header'
import NewFooter from './NewFooter'
import Sample from '../assets/productImageSample.jpg'
import SampleA from '../assets/productImageSample2.jpg'
import SampleB from '../assets/productImageSample3.jpg'
import SampleC from '../assets/productImageSample4.jpg'
import SampleD from '../assets/productImageSample5.jpg'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GrCart } from "react-icons/gr";


const ProductDescription = () => {
    const mainImg = useRef()
    function changeImage(e){
        mainImg.current.src = e.current.src;
    }
    const [countQuantity, setcountQuantity] = useState(0)

    const increment = () => {
        setcountQuantity(countQuantity+1)
    }
    const decrement = () => {
        setcountQuantity(countQuantity-1)
    }
  return (
    <>
    <Header/>
   
   {/* main-product-description */}
    <div className='bg-white flex justify-center w-[95%] shadow-xl rounded-[16px] relative p-3 my-3'>

        {/* product-image */}
        <div className='flex'>

            {/* image-catelogue */}
            <div className='flex flex-col gap-3'>
                <div className='rounded-[16px] overflow-hidden ' >
                    <img src={Sample} alt="" onClick={changeImage} className='w-[50px] object-contain '/>
                </div>
                <div className='rounded-[16px] overflow-hidden' >
                    <img src={SampleA} alt=""  onClick={changeImage} className='w-[50px] object-contain '/>
                </div>
                <div className='rounded-[16px] overflow-hidden' >
                    <img src={SampleB} alt=""  onClick={changeImage} className='w-[50px] object-contain '/>
                </div>
                <div className='rounded-[16px] overflow-hidden' >
                    <img src={SampleC} alt=""  onClick={changeImage} className='w-[50px] object-contain '/>
                </div>
                <div className='rounded-[16px] overflow-hidden' >
                    <img src={SampleD} alt=""  onClick={changeImage} className='w-[50px] object-contain '/>
                </div>
                    
                   

            </div>

            {/* main-image */}
            <div >
                <img src={Sample} alt=""  ref={mainImg}/>
            </div>
        </div>

        {/* product-description */}
        <div className='w-[50%] flex flex-col gap-1 ml-10'>
            <p className='text-blue-700 hover:underline'>NUBWO</p>
            <h1 className='text-2xl'>NUBWO G06 Dual Wireless Gaming Headset with Microphone for PS5, PS4, PC, Mobile, Switch: 2.4GHz Wireless + Bluetooth - 100 Hr Battery - 50mm Drivers - Orange</h1>
            <p className='text-blue-700 hover:underline'>visit the Brand-Store</p>
            
            <p className='text-2xl'>Offer Price: <span className=' text-orange-600'>3,500 Rs</span></p>

            <div className='flex items-center text-2xl text-orange-600 gap-2'>
                <p>4.0</p>
                <div className='flex '>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarOutline />
                </div>
                <span className='text-blue-700 hover:underline text-lg'> 9,970 ratings</span>

            </div>

            <p className='flex items-center text-xl'>Availability : <span className='text-green-600 flex items-center gap-1'> In Stock <FaCheck /></span></p>
        </div>

        {/* buy-the-product */}
        <div className=' bg-white p-2 flex flex-col items-start border rounded-[16px] overflow-hidden shadow-2xl relative w-[15%] gap-3'>
            <p className='text-2xl'>Offer Price: <span>3,500 Rs</span></p>

            <p>
                Ships from: uoons.com<br />
                Sold by: uoons.com
            </p>

            <div className='flex items-center text-green-600'>
                <TiLocationOutline />Deliver to India
            </div>
            
            <div>
                <h1>Quantity</h1>
                <div className="bg-white-600 flex text-black rounded-[16px] gap-12 p-3 px-5">
                
                {/* <!-- negative button --> */}
                <button  onClick={decrement} className="border-r-2 border-black pr-5">
                    <FaMinus />
                </button>
                
                
                <div id="counter" className="font-bold">
                    {countQuantity}
                </div>
                
                {/* <!-- positive button --> */}
                <button onClick={increment} className="border-l-2 border-black pl-5">
                    <FaPlus />
                </button>

                </div>
                <p className='text-red-600'>Only 8 Left in stock</p>
            </div>

            

            <div className='flex flex-col pt-4 w-full text-xl gap-4'>
                

                <button className='bg-orange-600 hover:brightness-110 rounded-[16px] text-white px-[16px] hover:shadow-2xl py-3 flex justify-center items-center gap-2'><GrCart /> ADD TO CART</button>
                <button className='bg-orange-600 hover:brightness-110 rounded-[16px] text-white px-[16px] hover:shadow-2xl py-3'>BUY NOW</button>

            </div>

            <div>
            Features & Benefits
            <ul className='list-disc'>
                <li>Immersive surround sound</li>
                <li>Immersive surround sound</li>
                <li>Immersive surround sound</li>
                <li>Immersive surround sound</li>
            </ul>
            </div>
        </div>
       
    </div>
    </>
    
  )
}

export default ProductDescription
