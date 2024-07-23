import React, { useState } from 'react';
import UoonsLogo from '../assets/Logo/uoonsLogo_Full.png';
import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaUserCircle, FaListAlt, FaTruck, FaHeart, FaBell } from 'react-icons/fa';

function Header() {
  const [shopByCategoriesToggle, set_ShopByCategoriesToggle] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleShopByCategories = () => {
    set_ShopByCategoriesToggle(!shopByCategoriesToggle);
  };

  const toggleProfileDropdown = (status) => {
    setProfileDropdownOpen(status);
  };

  return (
    <div className='w-full grid grid-cols-[min-content_min-content_min-content] items-center sticky top-0 z-30 p-2 px-10 bg-white border'>
      <div className='cursor-pointer p-2 w-[10vw]'>
        <img src={UoonsLogo } alt="Uoons-Logo" />
      </div>
      <div className='flex items-center justify-center rounded-xl hover:border-orange-600 duration-500 hover:shadow-2xl shadow-lg border px-2 relative'>
        <button 
          onClick={toggleShopByCategories} 
          className='flex items-center p-2 hover:text-orange-600 duration-500 font-semibold outline-0'
        >
          Shop by Categories <RiArrowDropDownLine className='text-3xl' />
        </button>
        {shopByCategoriesToggle && (
          <div className='absolute top-full left-0 mt-2 w-[800px] bg-white border shadow-lg p-6 grid grid-cols-3 gap-4 z-20'>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Collectibles & art <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Collectibles</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Antiques</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Sports memorabilia</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Art</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Home & garden <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Yard, garden & outdoor</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Crafts</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Home improvement</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Pet supplies</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Sporting goods <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Outdoor sports</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Team sports</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Exercise & fitness</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Golf</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Electronics <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Computers & tablets</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Cameras & photo</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>TV, audio & surveillance</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Cell phones & accessories</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Auto Parts & Accessories <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>GPS & Security Devices</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Radar & Laser Detectors</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Care & Detailing</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Scooter Parts & Accessories</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Toys & hobbies <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Radio control</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Kids toys</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Action figures</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Dolls & bears</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Fashion <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Women</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Men</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Jewelry & watches</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Shoes</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Musical instruments & gear <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Guitar</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Pro audio equipment</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>String</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Stage lighting & effects</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold mb-2 flex items-center text-lg'>Other categories <MdOutlineArrowForwardIos className='ml-1' /></h3>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Video games & consoles</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Health & beauty</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Baby</li>
                <li className='mb-1 hover:text-orange-600 cursor-pointer'>Business & industrial</li>
              </ul>
            </div>
            <button className='col-span-3 mt-4 text-blue-600 font-semibold hover:underline flex items-center text-lg'>
              See all categories <MdOutlineArrowForwardIos className='ml-1' />
            </button>
          </div>
        )}
        <input 
          type="text" 
          placeholder='Search your favorite products and brands' 
          className='p-2 outline-0 w-[35vw]' 
        />
        <button className='p-2 font-semibold outline-0 text-xl'><BiSearchAlt /></button>
      </div>
      <div className="flex justify-end gap-6 items-center w-[40vw]">
        <div className='flex items-center text-lg gap-2 p-2 cursor-pointer hover:text-orange-600 duration-500'>
          <div className='flex flex-col'>
            <span>Deliver to</span>
            <span>Indore 404040</span>
          </div>
        </div>
        <div 
          className='relative flex items-center text-lg gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500' 
          onMouseEnter={() => toggleProfileDropdown(true)}
          onMouseLeave={() => toggleProfileDropdown(false)}
        >
          <FaRegUser />
          <span>
          Login/SignUp
          </span>
          {profileDropdownOpen && (
            <div className='absolute top-full right-0 mt-2 w-48 bg-white border shadow-lg p-4 z-20'>
              <ul className='text-lg text-gray-600'>
                <li className='mb-1 flex items-center hover:text-orange-600 cursor-pointer'><FaUserCircle className='mr-2' /> My Profile</li>
                <li className='mb-1 flex items-center hover:text-orange-600 cursor-pointer'><FaListAlt className='mr-2' /> My Orders</li>
                <li className='mb-1 flex items-center hover:text-orange-600 cursor-pointer'><FaTruck className='mr-2' /> Track Order</li>
                <li className='mb-1 flex items-center hover:text-orange-600 cursor-pointer'><FaHeart className='mr-2' /> My Wishlist</li>
                <li className='mb-1 flex items-center hover:text-orange-600 cursor-pointer'><FaBell className='mr-2' /> Notifications</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500 outline-0'>
            <div className='flex items-center gap-2 text-lg'><GrCart /> Cart</div>
          </button>
        </div>
        <div>
          <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500 outline-0'>
            <div className='flex items-center gap-2 text-lg'><AiOutlineShop /> Become a seller</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
