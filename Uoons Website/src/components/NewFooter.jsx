import React from 'react';
import { FaApple, FaGooglePlay, FaWhatsapp, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaBlogger, FaInstagramSquare, FaRegCopyright } from 'react-icons/fa';
import { FiTruck, FiPhone, FiMessageCircle, FiGift } from 'react-icons/fi';
import Logo from '../assets/Logo/uoonsLogo_Full.png'
// import Footerboxes from '../components/Footerboxes'

const NewFooter = () => {
  return (
    <div className="w-full bg-white border p-8 flex flex-col items-center">
      {/* <Footerboxes /> */}
      
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

      <div className="w-3/4 border-t border-gray-300 my-8"></div>
      
      {/* Links Section */}
      <div className='w-[95%] flex gap-3 justify-between py-8'>
        <div className='flex flex-col items-center text-center w-[25%]'>
          <img src={Logo} alt="Uoons Logo" className='mb-4' />
          <p className='text-sm'>
            <strong>Registered Office Address:</strong><br />
            171 Devi Ahilya Marg, GFL 12, Jail Road, Indore - 452007, Madhya Pradesh, India.<br/>
            Email: <a href="mailto:care@uoons.com" className="text-blue-600 hover:underline">care@uoons.com</a><br />
            Please note that you are accessing the BETA version of www.uoons.com. Should you encounter any bugs, lack of functionality, glitches, delayed deliveries, billing errors, or any other problems on this beta website, please write to us at <a href="mailto:care@uoons.com" className="text-blue-600 hover:underline">care@uoons.com</a>.
          </p>
        </div>

        <div className='flex gap-[21rem]'>
          <div className='bg-orange-600'></div>

        <div className=''>
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

        <div className=''>
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

        <div className=''>
          <h2 className='font-bold text-lg mb-4'>SERVICES</h2>
          <ul>
            <li><a href="#franchise" className="text-gray-600 hover:text-blue-600">Franchise</a></li>
            <li><a href="#kiosk" className="text-gray-600 hover:text-blue-600">Kiosk</a></li>
            <li><a href="#repair" className="text-gray-600 hover:text-blue-600">Phone Repairing</a></li>
            <li><a href="#sales" className="text-gray-600 hover:text-blue-600">Sales & Services</a></li>
          </ul>
        </div>
      </div>

      </div>

      

      <div className="w-3/4 border-t border-gray-300 my-8"></div>

      {/* App Download Section */}
      <div className="flex justify-center items-center mt-4">
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <FaApple className="text-4xl mx-2" />
        </a>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <FaGooglePlay className="text-4xl mx-2" />
        </a>
      </div>
      
      {/* Contact Email */}
      <div className="flex justify-center items-center mt-4">
        <span className="text-orange-600">care@Uoons.com</span>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500" />
        <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
        <FaYoutube className="text-2xl cursor-pointer hover:text-red-500" />
        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
        <FaBlogger className="text-2xl cursor-pointer hover:text-orange-600" />
        <FaInstagramSquare className="text-2xl cursor-pointer hover:text-pink-500" />
      </div>

      <div className="w-3/4 border-t border-gray-300 my-8"></div>

      {/* Footer Bottom */}
      <div className="text-center py-4">
        <span>Terms of Use | Copyright | Privacy Policy | Compliance</span>
        <div className="text-gray-600 mt-2">
          <FaRegCopyright className="inline-block mb-1" /> 2024 Uoons (INDIA) PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
