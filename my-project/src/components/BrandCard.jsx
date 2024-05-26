import React from 'react'
import img from '../assets/cannon.png'

const BrandCard = () => {
  return (
    <div className='Card p-3 flex flex-col items-center justify-start border rounded-[16px] overflow-hidden hover:shadow-2xl relative'>

        <div className='flex flex-col justify-start items-center overflow-hidden'>
            {/* <img src={data.image} alt="" /> */}
            <div className=' flex items-center justify-center relative rounded-lg likeHover'>
            <img src={img} alt="sample-product-image" className='' />
            </div>
        </div>
    </div>
  )
}

export default BrandCard
