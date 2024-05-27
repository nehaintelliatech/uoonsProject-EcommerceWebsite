import React from 'react'
import img from '../assets/product.jpeg'


const CategoriesCard = () => {
  return (
    <div className='bg-white p-3 border border-white rounded-full overflow-hidden hover:shadow-2xl flex flex-col items-center'>
    <div className='rounded-full overflow-hidden flex flex-col items-center'>
      <img src={img} alt="" className='w-[155px] object-contain'/>
    </div>
    <span>Audio</span>
    </div>
  )
}

export default CategoriesCard
