import React from 'react'
import CategoriesCard from './CategoriesCard'
import { FaArrowRight } from "react-icons/fa";


const CategoriesContainer = () => {
  return (
    <div className='bg-white flex flex-col w-[78%] items-center shadow-xl rounded-[16px] relative p-3 my-3'>
      <div className='flex w-full justify-between items-center px-2'>
        
        <h1 className='text-[30px] font-bold'>Top categories!</h1>
        <div>
          <button className='bg-orange-300 rounded-[16px] p-1 px-2 flex gap-1 items-center hover:brightness-95'>view all <FaArrowRight /></button>
        </div>
      </div>


      <div className='w-[99%] overflow-x-scroll scroll-smooth '>

      
      <div className='content-box w-fit flex flex-wrap items-center gap-12 p-5'>
            
            {[1,2,3,4,5,6,7,8,9,10].map((item)=>{
              return <CategoriesCard key={item}/>
            })}
        </div>
        
      </div>
      
    </div>
  )
}

export default CategoriesContainer
