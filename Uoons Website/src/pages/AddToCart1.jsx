import React, { useState } from 'react';
import { FiTruck, FiPhone, FiMessageCircle, FiGift } from 'react-icons/fi';
import Header from '../components/Header'; 

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
};

const ProductItem = ({ imgSrc, title, price, quantity, onIncrement, onDecrement }) => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center">
      <img src={imgSrc} alt="Product" className="w-20 h-20 rounded-lg mr-4"/>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">Brand: {product.brand}</p>
      </div>
    </div>
    <div className="flex items-center">
      <span className="text-lg mr-8">₹{price}</span>
      <div className="flex items-center border px-2 rounded-lg">
        <button onClick={onDecrement} className="px-2">-</button>
        <span className="px-4">{quantity}</span>
        <button onClick={onIncrement} className="px-2">+</button>
      </div>
      <span className="text-lg ml-8">₹{(price * quantity).toFixed(2)}</span>
    </div>
  </div>
);

const UtilitySection = () => (
  <div className="flex justify-around mt-8">
    <UtilityItem icon={<FiTruck size={24} />} title="Free Shipping" description="When you spend $50+" />
    <UtilityItem icon={<FiPhone size={24} />} title="Call Us Anytime" description="+34 555 5555" />
    <UtilityItem icon={<FiMessageCircle size={24} />} title="Chat With Us" description="We offer 24-hour chat support" />
    <UtilityItem icon={<FiGift size={24} />} title="Gift Cards" description="For your loved one, in any amount" />
  </div>
);

const UtilityItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span>{title}</span>
    <span>{description}</span>
  </div>
);

const CartSummary = ({ total }) => (
  <div className="bg-yellow-100 p-4 rounded-lg">
    <div className="flex justify-between mb-2">
      <span>Cart Subtotal</span>
      <span>₹{total}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Design by Fluttertop</span>
      <span>Free</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Discount</span>
      <span>₹{total * 0.1}</span> {/* Assuming a fixed 10% discount */}
    </div>
    <div className="flex justify-between font-bold text-lg">
      <span>Cart Total</span>
      <span>₹{total - (total * 0.1)}</span>
    </div>
    <button className="bg-black text-white w-full py-2 rounded-lg mt-4">Buy Now</button>
  </div>
);

const AddToCart1 = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const totalPrice = product.price * quantity;

  return (
    <div className='flex flex-col w-full items-center bg-blue-100'>
      <Header />
      <div className="bg-blue-100 w-[95%] my-5 relative">
        <div className="mx-auto flex">
          <div className="w-3/4 p-6 bg-white rounded-2xl shadow-lg mr-8">
            <h2 className="text-3xl font-bold mb-4">Shopping Bag</h2>
            <p className="text-lg mb-6">1 item in your bag.</p>
            <div className="border-b pb-4 mb-4">
              <ProductItem
                imgSrc={product.images[0]}
                title={product.name}
                price={product.price}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </div>
          </div>
          <div className="w-1/4 bg-white rounded-2xl shadow-lg p-6">
            <CartSummary total={totalPrice} />
          </div>
        </div>
        <UtilitySection />
      </div>
    </div>
  );
};

export default AddToCart1;
