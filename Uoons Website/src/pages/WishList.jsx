import React, { useState } from 'react';
import { FiHeart, FiTrash2, FiTruck, FiPhone, FiMessageCircle, FiGift } from 'react-icons/fi';
import Header from '../components/Header';

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
  }
];

const WishList = () => {
  const [wishlist, setWishlist] = useState(wishlistData);

  const removeFromWishlist = (id) => {
    const newWishlist = wishlist.filter(product => product.id !== id);
    setWishlist(newWishlist);
  };

  return (
    <div className='flex flex-col w-full items-center bg-gray-100'>
      <Header />
      <div className="bg-gray-100 w-[95%] my-5 relative">
        <div className="mx-auto flex">
          <div className="w-full p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">My Wishlist</h2>
            <p className="text-lg mb-6 text-center">{wishlist.length} items in your wishlist.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishlist.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 flex flex-col justify-between">
                  <div className="flex">
                    <img src={product.images[0]} alt={product.name} className="w-40 h-40 rounded-lg mr-4" />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xl">{product.name}</h3>
                        <p className="text-gray-600">{product.brand}</p>
                        <p className="text-gray-600">{product.description}</p>

                      {/* Section 3: Salient Features */}
       
            {/* <h3 className='text-xl font-semibold mb-2 text-orange-600'>Salient Features:</h3> */}
            {/* <ul className='list-disc pl-5'> */}
              {product.salientFeatures.map((feature, index) => (
                <li key={index} className='mb-1'>{feature}</li>
              ))}
            {/* </ul> */}
          

                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-bold">₹{product.price}</span>
                        <button onClick={() => removeFromWishlist(product.id)} className="text-red-500 hover:text-red-700">
                          <FiTrash2 size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default WishList;
