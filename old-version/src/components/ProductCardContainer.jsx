import React, { useState, useRef } from 'react';
import ProductCard from './ProductCard';
import SponsoredProductCard from './SponsoredProductCard';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const ProductCardContainer = ({ heading, products }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className='bg-white flex flex-col w-[95%] items-center shadow-xl rounded-2xl relative p-2 my-5 mx-auto'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='text-[30px] font-bold'>{heading}</h1>
        <div>
          <button className='bg-orange-400 rounded-[16px] p-1 px-2 flex gap-1 items-center hover:brightness-95'>
            view all <FaArrowRight />
          </button>
        </div>
      </div>

      <div ref={containerRef} className='w-[99%] overflow-x-scroll scroll-smooth'>
        <div className='content-box w-fit flex items-center gap-12 p-5'>
          {products.map((product, index) => {
            if (index === 2) {
              return <SponsoredProductCard key={product.pid} data={product} />;
            } else {
              return <ProductCard key={product.pid} data={product} />;
            }
          })}
        </div>
      </div>

      <button
        className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-blue-100 text-orange-600 rounded-full left-[-37px] top-[47%]"
        onClick={() => handleScroll(-300)}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button
        className="absolute p-[0.4rem] text-[3rem] border-[5px] border-white bg-blue-100 text-orange-600 rounded-full right-[-37px] top-[47%]"
        onClick={() => handleScroll(300)}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default ProductCardContainer;
