import React from 'react';
import logo from '../assets/Logo/uoonsLogo_Full.png';
import whatsapp from '../assets/whatsapp.png';
import insta from '../assets/Insta.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/Youtube.png';
import playStore from '../assets/google-play-badge.png';
import { FaRegCopyright } from "react-icons/fa6";
import { FiTruck, FiPhone, FiMessageCircle, FiGift } from "react-icons/fi";

const NewFooter1 = () => {
  return (
    <footer className='w-screen bg-white text-gray-800 p-8 flex flex-col items-center'>
      <div className='border-t border-gray-300 w-full'></div>

      <div className='w-full flex flex-wrap gap-16 justify-center py-8'>
        <div className='w-full md:w-1/4 flex flex-col items-center text-center'>
          <img src={logo} alt="Uoons Logo" className='mb-4' />
          <p className='text-sm'>
            <strong>Registered Office Address:</strong><br />
            171 Devi Ahilya Marg, GFL 12, Jail Road, Indore - 452007, Madhya Pradesh, India.<br/>
            Email: <a href="mailto:care@uoons.com" className="text-blue-600 hover:underline">care@uoons.com</a><br />
            Please note that you are accessing the BETA version of www.uoons.com. Should you encounter any bugs, lack of functionality, glitches, delayed deliveries, billing errors, or any other problems on this beta website, please write to us at <a href="mailto:care@uoons.com" className="text-blue-600 hover:underline">care@uoons.com</a>.
          </p>
        </div>

        <div className='w-full md:w-1/4'>
          <h2 className='font-bold text-lg mb-4'>INFORMATION</h2>
          <ul>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
            <li><a href="#privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
            <li><a href="#returns" className="text-gray-600 hover:text-blue-600">Returns</a></li>
            <li><a href="#gifts" className="text-gray-600 hover:text-blue-600">Gift Certificates</a></li>
            <li><a href="#blogs" className="text-gray-600 hover:text-blue-600">Blogs</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4'>
          <h2 className='font-bold text-lg mb-4'>MY ACCOUNT</h2>
          <ul>
            <li><a href="#profile" className="text-gray-600 hover:text-blue-600">User Profile</a></li>
            <li><a href="#orders" className="text-gray-600 hover:text-blue-600">Order History</a></li>
            <li><a href="#wishlist" className="text-gray-600 hover:text-blue-600">Wish List</a></li>
            <li><a href="#newsletter" className="text-gray-600 hover:text-blue-600">Newsletter</a></li>
            <li><a href="#affiliate" className="text-gray-600 hover:text-blue-600">Affiliate</a></li>
            <li><a href="#international" className="text-gray-600 hover:text-blue-600">International Orders</a></li>
          </ul>
        </div>

        <div className='w-full md:w-1/4'>
          <h2 className='font-bold text-lg mb-4'>SERVICES</h2>
          <ul>
            <li><a href="#franchise" className="text-gray-600 hover:text-blue-600">Franchise</a></li>
            <li><a href="#kiosk" className="text-gray-600 hover:text-blue-600">Kiosk</a></li>
            <li><a href="#repair" className="text-gray-600 hover:text-blue-600">Phone Repairing</a></li>
            <li><a href="#sales" className="text-gray-600 hover:text-blue-600">Sales & Services</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-full mt-8 text-center text-sm">
        <div className="flex flex-col items-center mb-4">
          <FiTruck size={24} className="mb-2 text-blue-600" />
          <span>Free Shipping</span>
          <span>When you spend ₹50,000+</span>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FiPhone size={24} className="mb-2 text-blue-600" />
          <span>Call Us Anytime</span>
          <span>+34 555 5555</span>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FiMessageCircle size={24} className="mb-2 text-blue-600" />
          <span>Chat With Us</span>
          <span>We offer 24-hour chat support</span>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FiGift size={24} className="mb-2 text-blue-600" />
          <span>Gift Cards</span>
          <span>For your loved one, in any amount</span>
        </div>
      </div>

      <div className='w-full flex justify-between items-center my-4'>
        <div className='flex'>
          <img src={playStore} alt="Google Play Store" className='w-[185px] object-contain' />
        </div>
        <div className='w-fit text-gray-800'>
          <span><a href="mailto:care@uoons.com" className="hover:underline">care@uoons.com</a></span>
        </div>
        <div className='flex gap-4'>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" className='w-[45px] object-contain cursor-pointer hover:brightness-110' /></a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" className='w-[45px] object-contain cursor-pointer hover:brightness-110' /></a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className='w-[45px] object-contain cursor-pointer hover:brightness-110' /></a>
          <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" className='w-[45px] object-contain cursor-pointer hover:brightness-110' /></a>
        </div>
      </div>

      <div className='border-t border-gray-300 w-full mt-4'></div>

      <div className='flex justify-center w-full items-center gap-1 py-3 text-sm'>
        <span>Copyright</span><FaRegCopyright className='inline'/> <span>UOONS All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default NewFooter1;
