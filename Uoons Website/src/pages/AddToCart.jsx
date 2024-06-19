import React, { useState } from 'react';
import { FiTruck, FiPhone, FiMessageCircle, FiGift} from 'react-icons/fi';
import { FaCreditCard} from 'react-icons/fa';

import Header from '../components/Header';

const productsData = [
  {
    id: 1,
    brand: "MSI",
    name: "MSI Thin GF63 A12VE-071IN",
    rating: 4.0,
    reviews: 400,
    price: 50000,
    originalPrice: 100000,
    discount: 50,
    emi: "₹1209.91/- per month",
    images: [
      "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41ZTSKvhmZL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/317pB2MO57L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81TurWp5IdL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71Wy96L0h1L._SX679_.jpg"
    ],
    description: "MSI GF63 Thin is a lightweight and powerful gaming laptop with Intel Core i5-12450H, 16GB DDR4 memory, and NVIDIA GeForce GTX 1650 Max-Q graphics.",
    specifications: {
      "Sales Package": "Laptop, Power Adaptor, User Guide, Warranty Documents",
      "Model Number": "GF63 Thin 11UCX-1496IN",
      "PartNumber": "9S7-16R612-1496",
      "Series": "GF63",
      "Color": "Black",
      "Type": "Gaming Laptop",
      "SuitableFor": "Gaming",
      "PowerSupply": "120W AC Adapter",
      "BatteryCell": "3 Cell",
      "MSOfficeProvided": "No",
      "ProcessorBrand": "Intel",
      "ProcessorName": "Core i5",
      "ProcessorGeneration": "11th Gen",
      "SSD": "Yes",
      "SSDCapacity": "512 GB",
      "RAM": "16 GB",
      "RAMType": "DDR4",
      "ClockSpeed": "2.6 GHz with Turbo Boost Upto 4.4 GHz",
      "Cache": "12 MB",
      "GraphicProcessor": "NVIDIA GeForce RTX 2050",
      "NumberOfCores": "4",
      "OSArchitecture": "64 bit",
      "OperatingSystem": "Windows 11 Home",
      "SystemArchitecture": "64 bit",
      "MicIn": "Yes",
      "RJ45": "Yes",
      "USBPort": "1 x Type-C USB 3.2 Gen 1, 3 x Type-A USB 3.2 Gen 1",
      "HDMIPort": "1 x HDMI (4k @ 30Hz)",
      "MultiCardSlot": "No",
      "Touchscreen": "No",
      "ScreenSize": "15.6 inch",
      "ScreenResolution": "1920 x 1080 Pixel",
      "ScreenType": "Full HD LED Backlit IPS Display (144Hz Refresh Rate)",
      "Speakers": "Built-in Dual Speakers",
      "InternalMic": "Built-in Microphone",
      "SoundProperties": "Nahimic 3",
      "WirelessLAN": "Intel Wi-Fi 6 AX201 (2x2)",
      "Bluetooth": "v5.2",
      "Dimensions": "359 x 254 x 21.7 mm",
      "Weight": "1.86 kg",
    },
    highlights: [
      "Lightweight and portable design",
      "High-performance components for gaming and multitasking",
      "Vivid Full HD display",
      "Efficient cooling system"
    ],
    salientFeatures: [
      "Powerful Intel Core i5 processor for seamless performance",
      "NVIDIA GeForce GTX 1650 Max-Q for stunning graphics",
      "High-speed 512GB NVMe SSD for quick data access",
      "16GB DDR4 RAM for efficient multitasking",
      "15.6-inch Full HD display for immersive visuals"
    ],
    shippingInfo: {
      shipsFrom: "Uoons",
      soldBy: "GADGETRON"
    }
  },
  {
    id: 2,
    brand: "HP",
    name: "HP Victus Gaming Laptop fa1307TX",
    rating: 4.4,
    reviews: 120,
    price: 75000,
    originalPrice: 85000,
    discount: 12,
    emi: "₹1812.75/- per month",
    images: [
      "https://m.media-amazon.com/images/I/41lGKvvMOeL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/91pBcRC8XzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81+vAxk5koL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81RSPt+6OHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71lgKyVXG+L._SX679_.jpg"
    ],
    description: "HP Victus Gaming Laptop with 13th Gen Intel Core i5-13420H, 16GB DDR4 memory, and NVIDIA GeForce RTX 2050 graphics.",
    specifications: {
      "Sales Package": "Laptop, Power Adaptor, User Guide, Warranty Documents",
      "Model Number": "fa1307TX",
      "PartNumber": "9XM66PA",
      "Series": "Victus",
      "Color": "Silver",
      "Type": "Gaming Laptop",
      "SuitableFor": "Gaming",
      "PowerSupply": "200W AC Adapter",
      "BatteryCell": "4 Cell",
      "MSOfficeProvided": "Yes",
      "ProcessorBrand": "Intel",
      "ProcessorName": "Core i5",
      "ProcessorGeneration": "13th Gen",
      "SSD": "Yes",
      "SSDCapacity": "1 TB",
      "RAM": "16 GB",
      "RAMType": "DDR4",
      "ClockSpeed": "3.0 GHz with Turbo Boost Upto 4.6 GHz",
      "Cache": "12 MB",
      "GraphicProcessor": "NVIDIA GeForce RTX 2050",
      "NumberOfCores": "6",
      "OSArchitecture": "64 bit",
      "OperatingSystem": "Windows 11 Home",
      "SystemArchitecture": "64 bit",
      "MicIn": "Yes",
      "RJ45": "Yes",
      "USBPort": "1 x Type-C USB 3.2 Gen 1, 2 x Type-A USB 3.2 Gen 1",
      "HDMIPort": "1 x HDMI (4k @ 60Hz)",
      "MultiCardSlot": "No",
      "Touchscreen": "No",
      "ScreenSize": "15.6 inch",
      "ScreenResolution": "1920 x 1080 Pixel",
      "ScreenType": "Full HD LED Backlit IPS Display (144Hz Refresh Rate)",
      "Speakers": "Built-in Dual Speakers",
      "InternalMic": "Built-in Microphone",
      "SoundProperties": "Bang & Olufsen",
      "WirelessLAN": "Intel Wi-Fi 6 AX201 (2x2)",
      "Bluetooth": "v5.2",
      "Dimensions": "370 x 260 x 23.5 mm",
      "Weight": "2.37 kg",
    },
    highlights: [
      "Advanced cooling system for sustained performance",
      "Stunning visuals with NVIDIA GeForce RTX 2050",
      "Ample storage with 1TB NVMe SSD",
      "Immersive audio by Bang & Olufsen",
      "Durable and stylish design"
    ],
    salientFeatures: [
      "13th Gen Intel Core i5 processor for high-speed computing",
      "NVIDIA GeForce RTX 2050 for enhanced gaming graphics",
      "16GB DDR4 RAM for smooth multitasking",
      "15.6-inch Full HD display with 144Hz refresh rate",
      "1TB NVMe SSD for vast and fast storage"
    ],
    shippingInfo: {
      shipsFrom: "HP Store",
      soldBy: "HP Official Store"
    }
  }
];

const AddToCart = () => {
  const [cart, setCart] = useState(productsData.map(product => ({ ...product, quantity: 1 })));

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className='flex flex-col w-full items-center bg-blue-100'>
      <Header />
      <div className="bg-blue-100 w-[95%] my-5 relative">
        <div className=" mx-auto flex">
          <div className="w-3/4 p-6 bg-white rounded-2xl shadow-lg mr-8">
            <h2 className="text-3xl font-bold mb-4">Shopping Bag</h2>
            <p className="text-lg mb-6">{cart.length} items in your bag.</p>
            <div className="border-b pb-4 mb-4">
              {cart.map((product, index) => (
                <div key={product.id} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img src={product.images[0]} alt={product.name} className="w-20 h-20 rounded-lg mr-4" />
                    <div>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-gray-600">{product.brand}</p>
                      <p className="text-gray-600">Color: {product.specifications.Color}</p>
                      <p className="text-gray-600">Size: {product.specifications.ScreenSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg mr-8">₹{product.price}</span>
                    <div className="flex items-center border px-2 rounded-lg">
                      <button onClick={() => decrementQuantity(index)} className="px-2">-</button>
                      <span className="px-4">{product.quantity}</span>
                      <button onClick={() => incrementQuantity(index)} className="px-2">+</button>
                    </div>
                    <span className="text-lg ml-8">₹{product.price * product.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold my-4">Cart Total</h3>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Cart Subtotal</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Cart Total</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <button className='flex mx-auto items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md text-lg'>
                <FaCreditCard className='mr-2' /> Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="flex flex-col items-center">
            <FiTruck size={24} className="mb-2" />
            <span>Free Shipping</span>
            <span>When you spend ₹50,000+</span>
          </div>
          <div className="flex flex-col items-center">
            <FiPhone size={24} className="mb-2" />
            <span>Call Us Anytime</span>
            <span>+34 555 5555</span>
          </div>
          <div className="flex flex-col items-center">
            <FiMessageCircle size={24} className="mb-2" />
            <span>Chat With Us</span>
            <span>We offer 24-hour chat support</span>
          </div>
          <div className="flex flex-col items-center">
            <FiGift size={24} className="mb-2" />
            <span>Gift Cards</span>
            <span>For your loved one, in any amount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
