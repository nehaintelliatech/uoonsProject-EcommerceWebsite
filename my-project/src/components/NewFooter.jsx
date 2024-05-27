import React from 'react'
import logo from '../assets/logo/uoonsLogo.png'
import whatsapp from '../assets/whatsapp.png'
import insta from '../assets/Insta.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/Youtube.png'
import playStore from '../assets/google-play-badge.png'
import { FaRegCopyright } from "react-icons/fa6";


const NewFooter = () => {
  return (
    <>
    <div className='w-screen bg-white p-2 flex flex-col items-center pt-12'>
      <div className='border w-3/4 border-blue-700'></div>


        <div className='w-[95%] flex gap-16 justify-center pt-8'>
            <div className='basis-1/4	grow'>
                <img src={logo} alt="" />
                <p>Registered Office Address:<br />
                171 Devi Ahilya Marg, GFL 12, Jail Road, Indore - 452007,Madhya Pradesh,India.<br/>
                Email: care@uoons.com<br />
                Please Note that you are accessing the BETA version of www.uoons.com<br />
                Should you encounter any bugs, lack of functionality, glitches, delayed deliveries, billing errors or any others problems on this beta website, please write to us on care@uoons.com
                </p>
            </div>
            <div className='basis-1/4	grow'>
                <h2>INFORMATION</h2>
                <ul>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & condition</li>
                    <li>FAQ</li>
                    <li>Returns</li>
                    <li>Gift Certificates</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='basis-1/4	grow'>
                <h2>MY ACCOUNT</h2>
                <ul>
                    <li>User Profile</li>
                    <li>Order History</li>
                    <li>Wish List</li>
                    <li>Newsletter</li>
                    <li>Affiliate</li>
                    <li>International Orders</li>
                </ul>
            </div>
            <div className='basis-1/4	grow'>
                <h2>Services</h2>
                <ul>
                    <li>Franchise</li>
                    <li>Kiosk</li>
                    <li>Phone Repairaing</li>
                    <li>Sales & Services</li>
                </ul>
            </div>
            {/* <div className='flex flex-col basis-1/4 grow'>
                <h2>CONNECT WITH US</h2>
                <div className='w-[45px] object-contain flex flex-col gap-4'>
                    <img src={whatsapp} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div> */}

        </div>

        <div className='w-[96%] flex justify-between items-center my-3'>
            
            <div className='flex w-fit'>
                <img src={playStore} alt="" className='w-[185px] object-contain' />
            </div>
            <div className=' w-fit text-orange-600'>
                <span>care@uoons.com</span>
            </div>
            <div className='flex w-fit gap-4'>
                <img src={whatsapp} alt="" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
                <img src={insta} alt="" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
                <img src={twitter} alt="" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
                <img src={youtube} alt="" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
            </div>
        </div>

      <div className='border w-3/4 border-blue-700'></div>

      <div className='flex justify-center w-full items-center gap-1 py-3'>
            Copyright<FaRegCopyright className='inline'/> UOONS All Right Reserved.
        </div>
    </div>
    </>
  )
}

export default NewFooter
