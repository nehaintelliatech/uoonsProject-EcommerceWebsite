import React from 'react'
import AdBanner from './AdBanner'

const ProductAdContainer = (props) => {
  return (
    <>
    {props.rr ==1?
      <div className='bg-white flex justify-between w-full items-center shadow-xl rounded-[16px] relative p-3 my-3'>
        <AdBanner type={1}/>
        <AdBanner type={2}/>
        <AdBanner type={1}/>
        <AdBanner type={2}/>
        <AdBanner type={1}/>

        {/* <AdBanner type={2}/> */}

      
    </div>
      :
      <div className='bg-white flex justify-between w-full items-center shadow-xl rounded-[16px] relative p-3 my-3'>
          <div className='flex flex-col items-start border rounded-[16px]  p-3 hover:shadow-2xl bg-white'>
              <h3 className='py-1 pb-2 text-2xl'>Shop activity trackers and smartwatches</h3>
              <div className='flex flex-col items-center'>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" alt="" />
              </div>
              <p className='cursor-pointer mt-2 text-blue-600'>Shop Now!</p>
          </div>
          <div className='flex flex-col items-start border rounded-[16px]  p-3 hover:shadow-2xl bg-white'>
          <h3 className='py-1 pb-2 text-2xl'>Shop activity trackers and smartwatches</h3>
          <div className='flex flex-col items-center'>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" alt="" />
          </div>
          <p className='cursor-pointer mt-2 text-blue-600'>Shop Now!</p>
        </div>
      </div>
    }
    </>
    
  )
}

export default ProductAdContainer
