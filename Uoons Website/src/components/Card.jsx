import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import './Card.css'





function Card(props) {
  const [product, setproduct] = useState(props.product)
  const [discount, setdiscount] = useState("0%")
  // useEffect(() => {
  //   const discountPercentage = Math.round(parseInt(product.price.substr(1))/ parseInt(data.price.substr(1)) * 100)
  //    setdiscount(discountPercentage.toString()+"%" +" off")
  // },)
  
  return (
    <div className='Card h-[300px] bg-white p-3 flex flex-col items-center justify-start border rounded-[16px] overflow-hidden hover:shadow-2xl relative'>

      <div className='mainCardContent flex flex-col h-[300px] justify-start items-center overflow-hidden'>
        {/* <img src={data.image} alt="" /> */}
        <div className=' w-[175px] h-[165px] relative rounded-[16px]'>
            <img src={product.images[0]} className='h-[165px] object-contain' />
            <button className='Like-button absolute p-2 rounded-full bg-orange-600 text-white hover:text-red-500 hover:bg-white top-[-50px] right-[14px] text-xl duration-500'><FaHeart /></button>
        </div>
        <div className='shrinkIt w-[195px] overflow-hidden h-[40px] text-sm'>{product.name}</div>

        <div className='flex flex-col justify-end items-center'>
            <div>
                <span className='text-2xl'>{product.price}</span>
                <span className='line-through text-gray-500'>{product.originalPrice}</span>
            </div>
            <span className='text-green-600'>{product.discount}% off</span>
        </div>

      </div>
      
      <div className='buy-now flex absolute bottom-[-100px] duration-500 gap-3'>
        <button className='rounded-full p-2 text-xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><GrCart /></button>
        {/* <PiLineVertical /> */}
        <button className='bg-orange-600 hover:brightness-110 rounded-[16px] text-white px-[16px] hover:shadow-2xl'>BUY NOW</button>
      </div>

    </div>
  )
}

export default Card
