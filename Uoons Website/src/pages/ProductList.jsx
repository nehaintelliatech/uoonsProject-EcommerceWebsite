import React from 'react';
import FilterSection from './FilterSection';
import Card2 from '../components/Card2';
import Header from '../components/Header';
import { FaList, FaTh } from 'react-icons/fa';
import NewFooter from '../components/NewFooter';

const ProductList = () => {
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

  return (
    <>
      <div className='flex flex-col w-full items-center bg-blue-100 relative'>
        <Header />
        {/* <div className='bg-white flex w-[95%] items-start rounded-[16px] p-3 my-4 shadow-lg relative'></div> */}
        <div className='flex w-[95%] items-start rounded-[16px] p-3 my-4 shadow-lg bg-white'>
        <div className='w-[370px]'>
          <FilterSection />
          
        </div>
        <div className='bg-white flex flex-col justify-center items-center p-3 my-4 shadow-lg rounded-[16px]'>
          <div className='flex w-full justify-between items-center mb-4'>
            <span className='text-lg font-semibold'>146 results found for "Gaming Mouse"</span>
            <select className='p-2 border rounded'>
              <option value="recommended">Sort by Recommended</option>
              <option value="priceLowToHigh">Sort by Price: Low to High</option>
              <option value="priceHighToLow">Sort by Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
          <div className='flex flex-wrap justify-evenly w-full gap-y-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ].map((item) => {
              return <Card2 key={item} product={product} />
            })}
          </div>
        </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
}

export default ProductList;
