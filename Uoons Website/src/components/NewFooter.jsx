import React from 'react'
import logo from '../assets/Logo/uoonsLogo_Full.png'
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
        <div className='w-3/4 border border-gray-300 mb-8'></div>
        
        <div className='w-[95%] flex flex-wrap gap-16 justify-center pt-8'>
          <div className='flex flex-col basis-1/4 grow justify-center'>
            <h2>ABOUT US</h2>
            <ul>
              <li>Our Story</li>
              <li>Sustainability Commitment</li>
              <li>Careers</li>
              <li>Press & Media</li>
            </ul>
          </div>
          <div className='flex flex-col basis-1/4 grow justify-center'>
            <h2>CUSTOMER SERVICE</h2>
            <ul>
              <li>Size Guide</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='flex flex-col basis-1/4 grow justify-center'>
            <h2>ACCOUNT & ORDERS</h2>
            <ul>
              <li>Order Tracking</li>
              <li>Manage Account</li>
              <li>Gift Cards</li>
              <li>Wishlist</li>
            </ul>
          </div>
          <div className='flex flex-col basis-1/4 grow justify-center'>
            <h2>SPECIAL PROGRAMS</h2>
            <ul>
              <li>Loyalty Program</li>
              <li>Student Discount</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div className='flex flex-col basis-1/4 grow justify-center'>
            <h2>LEGAL & PRIVACY</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className='flex flex-col basis-1/4 grow'>
            <h2>RESOURCES</h2>
            <ul>
              <li>Style Guide</li>
              <li>Blog</li>
              <li>Store Locator</li>
              <li>Site Map</li>
            </ul>
          </div>
        </div>

        <div className='w-full flex flex-col items-center mt-8 mb-4'>
          <h2>GET SPECIAL OFFERS IN OUR NEWSLETTER</h2>
          <div className='flex mt-2'>
            <input type='email' placeholder='Enter your email' className='border p-2' />
            <button className='bg-orange-500 text-white p-2'>Sign Up</button>
          </div>
        </div>

        <div className='w-[96%] flex justify-between items-center my-3'>
          <div className='flex w-fit'>
            <img src={playStore} alt="Google Play" className='w-[185px] object-contain' />
          </div>
          <div className='w-fit text-orange-600'>
            <span>care@uoons.com</span>
          </div>
          <div className='flex w-fit gap-4'>
            <img src={whatsapp} alt="WhatsApp" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
            <img src={insta} alt="Instagram" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
            <img src={twitter} alt="Twitter" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
            <img src={youtube} alt="YouTube" className='w-[45px] object-contain cursor-pointer hover:brightness-110' />
          </div>
        </div>

        <div className='w-3/4 border border-gray-300 mt-4'></div>

        <div className='flex justify-center w-full items-center gap-1 py-3'>
          <span>© 2024 Teak. All rights reserved.</span>
        </div>
      </div>
    </>
  )
}

export default NewFooter