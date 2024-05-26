import React from 'react'
import img from '../assets/uoonsAdnew.png'

const AdSection = () => {
  return (
    <div className='flex justify-between items-center w-full p-3 bg-white rounded-[16px] my-3'>
      <div>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-[300px] rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-[300px] rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div>
        <img src={img} alt="Ad" className='w-[300px] rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-[300px] rounded-[16px] object-contain cursor-pointer' />
      </div>
      <div>
        <img src="https://uoons.com/assets/slider/863f739c221c80ac626bbcec7aebe7f9.png" alt="Ad" className='w-[300px] rounded-[16px] object-contain cursor-pointer' />
      </div>
      
    </div>
  )
}

export default AdSection
