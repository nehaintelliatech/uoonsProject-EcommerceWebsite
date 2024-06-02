import React from 'react'
import './Header.css'
import logo from '../assets/logo/uoonsLogo.png'
import { TfiSearch } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { AiOutlineShop } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import sample_categorie from "../assets/categories/categories_sample_image.jpeg"

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import LoginSignUp from './LoginSignUp';




const Header = () => {
  return (
    <>
    {/* mainHeader */}
    <div className='w-screen h-[80px] flex justify-between items-center sticky top-[0px] z-30 p-2 px-10 bg-white'>

        {/* brandLogo! */}
        <div className='cursor-pointer p-2'>
                <img src={logo} alt="Uoons-Logo" />   
        </div>

        {/* searchBox */}
        <div className='flex items-center rounded-[16px] overflow-hidden hover:border-orange-600 focus:border-orange-600 duration-500 shadow-2xl border'>
            <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500 font-semibold outline-0'>Categories <RiArrowDropDownLine /></button>
            <input type="text" placeholder='Search your favorite products and brands' className='p-2 outline-0 w-[800px]'/>
            <button className='p-2 font-semibold outline-0'><TfiSearch /></button>
        </div>

        {/* essentialLink*/}
        <div className="flex gap-8">
                
            {/* loginButton */}
            <div className="dropdown relative">
                <button className="dropbtn hover:text-orange-600 duration-500">
                    <div className=''>
                        <Popup trigger={<button className='flex items-center gap-2 p-2 text-lg outline-0'><FaRegUser /> Log-In/Sign-Up</button>} modal> 
                            <div><LoginSignUp /></div>
                        </Popup>
                    
                    </div>
                </button>
                <div className="dropdown-content bg-white p-2 z-30 text-center rounded-[16px] shadow-2xl border">
                    <a href="#"><FaRegUser /> My Profile</a>
                    <a href="#"><LuShoppingBag /> My Orders</a>
                    <a href="#"><TbTruckDelivery /> Track Order</a>
                    <a href="#"><FaRegHeart /> My Wishlist</a>
                    <a href="#"><IoNotificationsOutline /> Notifications</a>
                </div>
            </div>
                
{/* loginButton
<div className="dropdown relative">
                <button className="dropbtn hover:text-orange-600 duration-500">
                    <div className='flex items-center gap-2 p-2 text-lg'>
                        <Popup trigger={<button> Trigger</button>} position="right center">
                            <div>Popup content here !!</div>
                        </Popup>
                    <FaRegUser /> Log-In/Sign-Up
                    </div>
                </button>
                <div className="dropdown-content bg-white p-2 z-30 text-center rounded-[16px] shadow-2xl border">
                    <a href="#"><FaRegUser /> My Profile</a>
                    <a href="#"><LuShoppingBag /> My Orders</a>
                    <a href="#"><TbTruckDelivery /> Track Order</a>
                    <a href="#"><FaRegHeart /> My Wishlist</a>
                    <a href="#"><IoNotificationsOutline /> Notifications</a>
                </div>
            </div>
                 */}

            {/* cartButton */}
            <div>
                <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500'>
                    <div className='flex items-center gap-2 text-lg'><GrCart /> Cart</div>
                </button>
            </div>

            {/* become a seller Button */}
            <div>
                <button className='flex items-center gap-1 p-2 cursor-pointer hover:text-orange-600 duration-500'>
                    <div className='flex items-center gap-2 text-lg '><AiOutlineShop /> Become a seller</div>
                </button>
            </div>

            </div>
        </div>


        {/* Categories */}
        {window.location.href == "http://localhost:5173/"?
        <div class=" w-screen flex justify-end border gap-16 px-10 duration-500">
        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Audio</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="/">Bluetooth Headphones</a>
                <a href="/">Wired Headphones</a>
                <a href="/">Bluetooth Speakers</a>
                <a href="/">Wired Earbuds</a>
                <a href="/">Microphones Accessories</a>
                <a href="/">Ceiling Speakers</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Gaming</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Gaming Chair</a>
                <a href="#">Gaming Mouse</a>
                <a href="#">Gaming Headphones</a>
                <a href="#">Toys</a>
                <a href="#">Gaming Keyboard</a>
                <a href="#">Gaming Accessories</a>
                <a href="#">Gaming Components</a>
                <a href="#">Gaming Laptops</a>
                <a href="#">DIV kits</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Refurbish</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Peripherals</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Car Accessories</a>
                <a href="#">Laptop Charger, Adapter</a>
                <a href="#">USB Cables</a>
                <a href="#">Mouse</a>
                <a href="#">Power Supplies/ SMPS</a>
                <a href="#">Keyboards</a>
                <a href="#">UPS</a>
                <a href="#">RAM</a>
                <a href="#">Projectors</a>
                <a href="#">Streaming Devices</a>
                <a href="#">Laptop Tables</a>
                <a href="#">Laptop Stands</a>
                <a href="#">Cables & Adapters</a>
                <a href="#">Webcam</a>
                <a href="#">CPU Coolers</a>
                <a href="#">Computer Case Cabinets</a>
                <a href="#">Barcode Scanners</a>
                <a href="#">Pen Drives</a>
                <a href="#">Monitors</a>
                <a href="#">Others</a>
                <a href="#">Motherboards</a>
                <a href="#">Networking Devices</a>
                <a href="#">Software</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Mobile Accessories</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Power Bank</a>
                <a href="#">AUX Cables</a>
                <a href="#">Batteries</a>
                <a href="#">USB Charger</a>
                <a href="#">USB Cable</a>
                <a href="#">OTG Cables</a>
                <a href="#">Charging Cable</a>
                <a href="#">Ear phones</a>
                <a href="#">Memory Cards</a>
                <a href="#">Selfie sticks & Tripods</a>
                <a href="#">Bluetoooth</a>
                <a href="#">Screen Guards</a>
                <a href="#">Mobile lens</a>
                <a href="#">Cases & Covers</a>
                <a href="#">OTG adopters</a>
                <a href="#">Speakers</a>
                <a href="#">Skin Stickers</a>
                <a href="#">Smart Watch</a>
                <a href="#">Headphone Jack Adapter</a>
                <a href="#">Holders & Mounts</a>
                <a href="#">Wireless Chargers</a>
                <a href="#">Microphone Accessories</a>
                <a href="#">Other Cables</a>
                <a href="#">Fingerprint Scanners</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Appliances</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>
        
        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Smart Home</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Smart Gadgets</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn">
                <div>
                <img src={sample_categorie} alt="" />
                <p>Personal & Health</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>

        <div className="subnav relative">
            <button className="subnavbtn ">
                <div>
                    <img src={sample_categorie} alt="" />
                    <p>Mobiles</p>
                </div>
            </button>
            <div className="subnav-content">
                <a href="#">Storage Devices</a>
                <a href="#">Mobiles</a>
                <a href="#">Laptops</a>
                <a href="#">Streaming Devices</a>
            </div>
        </div>

</div>:null
        }
        
    </>
  )
}

export default Header
