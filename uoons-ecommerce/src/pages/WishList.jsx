import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './Wishlist.css'; // Import the CSS file

const wishlistData = [
  {
    id: 1,
    brand: "MSI",
    name: "MSI Thin GF63 A12VE-071IN",
    rating: 4.0,
    reviews: 400,
    price: 50000,
    originalPrice: 100000,
    discount: 50,
    images: [
      "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg"
    ],
    description: "MSI GF63 Thin is a lightweight and powerful gaming laptop with Intel Core i5-12450H, 16GB DDR4 memory, and NVIDIA GeForce GTX 1650 Max-Q graphics.",
    salientFeatures: [
      "Intel Core i5-12450H",
      "16GB DDR4 memory",
      "NVIDIA GeForce GTX 1650 Max-Q graphics"
    ],
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
    images: [
      "https://m.media-amazon.com/images/I/41lGKvvMOeL._SX300_SY300_QL70_FMwebp_.jpg"
    ],
    description: "HP Victus Gaming Laptop with 13th Gen Intel Core i5-13420H, 16GB DDR4 memory, and NVIDIA GeForce RTX 2050 graphics.",
    salientFeatures: [
      "13th Gen Intel Core i5-13420H",
      "16GB DDR4 memory",
      "NVIDIA GeForce RTX 2050 graphics"
    ],
  }
];

const WishList = () => {
  const [wishlist, setWishlist] = useState(wishlistData);

  const removeFromWishlist = (id) => {
    const newWishlist = wishlist.filter(product => product.id !== id);
    setWishlist(newWishlist);
  };

  return (
    <div className='flex flex-col w-[95%] items-center bg-blue-100'>
      {/* <Header /> */}
      <div className="bg-blue-100 w-[95%] my-5 relative">
        <div className="mx-auto flex">
          <div className="w-full p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">My Wishlist</h2>
            <p className="text-lg mb-6 text-center">{wishlist.length} items in your wishlist.</p>
            <div className="wishlist-container">
              {wishlist.map((product) => {
                const discountPercentage = ((product.originalPrice - product.price) / product.originalPrice) * 100;
                return (
                  <div key={product.id} className="wishlist-item">
                    <img src={product.images[0]} alt={product.name} className="wishlist-image" />
                    <div className="wishlist-details">
                      <h3>{product.name}</h3>
                      <p>{product.brand}</p>
                      <p>{product.description}</p>

                      <h3 className='text-xl font-semibold mb-2 text-orange-600'>Salient Features:</h3>
                      <ul className='salient-features'>
                        {product.salientFeatures.map((feature, index) => (
                          <li key={index} className='mb-1'>{feature}</li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="price">₹{product.price}</span>
                          <span className="original-price">₹{product.originalPrice}</span>
                          <span className="discount">({Math.round(discountPercentage)}% off)</span>
                        </div>
                        <button onClick={() => removeFromWishlist(product.id)} className="remove-button">
                          <FiTrash2 size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
