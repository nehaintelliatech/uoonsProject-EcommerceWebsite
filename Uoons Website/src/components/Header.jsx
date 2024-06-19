import React from 'react'
import { useState } from 'react';

import UoonsLogo from '../assets/Logo/uoonsLogo_Full.png'
import { BiSearchAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { LuShoppingBag } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoNotificationsOutline, IoLocationOutline } from 'react-icons/io5';
import { GrCart } from 'react-icons/gr';
import { AiOutlineShop } from 'react-icons/ai';

function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    // for the login/signup button
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='w-screen h-[100px] flex justify-between items-center sticky top-0 z-30 p-2 px-10 bg-white border'>

            {/* brandLogo! */}
            <div className='cursor-pointer p-2'>
                <img src={UoonsLogo} alt="Uoons-Logo" />
            </div>

            {/* searchBox */}
            <div className='flex items-center rounded-[16px] overflow-hidden hover:border-orange-600 duration-500 hover:shadow-2xl border px-2'>
                <button className='flex items-center p-2 hover:text-orange-600 duration-500 font-semibold outline-0'>
                    Shop by Categories <RiArrowDropDownLine className='text-3xl self-end'/>
                </button>
                <input type="text" placeholder='Search your favorite products and brands' className='p-2 outline-0 w-[700px]' />
                <button className='p-2 font-semibold outline-0 text-xl'><BiSearchAlt /></button>
            </div>

            {/* essentialLinks */}
            <div className="flex gap-8 items-center">
                
                {/* Deliver to button */}
                <div className='flex items-center text-lg gap-2 p-2 cursor-pointer hover:text-orange-600 duration-500'>
                    <IoLocationOutline className='text-xl font-bold'/>
                    <div className='flex flex-col'>
                        <span>Deliver to</span>
                        <span>Indore 404040</span>
                    </div>
                </div>
                
                
                {/* loginButton */}
                <div className="relative">
                    <button onClick={toggleDropdown} className="hover:text-orange-600 duration-500 outline-0">
                        <div className='flex items-center gap-2 p-2 text-lg'><FaRegUser /> Log-In/Sign-Up</div>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 bg-white p-2 z-30 text-center rounded-[16px] hover:shadow-2xl border w-[200px]">
                            <a href="#"><FaRegUser /> My Profile</a>
                            <a href="#"><LuShoppingBag /> My Orders</a>
                            <a href="#"><TbTruckDelivery /> Track Order</a>
                            <a href="#"><FaRegHeart /> My Wishlist</a>
                            <a href="#"><IoNotificationsOutline /> Notifications</a>
                        </div>
                    )}
                </div>

                {/* cartButton */}
                <div>
                    <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500 outline-0'>
                        <div className='flex items-center gap-2 text-lg'><GrCart /> Cart</div>
                    </button>
                </div>

                {/* become a seller Button */}
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
