import React from 'react'
import { useState, useRef } from 'react';
import Card from './Card'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const CardContainer = (props) => {
  const [product, setproduct] = useState(props.product)
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
    <div className='bg-white flex flex-col w-[77%] items-center shadow-xl rounded-[16px] relative p-2 my-3'>
      <div className='flex w-full justify-between items-center px-2'>
        
        <h1 className='text-[30px] font-bold'>{props.heading}</h1>
        <div>
          <button className='bg-orange-300 rounded-[16px] p-1 px-2 flex gap-1 items-center hover:brightness-95'>view all <FaArrowRight /></button>
        </div>
      </div>


      <div ref={containerRef} className='w-[99%] overflow-x-scroll scroll-smooth '>

        <div className='content-box w-fit flex items-center gap-12 p-5'>
            {[1,2,3,4,5,6,7,8,9,10,11].map((item)=>{
              return <Card key={item} product={product}/>
            })}
        </div>
      </div>

      
        <button className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-blue-100 text-orange-600 rounded-full left-[-32px] top-[47%]" onClick={() => handleScroll(-300)}><MdOutlineKeyboardArrowLeft /></button>
        <button className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-blue-100 text-orange-600 rounded-full right-[-32px] top-[47%]" onClick={() => handleScroll(300)}><MdOutlineKeyboardArrowRight /></button>
      

      
    </div>

  )
}

export default CardContainer
