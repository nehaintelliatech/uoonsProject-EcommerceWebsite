import React from 'react'
import Header from '../components/Header'
import { TbCategory } from "react-icons/tb";
import TopOfferImage from '../assets/TopOffer.webp'

const CategoriesPage = () => {
  return (
    <div>
        <Header />

        <div className='bg-white border w-screen flex'>
            <div className='flex justify-center items-center text-2xl w-[300px] border-r-2'>
                <TbCategory />
                <h1>Categorise</h1>
            </div>
            <div className='flex gap-20 ml-20 text-sm'>
                <div className='flex flex-col items-center'>
                    <img src={TopOfferImage} alt="" className='w-[64px] object-contain'/>
                    <p>Top Offer</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={TopOfferImage} alt="" className='w-[64px] object-contain'/>
                    <p>Top Offer</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={TopOfferImage} alt="" className='w-[64px] object-contain'/>
                    <p>Top Offer</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={TopOfferImage} alt="" className='w-[64px] object-contain'/>
                    <p>Top Offer</p>
                </div>
                
            </div>
        </div>

        <div className='w-[95%] flex bg-blue-100'>
            <div className='flex flex-col items-center gap-10 w-[360px] self-start'>
                <button className='bg-white shadow-xl hover:shadow-2xl border rounded-2xl p-2 text-2xl'>Audio</button>
            </div>
            <div className='w-full'>
                <div className='h-[500px] bg-grey'></div>
            </div>
        </div>
      
    </div>
  )
}

export default CategoriesPage
