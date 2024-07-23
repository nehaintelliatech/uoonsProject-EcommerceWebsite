import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import './SponsoredProductCard.css';

function SponsoredProductCard({ data }) {
  const [discount, setDiscount] = useState("0%");

  useEffect(() => {
    const discountPercentage = Math.round(((parseInt(data.product_sale_price) / parseInt(data.product_price)) * 100));
    setDiscount((100 - discountPercentage).toFixed(2) + "% off");
  }, [data]);

  return (
    <div className='SponsoredCard h-[300px] w-[221px] bg-yellow-50 p-3 flex flex-col items-center justify-start border rounded-[16px] overflow-hidden hover:shadow-2xl relative'>

      <div className='mainCardContent flex flex-col h-[300px] justify-start items-center overflow-hidden'>
        <div className='w-[175px] h-[165px] relative rounded-[16px]'>
          <img src={data.product_images} className='h-[165px] object-contain' alt={data.product_name} />
          <button className='Like-button absolute p-2 rounded-full bg-orange-600 text-white hover:text-red-500 hover:bg-white top-[-50px] right-[14px] text-xl duration-500'><FaHeart /></button>
        </div>
        <div className='shrinkIt w-[195px] overflow-hidden h-[40px] text-sm'>{data.product_name}</div>
        <div className='flex flex-col justify-end items-center'>
          <div>
            <span className='text-2xl'>{data.product_sale_price}</span>
            <span className='line-through text-gray-500'>{data.product_price}</span>
          </div>
          <span className='text-green-600'>{discount}</span>
        </div>
        <span className='text-xs text-red-500'>Sponsored</span>
      </div>

      <div className='buy-now flex absolute bottom-[-100px] duration-500 gap-3'>
        <button className='rounded-full p-2 text-xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><GrCart /></button>
        <button className='bg-orange-600 hover:brightness-110 rounded-[16px] text-white px-[16px] hover:shadow-2xl'>BUY NOW</button>
      </div>

    </div>
  );
}

export default SponsoredProductCard;
