import React from 'react';
import img from '../assets/uoonsAdnew.png';

const BrandAdSection = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 items-center w-[95%] mx-auto p-2 bg-white rounded-2xl my-5'>
      <div className='w-[300px] p-2'>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-full rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div className='w-[300px] p-2'>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-full rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div className='w-[300px] p-2'>
        <img src={img} alt="Ad" className='w-full rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div className='w-[300px] p-2'>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-full rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div className='w-[300px] p-2'>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-full rounded-[16px] object-contain cursor-pointer' />
      </div>
    </div>
  );
}

export default BrandAdSection;
