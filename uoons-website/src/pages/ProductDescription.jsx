import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaTag, FaTruck } from 'react-icons/fa';
import { BsFillCartPlusFill, BsFillBagFill } from 'react-icons/bs';

const product = {
  brand: "MSI",
  name: "MSI GF63 Thin, Intel Core i5-11260H, 40CM FHD 60Hz Gaming Laptop(16GB/512GB NVMe SSD/Windows 11 Home/NVIDIA GeForce GTX 1650 Max Q, GDDR6 4GB/Black/1.8Kg), 11SC-1493IN",
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
    "Part Number": "9S7-16R612-1496",
    "Series": "GF63",
    "Color": "Black",
    "Type": "Gaming Laptop",
    "Suitable For": "Gaming",
    "Power Supply": "120W AC Adapter",
    "Battery Cell": "3 Cell",
    "MS Office Provided": "No",
    "Processor Brand": "Intel",
    "Processor Name": "Core i5",
    "Processor Generation": "11th Gen",
    "SSD": "Yes",
    "SSD Capacity": "512 GB",
    "RAM": "16 GB",
    "RAM Type": "DDR4",
    "Clock Speed": "2.6 GHz with Turbo Boost Upto 4.4 GHz",
    "Cache": "12 MB",
    "Graphic Processor": "NVIDIA GeForce RTX 2050",
    "Number of Cores": "4",
    "OS Architecture": "64 bit",
    "Operating System": "Windows 11 Home",
    "System Architecture": "64 bit",
    "Mic In": "Yes",
    "RJ45": "Yes",
    "USB Port": "1 x Type-C USB 3.2 Gen 1, 3 x Type-A USB 3.2 Gen 1",
    "HDMI Port": "1 x HDMI (4k @ 30Hz)",
    "Multi Card Slot": "No",
    "Touchscreen": "No",
    "Screen Size": "15.6 inch",
    "Screen Resolution": "1920 x 1080 Pixel",
    "Screen Type": "Full HD LED Backlit IPS Display (144Hz Refresh Rate)",
    "Speakers": "Built-in Dual Speakers",
    "Internal Mic": "Built-in Microphone",
    "Sound Properties": "Nahimic 3",
    "Wireless LAN": "Intel Wi-Fi 6 AX201 (2x2)",
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
  ],
  shippingInfo: {
    shipsFrom: "Uoons",
    soldBy: "GADGETRON"
  }
};

const ProductPage = () => {
  const [activeImg, setActiveImage] = useState(product.images[0]);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const handleApplyCoupon = () => {
    alert(`Coupon "${coupon}" applied!`);
  };

  const displayedSpecifications = showAllSpecs ? Object.entries(product.specifications) : Object.entries(product.specifications).slice(0, 4);

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img src={activeImg} alt="product" className="w-full h-auto object-cover rounded-xl border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105" />
          <div className="flex flex-row justify-between gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img-${index}`}
                className={`w-24 h-24 rounded-md cursor-pointer border transition duration-300 ease-in-out transform hover:scale-110 ${activeImg === img ? 'border-violet-600' : 'border-gray-200'}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className="text-violet-600 font-semibold">{product.brand}</span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              {[...Array(Math.floor(product.rating))].map((_, index) => <FaStar key={index} />)}
              {product.rating % 1 !== 0 && <FaStarHalfAlt />}
              {[...Array(5 - Math.ceil(product.rating))].map((_, index) => <FaRegStar key={index} />)}
            </div>
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4">
            <h6 className="text-2xl font-semibold">₹{product.price}</h6>
            <span className="line-through text-gray-500">₹{product.originalPrice}</span>
            <span className="text-green-600">({product.discount}% OFF)</span>
          </div>
          <p className="text-gray-600">{product.emi}</p>
          <div className="flex flex-row items-center gap-12 mt-4">
            <div className="flex flex-row items-center border border-gray-200 rounded-lg">
              <button className="bg-gray-200 py-2 px-5 text-violet-800 text-3xl rounded-l-lg transition duration-300 ease-in-out transform hover:scale-110" onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}>-</button>
              <span className="py-4 px-6">{amount}</span>
              <button className="bg-gray-200 py-2 px-4 text-violet-800 text-3xl rounded-r-lg transition duration-300 ease-in-out transform hover:scale-110" onClick={() => setAmount((prev) => prev + 1)}>+</button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105">
              <BsFillCartPlusFill />
              Add to Cart
            </button>
            <button className="bg-orange-600 text-white font-semibold py-3 px-16 rounded-xl h-full flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105">
              <BsFillBagFill />
              Buy Now
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <FaTag className="text-violet-600" />
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border border-gray-300 rounded-l-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <button onClick={handleApplyCoupon} className="bg-violet-600 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 ease-in-out transform hover:scale-105">Apply</button>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Highlights</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Salient Features</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {product.salientFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Specifications</h3>
            <table className="mt-2 text-gray-700 w-full">
              <tbody>
                {displayedSpecifications.map(([key, value], index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 font-semibold">{key}</td>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="text-violet-600 mt-2" onClick={() => setShowAllSpecs(!showAllSpecs)}>
              {showAllSpecs ? 'Show less' : 'Show more'}
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Shipping Information</h3>
            <div className="mt-2 text-gray-700">
              <p>Ships From: {product.shippingInfo.shipsFrom}</p>
              <p>Sold By: {product.shippingInfo.soldBy}</p>
              <p><FaTruck className="inline text-violet-600" /> Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
