import React from 'react'
import { useState, useRef } from 'react';
import BrandCard from './BrandCard'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const ShopByBrand = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
  // Calculate the new scroll position
  const newScrollPosition = scrollPosition + scrollAmount;

  // Update the state with the new scroll position
  setScrollPosition(newScrollPosition);

  // Access the container element and set its scrollLeft property
  containerRef.current.scrollLeft = newScrollPosition;
  };
  return (
    <div className='bg-[#f3f6ff] flex flex-col w-[95%] items-center shadow-xl rounded-[16px] relative my-6'>
      <div className='flex w-full justify-between my-5'>
        <h1 className='text-[30px] font-bold ml-2'>Shop by Brand</h1>
        <div>
          <button className='bg-orange-200 rounded-lg p-1 flex gap-1 items-center'>view all <FaArrowRight /></button>
        </div>
      </div>


      {/* <div className='flex justify-evenly gap-10 items-center w-[90%] overflow-hidden'> */}
      <div ref={containerRef} className='w-[100%] overflow-x-scroll scroll-smooth '>

        <div className='content-box w-fit flex items-center gap-12 p-5'>
            {[1,2,3,4,5,6,7,8].map((item)=>{
              return <BrandCard key={item}/>
            })}
        </div>
      </div>

      
        <button className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-[#f3f6ff] text-orange-600 rounded-full left-[-40px] top-[47%]" onClick={() => handleScroll(-200)}><MdOutlineKeyboardArrowLeft /></button>
        <button className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-[#f3f6ff] text-orange-600 rounded-full right-[-40px] top-[47%]" onClick={() => handleScroll(200)}><MdOutlineKeyboardArrowRight /></button>
      

      
    </div>
  )
}

export default ShopByBrand
