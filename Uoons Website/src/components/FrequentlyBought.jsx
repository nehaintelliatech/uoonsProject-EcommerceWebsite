import React from 'react';
import { FaShoppingCart, FaCreditCard, FaTags } from 'react-icons/fa';
import './FrequentlyBought.css';

const frequentlyBoughtTogether = [
  {
    name: "USB Optical Mouse, USB 2.0 - Black",
    image: "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg",
    price: 149
  },
  {
    name: "Gaming Chair from Rekart, RGC-08 PU + PVC Black Frame",
    image: "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg",
    price: 9985
  },
  {
    name: "HP 15-DA3001TU Laptop",
    image: "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg",
    price: 35499
  }
];

const FrequentlyBought = () => {
  const totalPrice = frequentlyBoughtTogether.reduce((total, item) => total + item.price, 0);
  const discount = 1000; // Discount offer
  const discountedPrice = totalPrice - discount;

  return (
    <div className='fbt-container bg-white p-6 rounded-lg shadow-lg w-[95%] my-8 mx-auto'>
      <h2 className='font-bold text-2xl mb-6 text-center text-gray-800'>Frequently Bought Together</h2>
      <div className='fbt-items flex items-center justify-center flex-wrap gap-4'>
        {frequentlyBoughtTogether.map((item, index) => (
          <React.Fragment key={index}>
            <div className='fbt-item flex flex-col items-center text-center p-4 mx-2 bg-gray-50 rounded-md shadow-sm'>
              <img 
                src={item.image} 
                alt={item.name}
                className='w-32 h-32 object-cover mb-3'
              />
              <h3 className='font-bold text-lg h-[84px] overflow-hidden'>{item.name}</h3>
              {item.description && <p className='text-sm text-gray-500'>{item.description}</p>}
              <p className='text-green-700 font-bold text-lg'>Rs. {item.price}</p>
            </div>
            {index < frequentlyBoughtTogether.length - 1 && <span className='text-3xl font-bold mx-4 text-gray-600'>+</span>}
          </React.Fragment>
        ))}
      </div>
      <div className='fbt-total flex flex-col items-center justify-between mt-6'>
        <h3 className='font-bold text-xl mb-2 text-gray-800'>Special Offer:</h3>
        <div className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4'>
          <p className='font-bold text-lg flex items-center'><FaTags className='mr-2' /> Buy all three and save Rs. 1000!</p>
        </div>
        <h3 className='font-bold text-xl mb-2 text-gray-800'>Price for all three:</h3>
        <span className='font-bold text-2xl text-green-700 mb-4 line-through'>Rs. {totalPrice}</span>
        <span className='font-bold text-3xl text-green-700 mb-4'>Rs. {discountedPrice}</span>
        <div className='flex items-center gap-4'>
          <button className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center gap-2'>
            <FaShoppingCart /> Add all three to cart
          </button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center gap-2'>
            <FaCreditCard /> Buy all together
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBought;
