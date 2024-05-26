import React from 'react'
import AdBanner from './AdBanner'

const ProductAdContainer = () => {
  return (
    <div className='bg-white flex justify-between w-full items-center shadow-xl rounded-[16px] relative p-3 my-3'>
        <AdBanner type={1}/>
        <AdBanner type={2}/>
        <AdBanner type={1}/>
        <AdBanner type={2}/>
        <AdBanner type={1}/>

        {/* <AdBanner type={2}/> */}

      
    </div>
  )
}

export default ProductAdContainer
