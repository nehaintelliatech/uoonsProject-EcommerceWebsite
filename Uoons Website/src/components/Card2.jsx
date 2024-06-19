import React from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Card2 = ({ product }) => {
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => <FaStar key={`full-${index}`} className="text-yellow-500" />)}
        {[...Array(halfStars)].map((_, index) => <FaStarHalfAlt key={`half-${index}`} className="text-yellow-500" />)}
        {[...Array(emptyStars)].map((_, index) => <FaRegStar key={`empty-${index}`} className="text-yellow-500" />)}
      </>
    );
  };

  return (
    <div className="card bg-white p-4 flex flex-col items-center justify-start border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative h-80 w-64">
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
        <button className="like-button absolute top-2 right-2 p-2 rounded-full bg-orange-600 text-white hover:text-red-500 transition-colors duration-300 shadow-md">
          <FaHeart />
        </button>
      </div>
      <div className="text-center font-semibold text-lg text-gray-800 truncate w-full mb-2">{product.name}</div>
      <div className="flex items-center justify-center mb-2">
        {renderRatingStars(product.rating)}
        <span className="ml-2 text-gray-400">({product.reviews})</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
          <span className="line-through text-gray-500 ml-2">₹{product.originalPrice}</span>
        </div>
      </div>
      {/* <button className="add-to-cart absolute bottom-4 p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors duration-300 shadow-md">
        <FaShoppingCart />
      </button> */}
    </div>
  );
};

export default Card2;
