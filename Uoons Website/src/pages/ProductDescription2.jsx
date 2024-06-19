import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { MdOutlineStarPurple500, MdOutlineStarBorderPurple500, MdOutlineLocalOffer, MdOutlineStore } from 'react-icons/md';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { FaShoppingCart, FaCreditCard, FaShippingFast } from 'react-icons/fa';
import { BiSolidOffer } from 'react-icons/bi';
import EMI from '../assets/credit.png'; // Ensure you have the EMI image in the correct path
import AdBanner from '../components/AdBanner';
import './ProductDescription.css'
import RatingsReviews from '../components/RatingsReview';

const product = {
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
    PartNumber: "9S7-16R612-1496",
    Series: "GF63",
    Color: "Black",
    Type: "Gaming Laptop",
    SuitableFor: "Gaming",
    PowerSupply: "120W AC Adapter",
    BatteryCell: "3 Cell",
    MSOfficeProvided: "No",
    ProcessorBrand: "Intel",
    ProcessorName: "Core i5",
    ProcessorGeneration: "11th Gen",
    SSD: "Yes",
    SSDCapacity: "512 GB",
    RAM: "16 GB",
    RAMType: "DDR4",
    ClockSpeed: "2.6 GHz with Turbo Boost Upto 4.4 GHz",
    Cache: "12 MB",
    GraphicProcessor: "NVIDIA GeForce RTX 2050",
    NumberOfCores: "4",
    OSArchitecture: "64 bit",
    OperatingSystem: "Windows 11 Home",
    SystemArchitecture: "64 bit",
    MicIn: "Yes",
    RJ45: "Yes",
    USBPort: "1 x Type-C USB 3.2 Gen 1, 3 x Type-A USB 3.2 Gen 1",
    HDMIPort: "1 x HDMI (4k @ 30Hz)",
    MultiCardSlot: "No",
    Touchscreen: "No",
    ScreenSize: "15.6 inch",
    ScreenResolution: "1920 x 1080 Pixel",
    ScreenType: "Full HD LED Backlit IPS Display (144Hz Refresh Rate)",
    Speakers: "Built-in Dual Speakers",
    InternalMic: "Built-in Microphone",
    SoundProperties: "Nahimic 3",
    WirelessLAN: "Intel Wi-Fi 6 AX201 (2x2)",
    Bluetooth: "v5.2",
    Dimensions: "359 x 254 x 21.7 mm",
    Weight: "1.86 kg",
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
  },
  frequentlyBoughtTogether: [
    {
      name: "Gaming Mouse",
      image: "https://m.media-amazon.com/images/I/81P0JGKaq1L._SX679_.jpg",
      price: 1000
    },
    {
      name: "Gaming Headset",
      image: "https://m.media-amazon.com/images/I/71m4UVcW90L._SX679_.jpg",
      price: 1500
    },
    {
      name: "Laptop Cooling Pad",
      image: "https://m.media-amazon.com/images/I/71kc8sgAwIL._SX679_.jpg",
      price: 800
    }
  ]
};

const ProductDescription2 = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [zoomBackgroundPosition, setZoomBackgroundPosition] = useState('0% 0%');
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState('8GB RAM');
  const [selectedStyle, setSelectedStyle] = useState('Intel Core i5-11260H');
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const imgRef = useRef();
  const zoomRef = useRef();

  const handleMouseMove = (e) => {
    const { width, height, left, top } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomBackgroundPosition(`${xPercent}% ${yPercent}%`);
    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${selectedImage})`,
      backgroundSize: `${width * 2}px ${height * 2}px`,
      backgroundPosition: zoomBackgroundPosition,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  const incrementQuantity = () => {
    setQuantity(prev => (prev < 8 ? prev + 1 : prev));
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleApplyCoupon = () => {
    setAppliedCoupon(coupon);
    setCoupon('');
  };

  return (
    <div className='flex flex-col w-full items-center bg-blue-100 relative'>
      <Header />
      <div className='bg-white flex w-[95%] items-start rounded-[16px] p-3 my-8 shadow-lg relative'>
        {/* Section 1: Product Image and Image Catalogue */}
        <div className='flex flex-col items-center border border-gray-300 rounded-md p-2 w-1/2 sticky top-[120px]'>
          {/* Main Product Image */}
          <div 
            className='relative w-[550px] h-[550px] overflow-hidden border border-gray-200 rounded-md'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              ref={imgRef}
              src={selectedImage} 
              alt="Product"
              className='w-full h-full object-cover'
            />
          </div>

          {/* Image Catalogue */}
          <div className='flex mt-2 overflow-hidden'>
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Product Thumbnail ${index}`}
                className={`w-16 h-16 cursor-pointer mx-1 border ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'} rounded-md`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Product Details */}
        <div className='flex-grow mx-4 relative'>
          {/* Zoom Window */}
          <div 
            ref={zoomRef}
            className='absolute top-0 left-[0px] w-full bg-no-repeat bg-white border border-gray-300 rounded-md'
            style={zoomStyle}
          ></div>

          {/* Product Details */}
          <div className='p-4'>
            <p className='text-gray-500'>{product.brand}</p>
            <h2 className='font-bold text-2xl'>{product.name}</h2>

            <div className='flex items-center gap-1 justify-start mt-2'>
              <span className='flex'>
                {[...Array(5)].map((_, index) => (
                  index < Math.floor(product.rating) ? 
                    <MdOutlineStarPurple500 key={index} className='text-yellow-500 text-xl' /> : 
                    <MdOutlineStarBorderPurple500 key={index} className='text-yellow-500 text-xl' />
                ))}
              </span>
              <span>({product.reviews} Reviews)</span>
            </div>

            <hr className='my-4'/>

            <div className='flex items-center'>
              <h2 className='text-3xl font-bold text-green-700'>₹{product.price}</h2>
              <span className='text-gray-500 text-sm ml-4'><del>₹{product.originalPrice}</del></span>
              <span className='text-green-700 text-sm ml-4'>{product.discount}% off</span>
            </div>
            <p className='text-gray-500 text-sm mt-1'>inclusive of all taxes</p>
            <img src={EMI} className="w-24 mt-2" alt="EMI options" />
            <p className='text-blue-600 text-sm'>EMI starts at {product.emi}</p>

            <hr className='my-4'/>

            <p>{product.description}</p>
            <ul className='list-disc list-inside'>
              {product.highlights.map((highlight, index) => (
                <li key={index} className='text-gray-700'>{highlight}</li>
              ))}
            </ul>

            <div className='my-4'>
              <h2 className='font-bold text-lg'>Size: </h2>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)} 
                className='border border-gray-300 rounded-md p-1'
              >
                <option value='8GB RAM'>8GB RAM</option>
                <option value='16GB RAM'>16GB RAM</option>
              </select>
            </div>

            <div className='my-4'>
              <h2 className='font-bold text-lg'>Style: </h2>
              <select 
                value={selectedStyle} 
                onChange={(e) => setSelectedStyle(e.target.value)} 
                className='border border-gray-300 rounded-md p-1'
              >
                <option value='Intel Core i5-11260H'>Intel Core i5-11260H</option>
                <option value='Intel Core i7-11370H'>Intel Core i7-11370H</option>
              </select>
            </div>

            <div className='my-4'>
              <h2 className='font-bold text-lg'>Quantity: </h2>
              <div className='flex items-center gap-2'>
                <button 
                  onClick={decrementQuantity}
                  className='border border-gray-300 rounded-md px-2'
                >-</button>
                <span>{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className='border border-gray-300 rounded-md px-2'
                >+</button>
              </div>
            </div>

            <div className='flex items-center gap-2 mt-4'>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md flex items-center gap-2'>
                <FaShoppingCart /> Add to Cart
              </button>
              <button className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center gap-2'>
                <FaShippingFast /> Buy Now
              </button>
            </div>

            <div className='mt-4'>
              <h2 className='font-bold text-lg'>Shipping & Returns</h2>
              <div className='flex items-center gap-2'>
                <TbTruckDelivery className='text-2xl'/>
                <p>Free delivery by <span className='font-bold'>Tomorrow</span></p>
              </div>
              <div className='flex items-center gap-2 mt-2'>
                <TbTruckReturn className='text-2xl'/>
                <p>Easy 30-day returns</p>
              </div>
            </div>

            <div className='mt-4'>
              <h2 className='font-bold text-lg'>Sold by</h2>
              <div className='flex items-center gap-2'>
                <MdOutlineStore className='text-2xl'/>
                <p>{product.shippingInfo.shipsFrom}</p>
              </div>
              <div className='flex items-center gap-2 mt-2'>
                <MdOutlineStore className='text-2xl'/>
                <p>{product.shippingInfo.soldBy}</p>
              </div>
            </div>

            <div className='mt-4'>
              <h2 className='font-bold text-lg'>Apply Coupon</h2>
              <div className='flex items-center gap-2'>
                <input 
                  type='text' 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder='Enter coupon code'
                  className='border border-gray-300 rounded-md p-2 w-full'
                />
                <button 
                  onClick={handleApplyCoupon}
                  className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'
                >Apply</button>
              </div>
              {appliedCoupon && <p className='text-green-600 mt-2'>Coupon "{appliedCoupon}" applied!</p>}
            </div>

            <hr className='my-4'/>

            <div className='mt-4'>
              <h2 className='font-bold text-lg'>Specifications</h2>
              <ul className='list-disc list-inside'>
                {Object.keys(product.specifications).slice(0, showAllSpecs ? undefined : 5).map((key, index) => (
                  <li key={index} className='text-gray-700'>
                    <span className='font-bold'>{key}: </span>{product.specifications[key]}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className='text-blue-600 mt-2'
              >
                {showAllSpecs ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>

          <hr className='my-4'/>

          {/* Salient Features */}
          <div className='mt-4'>
            <h2 className='font-bold text-lg'>Salient Features</h2>
            <ul className='list-disc list-inside'>
              {product.salientFeatures.map((feature, index) => (
                <li key={index} className='text-gray-700'>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <AdBanner />

      <RatingsReviews />

      {/* Frequently Bought Together Section */}
      <div className='bg-white flex w-[95%] items-start rounded-[16px] p-3 my-8 shadow-lg relative'>
        <h2 className='font-bold text-lg'>Frequently Bought Together</h2>
        <div className='flex justify-between mt-4'>
          {product.frequentlyBoughtTogether.map((item, index) => (
            <div key={index} className='flex flex-col items-center p-4 border border-gray-300 rounded-md'>
              <img 
                src={item.image} 
                alt={item.name}
                className='w-24 h-24 object-cover'
              />
              <h3 className='font-bold mt-2'>{item.name}</h3>
              <p className='text-green-700 font-bold'>₹{item.price}</p>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-2 flex items-center gap-2'>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription2;
