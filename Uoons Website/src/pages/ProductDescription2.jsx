import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { MdOutlineStarPurple500, MdOutlineStarBorderPurple500, MdOutlineLocalOffer, MdOutlineStore } from 'react-icons/md';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { FaShoppingCart, FaCreditCard, FaShippingFast } from 'react-icons/fa';
import { BiSolidOffer } from 'react-icons/bi';
import EMI from '../assets/credit.png'; // Ensure you have the EMI image in the correct path
import AdBanner from '../components/AdBanner';

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
    Processor: "Intel Core i5-12450H",
    RAM: "16GB DDR4",
    Storage: "512GB NVMe SSD",
    Graphics: "NVIDIA GeForce GTX 1650 Max-Q",
    Display: "15.6 inch Full HD"
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
};

const ProductDescription2 = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [zoomBackgroundPosition, setZoomBackgroundPosition] = useState('0% 0%');
  const [quantity, setQuantity] = useState(0);
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

  return (
    <div className='flex flex-col w-full items-center bg-blue-100'>
      <Header />

      <div className='bg-white flex w-[95%] items-start rounded-[16px] p-3 my-8 shadow-lg relative'>
        {/* Section 1: Product Image and Image Catalogue */}
        <div className='flex flex-col items-center  border border-gray-300 rounded-md p-2 w-1/2 sticky top-3'>
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
              <div className='flex text-xl gap-1'>
                {[...Array(5)].map((_, index) => (
                  index < product.rating ? <MdOutlineStarPurple500 key={index} /> : <MdOutlineStarBorderPurple500 key={index} />
                ))}
              </div>
              <p className='text-xl'>({product.rating.toFixed(1)})</p>
              <p className='text-blue-700 text-lg ml-2'>{product.reviews} reviews</p>
            </div>

            <div className='flex gap-4 mt-2'>
              <span className='flex items-center text-sm'><TbTruckDelivery className='mr-1' /> Free Shipping</span>
              <span className='flex items-center text-sm'><TbTruckReturn className='mr-1' /> Free 30-day returns</span>
            </div>

            <div className='border-t pt-4 mt-4'>
              <p className='text-2xl flex gap-1 items-end'>₹{product.price.toLocaleString()}<span className='line-through text-lg text-gray-500'>₹{product.originalPrice.toLocaleString()}</span></p>
              <p className='text-green-600 text-2xl'>{product.discount}% OFF</p>
              <p>Inclusive of all taxes</p>
              <div className='flex items-center'>
                <img src={EMI} alt="EMI" className='w-[1.3rem] object-contain'/>
                <p className='text-sm ml-2'><span className='font-bold'>EMI</span> Available from {product.emi}</p>
              </div>
            </div>

            <div className='mt-4'>
              <p className='text-lg font-semibold'>Availability: <span className='text-green-600'>In Stock</span></p>
              <p className='text-sm text-gray-600'>Delivering to Indore 452001 - <a href="#" className='text-blue-600 underline'>Update location</a></p>
              <div className='flex items-center mt-2'>
                <p className='text-sm'>Set Quantity:</p>
                <button 
                  className='ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded' 
                  onClick={decrementQuantity}
                >-</button>
                <span className='mx-2'>{quantity}</span>
                <button 
                  className='px-2 py-1 bg-gray-200 text-gray-700 rounded' 
                  onClick={incrementQuantity}
                >+</button>
              </div>
              <p className='text-sm text-red-600 mt-1'>Only 8 Left in stock</p>
            </div>

            <div className='mt-4 flex gap-4'>
              <button className='flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-md shadow-md'>
                <FaShoppingCart className='mr-2' /> Add to Cart
              </button>
              <button className='flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md'>
                <FaCreditCard className='mr-2' /> Buy Now
              </button>
            </div>

            <div className='border-t pt-4 mt-4'>
              <h2 className='flex items-center text-xl gap-1'><BiSolidOffer className='text-orange-600 text-2xl'/>OFFERS(12)</h2>
              <ul>
                <li className='flex items-center gap-1 mb-2'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 250 Instant Discount on OneCard Credit Card Non-EMI Txn. Minimum purchase value ₹7,500</li>
                <li className='flex items-center gap-1 mb-2'><MdOutlineLocalOffer className='text-green-600 text-xl'/>10% Instant Discount up to INR 1500 on HSBC Credit Card Non EMI Trnxs. Minimum purchase value ₹15,000</li>
                <li className='flex items-center gap-1 mb-2'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 2750 Instant Discount on OneCard Credit Card EMI Txn. Minimum purchase value ₹1,00,000</li>
                <li className='flex items-center gap-1 mb-2'><MdOutlineLocalOffer className='text-green-600 text-xl'/> Get GST invoice and save up to 28% on business purchases.</li>
              </ul>
              <button className='bg-green-600 hover:brightness-110 rounded-[16px] text-white px-4 py-2 hover:shadow-2xl'>See all!</button>
            </div>

            <p className='my-4'>{product.description}</p>

            <h3 className='text-xl font-semibold mb-2'>Specifications:</h3>
            <ul className='mb-4'>
              {Object.entries(product.specifications).map(([key, value], index) => (
                <li key={index} className='mb-1'><strong>{key}:</strong> {value}</li>
              ))}
            </ul>

            <h3 className='text-xl font-semibold mb-2'>Highlights:</h3>
            <ul className='list-disc pl-5'>
              {product.highlights.map((highlight, index) => (
                <li key={index} className='mb-1'>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className='bg-gray-600 h-[600px] w-full'></div>
        </div>

        {/* Section 3: Salient Features */}
        <div className='flex-grow mx-4 sticky top-10'>
          <div className='p-4 border border-gray-300 rounded-md'>
            <h3 className='text-xl font-semibold mb-2'>Salient Features:</h3>
            <ul className='list-disc pl-5'>
              {product.salientFeatures.map((feature, index) => (
                <li key={index} className='mb-1'>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Shipping and Selling Info */}
          <div className='p-4 border border-gray-300 rounded-md mt-4'>
            <h3 className='text-xl font-semibold mb-2'>Shipping & Selling Info:</h3>
            <ul className='list-disc pl-5'>
              <li className='flex items-center gap-2 mb-1'><FaShippingFast className='text-blue-600 text-xl' /> Ships from: {product.shippingInfo.shipsFrom}</li>
              <li className='flex items-center gap-2'><MdOutlineStore className='text-blue-600 text-xl' /> Sold by: {product.shippingInfo.soldBy}</li>
            </ul>
          </div>
          <div className='mt-5'>
          <AdBanner type={2} setType={"300px"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription2;
