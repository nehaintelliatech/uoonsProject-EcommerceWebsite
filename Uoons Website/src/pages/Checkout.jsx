import React, { useState } from 'react';
import { FiCreditCard, FiTruck, FiPhone, FiMessageCircle, FiGift } from 'react-icons/fi';
import Header from '../components/Header';

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('debitCreditCard');
  const product = {
    id: 1,
    brand: "MSI",
    name: "MSI Thin GF63 A12VE-071IN",
    price: 50000,
    images: [
      "https://m.media-amazon.com/images/I/51nifWngl-L._SX679_.jpg"
    ]
  };
  const estimatedDelivery = 150; // Assuming ₹150 for delivery charges

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const getTotalPrice = () => {
    return product.price + estimatedDelivery;
  };

  return (
    <div className='flex flex-col w-full items-center bg-gray-100'>
      <Header />
      <div className="bg-gray-100 w-[95%] my-5 relative">
        <div className=" mx-auto flex">
          <div className="w-3/4 p-6 bg-white rounded-2xl shadow-lg mr-8">
            <h2 className="text-3xl font-bold mb-4">Product Checkout</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">Shipping Address</h3>
              <p>2015 N Broadwell Ave, Grand Island, New Hampshire 68803, United States</p>
              <button className="mt-2 text-blue-600">Change</button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">Contact Info</h3>
              <div className="mb-2">
                <label className="block font-bold">Email *</label>
                <input type="email" className="w-full p-2 border rounded-md" value="gayave1968@email.com" readOnly />
              </div>
              <div className="mb-2">
                <label className="block font-bold">Mobile Number *</label>
                <input type="tel" className="w-full p-2 border rounded-md" value="+91-7654-987-777" readOnly />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">Payment Method</h3>
              <div className="mb-4">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={selectedPaymentMethod === 'cashOnDelivery'}
                  onChange={() => handlePaymentMethodChange('cashOnDelivery')}
                />
                <label htmlFor="cashOnDelivery" className="ml-2">Cash on Delivery</label>
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="debitCreditCard"
                  name="paymentMethod"
                  value="debitCreditCard"
                  checked={selectedPaymentMethod === 'debitCreditCard'}
                  onChange={() => handlePaymentMethodChange('debitCreditCard')}
                />
                <label htmlFor="debitCreditCard" className="ml-2">Debit/Credit Card</label>
                {selectedPaymentMethod === 'debitCreditCard' && (
                  <div className="mt-2">
                    <input type="text" className="w-full p-2 mb-2 border rounded-md" placeholder="Card Number" />
                    <div className="flex justify-between">
                      <input type="text" className="w-1/2 p-2 mr-2 border rounded-md" placeholder="MM / YYYY" />
                      <input type="text" className="w-1/2 p-2 ml-2 border rounded-md" placeholder="CVV" />
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="radio"
                  id="netBanking"
                  name="paymentMethod"
                  value="netBanking"
                  checked={selectedPaymentMethod === 'netBanking'}
                  onChange={() => handlePaymentMethodChange('netBanking')}
                />
                <label htmlFor="netBanking" className="ml-2">Net Banking</label>
              </div>
            </div>
          </div>
          
          <div className="w-1/4 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold my-4">Order Details</h3>
            <div className="flex mb-4">
              <img src={product.images[0]} alt={product.name} className="w-20 h-20 rounded-lg mr-4" />
              <div>
                <h4 className="font-bold text-lg">{product.name}</h4>
                <p className="text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold">₹{product.price}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{product.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Estimated Delivery & Handling</span>
                <span>₹{estimatedDelivery}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{getTotalPrice()}</span>
              </div>
            </div>
            <button className='flex mx-auto items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md shadow-md text-lg'>
              <FiCreditCard className='mr-2' /> Make Payment
            </button>
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

export default Checkout;
