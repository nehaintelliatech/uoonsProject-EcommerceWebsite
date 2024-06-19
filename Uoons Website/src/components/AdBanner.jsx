import React, { useState } from 'react'

const AdBanner = (props) => {
    const [type, settype] = useState(props.type)
  return (
    <>
    {type == 1?
        <div className='flex flex-col items-start border rounded-[16px] w-[350px] p-3 hover:shadow-2xl bg-white'>
            <h3 className='py-1 pb-2 text-2xl'>Level up your gaming</h3>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex gap-4'>
                    <div className='flex flex-col items-start'>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg" alt="" className='cursor-pointer w-[150px] object-contain'/>
                        <span className=' text-gray-500 text-sm'>Pc Gamming</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg" alt="" className='cursor-pointer w-[150px] object-contain'/>
                        <span className=' text-gray-500 text-sm'>Pc Gamming</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='flex flex-col items-start'>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg" alt="" className='cursor-pointer w-[150px] object-contain'/>
                        <span className=' text-gray-500 text-sm'>Pc Gamming</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_1x._SY116_CB558844445_.jpg" alt="" className='cursor-pointer w-[150px] object-contain'/>
                        <span className=' text-gray-500 text-sm'>Pc Gamming</span>
                    </div>
                </div>
            </div>
            <p className='cursor-pointer mt-2 text-blue-600'>Shop the latest in gaming</p>
        </div>
        :
        <div className='flex flex-col items-start border-gray-300 rounded-[16px] p-3 hover:shadow-2xl bg-white' style={{width: `${props.setType}`}}>
            <h3 className='py-1 pb-2 text-2xl'>Shop activity trackers and smartwatches</h3>
            <div className='flex flex-col items-center'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" alt="" />
            </div>
            <p className='cursor-pointer mt-2 text-blue-600'>Shop Now!</p>
        </div>

    }
    </>
  )
}

export default AdBanner
