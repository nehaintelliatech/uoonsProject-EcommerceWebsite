import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { MdOutlineStarPurple500, MdOutlineStarBorderPurple500, MdOutlineLocalOffer, MdOutlineStore } from 'react-icons/md';
import { TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { FaShoppingCart, FaCreditCard, FaShippingFast } from 'react-icons/fa';
import { BiSolidOffer } from 'react-icons/bi';
import EMI from '../assets/credit.png'; // Ensure you have the EMI image in the correct path
import AdBanner from '../components/AdBanner';
import './ProductDescription.css'
// import RatingsReviews from '../components/RatingsReview';
import FrequentlyBought from '../components/FrequentlyBought';
import SampleDesc from '../assets/msiSampleDescription.jpg'
import CardContainer from '../components/CardContainer';
import RatingAndReview from '../components/RatingAndReview';
import NewFooter from '../components/NewFooter';


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
  ],
  shippingInfo: {
    shipsFrom: "Uoons",
    soldBy: "GADGETRON"
  }
};



const ProductDescription = () => {
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
      <div className='bg-white flex w-[95%] items-start rounded-[16px] p-3 my-4 shadow-lg relative'>
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
              <div className='flex text-xl gap-1'>
                {[...Array(5)].map((_, index) => (
                  index < product.rating ? <MdOutlineStarPurple500 key={index} className='text-yellow-400'/> : <MdOutlineStarBorderPurple500 key={index} />
                ))}
              </div>
              <p className='text-xl'>({product.rating.toFixed(1)})</p>
              <p className='text-blue-800 underline text-lg ml-2 cursor-pointer'>{product.reviews} reviews</p>
            </div>

            <div className='flex gap-4 mt-2 '>
              <span className='flex items-center text-lg'><TbTruckDelivery className='mr-1 text-blue-600 text-xl' /> Free Shipping</span>
              <span className='flex items-center text-lg'><TbTruckReturn className='mr-1 text-blue-600 text-xl' /> Free 30-day returns</span>
            </div>

            <div className='border-t pt-4 mt-4 '>
              <p className='text-3xl flex gap-1 items-end'>₹{product.price.toLocaleString()}<span className='line-through text-lg text-gray-500'>₹{product.originalPrice.toLocaleString()}</span></p>
              <p className='text-green-600 text-2xl'>{product.discount}% OFF</p>
              <p>Inclusive of all taxes</p>
              <div className='flex items-center text-xl my-3'>
                <img src={EMI} alt="EMI" className='w-[1.3rem] object-contain'/>
                <p className='text-sm ml-2'><span className='font-bold'>EMI</span> Available from {product.emi}</p>
              </div>
            </div>

            <div className='mt-4'>
              <p className='text-lg font-semibold'>Availability: <span className='text-green-600'>In Stock</span></p>
              <p className='text-lg my-3'>Delivering to Indore 452001 - <a href="#" className='text-blue-800 underline'>Update location</a></p>
              <div className='flex items-center mt-2'>
                <p className='text-lg'>Set Quantity:</p>
                <button 
                  className='ml-2 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300' 
                  onClick={decrementQuantity}
                >-</button>
                <span className='mx-4 text-lg font-medium text-gray-800'>{quantity}</span>
                <button 
                  className='px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300' 
                  onClick={incrementQuantity}
                >+</button>
              </div>

            </div>

            <div className='mt-3'>
  <p className='text-lg font-semibold mb-4'>Size & Style:</p>
  <div className='flex gap-6 items-center'>
    <div className='relative'>
      <select 
        value={selectedSize} 
        onChange={(e) => setSelectedSize(e.target.value)} 
        className='border border-gray-300 rounded-lg p-3 w-48 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 appearance-none'
      >
        <option value="8GB RAM">8GB RAM</option>
        <option value="16GB RAM">16GB RAM</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
        </svg>
      </div>
    </div>

    <div className='relative'>
      <select 
        value={selectedStyle} 
        onChange={(e) => setSelectedStyle(e.target.value)} 
        className='border border-gray-300 rounded-lg p-3 w-64 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300 appearance-none'
      >
        <option value="Intel Core i5-11260H">Intel Core i5-11260H</option>
        <option value="Intel Core i7-11800H">Intel Core i7-11800H</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
        </svg>
      </div>
    </div>
  </div>
</div>




            <div className='mt-4 flex gap-4 sticky top-[120px] bg-white py-4'>
              <button className='flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md text-lg'>
                <FaShoppingCart className='mr-2' /> Add to Cart
              </button>
              <button className='flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md text-lg'>
                <FaCreditCard className='mr-2' /> Buy Now
              </button>
            </div>

            <div className='mt-5 p-6 bg-white rounded-lg shadow-lg'>
  <h2 className='flex items-center text-2xl gap-1 text-gray-800 font-bold mb-4'><BiSolidOffer className='text-orange-600 text-2xl'/>OFFERS(12)</h2>
  <ul className='flex flex-col gap-2 my-1'>
    <li className='flex items-center gap-1 mb-2 text-gray-800'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 250 Instant Discount on OneCard Credit Card Non-EMI Txn. Minimum purchase value ₹7,500</li>
    <li className='flex items-center gap-1 mb-2 text-gray-800'><MdOutlineLocalOffer className='text-green-600 text-xl'/>10% Instant Discount up to INR 1500 on HSBC Credit Card Non EMI Trnxs. Minimum purchase value ₹15,000</li>
    <li className='flex items-center gap-1 mb-2 text-gray-800'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Flat INR 2750 Instant Discount on OneCard Credit Card EMI Txn. Minimum purchase value ₹1,00,000</li>
    <li className='flex items-center gap-1 mb-2 text-gray-800'><MdOutlineLocalOffer className='text-green-600 text-xl'/>Get GST invoice and save up to 28% on business purchases.</li>
  </ul>
  <button className='bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition duration-300 mt-4'>See all!</button>
</div>


            <div className='mt-5 p-6 bg-white rounded-lg shadow-lg'>
  <h2 className='flex items-center text-2xl gap-1 text-gray-800 font-bold mb-4'>Apply Coupons</h2>
  <div className='flex gap-4'>
    <input 
      type='text' 
      value={coupon} 
      onChange={(e) => setCoupon(e.target.value)} 
      className='border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200 transition duration-300 placeholder-gray-500' 
      placeholder='Enter coupon code' 
    />
    <button 
      onClick={handleApplyCoupon} 
      className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition duration-300'
    >
      Apply
    </button>
  </div>
  {appliedCoupon && (
    <p className='mt-4 text-green-600 font-medium'>Coupon "{appliedCoupon}" applied successfully!</p>
  )}
</div>


<div className='mt-8 p-6 bg-white rounded-lg shadow-lg'>
  <h2 className='flex items-center text-2xl gap-1 text-gray-800 font-bold mb-4'>Description</h2>
  <p className='text-gray-800 mb-4'>{product.description} Lor1em ipsum dolor sit amet consectetur, adipisicing elit. Labore consequatur officiis provident maxime, minima a perspiciatis amet. Reiciendis enim at libero amet, eius quos nobis neque exercitationem volupta.</p>

  <div className='w-full bg-gray-100'>
    <div className='flex flex-col gap-5 my-7'>
      <img src={SampleDesc} alt="" className='w-full object-contain'/>
      <div>
Lorem ipsum dolor in perferendis ullam doloribus quam temporibus necessitatibus ipsa sed id, molestias labore aliquid quod magnam commodi? Ea nulla natus unde impedit voluptatem dolores modi illo, facilis incidunt mollitia minima ipsam aut sit officiis vero animi nihil totam illum neque repudiandae et quisquam eos delectus. Eaque, dicta vel. Corporis iusto fugiat eveniet veritatis in provident animi modi facilis velit beatae! Et dolores mollitia exercitationem est quam repellendus, voluptatibus natus ut expedita maxime laboriosam nesciunt suscipit, hic, nemo recusandae qui quidem quae fugiat aliquam ullam. Deserunt laudantium itaque iste necessitatibus, consequatur natus quos odit laborum ad dicta corrupti beatae veniam, perspiciatis commodi possimus. Eum voluptate voluptatibus, vel nihil repudiandae illo hic unde beatae iusto aspernatur laborum dolorum alias libero adipisci rem odio eveniet suscipit.
      </div>
    </div>
  </div>

  <div className='w-full bg-gray-100'>
    <div className='flex flex-col gap-5 my-7'>
      <img src={SampleDesc} alt="" className='w-full object-contain'/>
      <div>
Lorem ipsum dolor in perferendis ullam doloribus quam temporibus necessitatibus ipsa sed id, molestias labore aliquid quod magnam commodi? Ea nulla natus unde impedit voluptatem dolores modi illo, facilis incidunt mollitia minima ipsam aut sit officiis vero animi nihil totam illum neque repudiandae et quisquam eos delectus. Eaque, dicta vel. Corporis iusto fugiat eveniet veritatis in provident animi modi facilis velit beatae! Et dolores mollitia exercitationem est quam repellendus, voluptatibus natus ut expedita maxime laboriosam nesciunt suscipit, hic, nemo recusandae qui quidem quae fugiat aliquam ullam. Deserunt laudantium itaque iste necessitatibus, consequatur natus quos odit laborum ad dicta corrupti beatae veniam, perspiciatis commodi possimus. Eum voluptate voluptatibus, vel nihil repudiandae illo hic unde beatae iusto aspernatur laborum dolorum alias libero adipisci rem odio eveniet suscipit.
      </div>
    </div>
  </div>
    
</div>

<div className='mt-8 p-6 bg-white rounded-lg shadow-lg'>
  <h2 className='flex items-center text-2xl gap-1 text-gray-800 font-bold mb-4'>Additional Information</h2>

  {/* Product Specifications */}
  <div className='bg-gray-100 p-6 rounded-lg shadow-lg mt-4'>
    <table className='w-full text-left text-gray-800 mb-4'>
      <tbody>
        {Object.entries(product.specifications).slice(0, showAllSpecs ? undefined : 5).map(([key, value], index) => (
          <tr className='border-b odd:bg-white' key={index}>
            <th className='py-2 pr-4 font-medium'>{key}</th>
            <td className='py-2'>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {showAllSpecs ? (
      <button 
        onClick={() => setShowAllSpecs(false)} 
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition duration-300'
      >
        See Less
      </button>
    ) : (
      <button 
        onClick={() => setShowAllSpecs(true)} 
        className='bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-md transition duration-300'
      >
        See More
      </button>
    )}
  </div>
</div>



           




            <FrequentlyBought />
          </div>

        </div>

        {/* Section 3: Salient Features */}
        <div className=' mx-2 sticky top-[120px] w-[300px]'>
          <div className='p-4 border border-gray-300 rounded-md  w-[300px]'>
            <h3 className='text-xl font-semibold mb-2 text-orange-600'>Salient Features:</h3>
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
          <div className='border border-gray-300 rounded-md mt-4'>
            <AdBanner type={2} setType={"300px"}/>
          </div>
        </div>
      </div>

      

      <div className=" flex w-[95%] justify-between items-center">
        <CardContainer product={product} heading={"Similar Product"}/>
        <AdBanner type={2} setType={"364px"}/>
      </div>

      <div className=" flex w-[95%] justify-between items-center">
        <AdBanner type={2} setType={"364px"}/>
        <CardContainer product={product} heading={"Recently Viewed"}/>
      </div>


      <RatingAndReview  className="w-[95%]"/>
      <NewFooter />

    </div>
  );
};

export default ProductDescription;