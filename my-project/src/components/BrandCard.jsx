import React from 'react'
import img from '../assets/cannon.png'

const BrandCard = () => {
  return (
    <div className='Card p-3 flex flex-col items-center justify-start border rounded-[16px] overflow-hidden hover:shadow-2xl relative'> 
      <div className=' flex items-center justify-center rounded-full overflow-hidden'>
      <img src={img} alt="sample-product-image" className='' />
      </div>
    </div>
  )
}

export default BrandCard
