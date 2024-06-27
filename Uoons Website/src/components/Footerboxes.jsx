import React from 'react';
import { FaStar } from 'react-icons/fa';

const data = [
    {
      "category": "Power Tools",
      "products": [
        { "name": "Makita Power Drill", "brand": "Makita", "price": 2500 },
        { "name": "Dewalt Angle Grinder", "brand": "Dewalt", "price": 3200 },
        { "name": "Stanley Power Tool Kit", "brand": "Stanley", "price": 4500 },
        { "name": "Bosch Cordless Drill", "brand": "Bosch", "price": 3800 }
      ]
    },
    {
      "category": "LED & Lighting",
      "products": [
        { "name": "Crompton LED Bulb", "brand": "Crompton", "price": 150 },
        { "name": "Bajaj LED Flood Light", "brand": "Bajaj", "price": 1200 },
        { "name": "Eveready LED Flashlight", "brand": "Eveready", "price": 800 },
        { "name": "Surya LED Panel Light", "brand": "Surya", "price": 500 }
      ]
    },
    {
      "category": "Electricals",
      "products": [
        { "name": "Polycab Wire", "brand": "Polycab", "price": 2000 },
        { "name": "GM Switch", "brand": "GM", "price": 150 },
        { "name": "Exide Battery", "brand": "Exide", "price": 4500 },
        { "name": "Anchor Switch", "brand": "Anchor", "price": 120 }
      ]
    },
    {
      "category": "IT & Electronics",
      "products": [
        { "name": "Intex Mobile Phone", "brand": "Intex", "price": 7000 },
        { "name": "Sandisk USB Flash Drive", "brand": "Sandisk", "price": 600 },
        { "name": "Logitech Wireless Mouse", "brand": "Logitech", "price": 800 },
        { "name": "Samsung Tablet", "brand": "Samsung", "price": 15000 }
      ]
    },
    {
      "category": "Home Appliances",
      "products": [
        { "name": "LG Refrigerator", "brand": "LG", "price": 25000 },
        { "name": "Samsung Washing Machine", "brand": "Samsung", "price": 18000 },
        { "name": "Philips Mixer Grinder", "brand": "Philips", "price": 3000 },
        { "name": "Bajaj Electric Kettle", "brand": "Bajaj", "price": 1200 }
      ]
    },
    {
      "category": "Audio & Video",
      "products": [
        { "name": "Sony Home Theater", "brand": "Sony", "price": 15000 },
        { "name": "Bose Bluetooth Speaker", "brand": "Bose", "price": 12000 },
        { "name": "LG LED TV", "brand": "LG", "price": 40000 },
        { "name": "JBL Soundbar", "brand": "JBL", "price": 10000 }
      ]
    },
    {
      "category": "Computer Accessories",
      "products": [
        { "name": "HP Laptop", "brand": "HP", "price": 50000 },
        { "name": "Dell Monitor", "brand": "Dell", "price": 10000 },
        { "name": "Logitech Keyboard", "brand": "Logitech", "price": 1500 },
        { "name": "Seagate External Hard Drive", "brand": "Seagate", "price": 5000 }
      ]
    },
    {
      "category": "Smart Home Devices",
      "products": [
        { "name": "Amazon Echo Dot", "brand": "Amazon", "price": 4500 },
        { "name": "Google Nest Thermostat", "brand": "Google", "price": 12000 },
        { "name": "Philips Hue Smart Bulb", "brand": "Philips", "price": 2000 },
        { "name": "Ring Video Doorbell", "brand": "Ring", "price": 10000 }
      ]
    },
    {
      "category": "Wearable Technology",
      "products": [
        { "name": "Apple Watch", "brand": "Apple", "price": 35000 },
        { "name": "Fitbit Charge 4", "brand": "Fitbit", "price": 10000 },
        { "name": "Samsung Galaxy Watch", "brand": "Samsung", "price": 25000 },
        { "name": "Garmin Forerunner", "brand": "Garmin", "price": 20000 }
      ]
    },
    {
      "category": "Gaming",
      "products": [
        { "name": "Sony PlayStation 5", "brand": "Sony", "price": 50000 },
        { "name": "Xbox Series X", "brand": "Microsoft", "price": 49000 },
        { "name": "Nintendo Switch", "brand": "Nintendo", "price": 30000 },
        { "name": "Razer Gaming Mouse", "brand": "Razer", "price": 4000 }
      ]
    }
  ]
  

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">{product.brand}</p>
      <p className="text-gray-900 font-semibold">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="w-full flex flex-wrap justify-center p-4 bg-gray-100">
      {data.map(category => (
        category.products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))
      ))}
    </div>
  );
};

export default ProductList;
