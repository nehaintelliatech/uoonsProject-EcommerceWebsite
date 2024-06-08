import React from 'react'
import { useState, useRef } from 'react'
import Header from '../components/Header'

const product = {
  name: "MSI Thin GF63 A12VE-071IN",
  images: [
    "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/41ZTSKvhmZL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/317pB2MO57L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/81TurWp5IdL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71Wy96L0h1L._SX679_.jpg"
  ]
};

const ProductDescription = () => {

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [zoomBackgroundPosition, setZoomBackgroundPosition] = useState('0% 0%');
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

  return (
    <div className='flex flex-col w-full items-center bg-blue-100'>
        <Header />



 
    <div className='bg-white flex w-[95%] items-center rounded-[16px] p-2 my-8'>
      {/* Section 1: Product Image and Image Catalogue */}
      <div className='flex flex-col items-center relative'>
        {/* Main Product Image */}
        <div 
          className='relative w-[300px] h-[300px] overflow-hidden'
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
        <div className='flex mt-2'>
          {product.images.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Product Thumbnail ${index}`}
              className='w-16 h-16 cursor-pointer mx-1 border border-gray-300'
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Section 2: Placeholder for Future Content */}
      <div className='flex-grow mx-4 relative'>
        {/* Zoom Window */}
        <div 
          ref={zoomRef}
          className='absolute top-0 left-0 w-full h-full bg-no-repeat bg-white border border-gray-300'
          style={zoomStyle}
        ></div>

        <div className='h-[400px]'></div>
      </div>

      {/* Section 3: Placeholder for Future Content */}
      <div className='flex-grow mx-4'></div>
    </div>



    </div>
  )
}

export default ProductDescription
