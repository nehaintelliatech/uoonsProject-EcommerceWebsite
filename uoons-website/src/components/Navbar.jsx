import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/xlLogoUoons.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";


const DropdownLinks = [
  {
    id: 1,
    name: "lorem",
    link: "/#",
  },
  {
    id: 2,
    name: "lorem",
    link: "/#",
  },
  {
    id: 3,
    name: "lorem",
    link: "/#",
  },
];

const Navbar = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get('/api/getAllCategories?offset=0', {
          headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'Accept': '*/*',
            'channel-code': 'ANDROID'
          }
        });

        console.log('API Response:', response.data); // Log the response data

        const categoriesArray = response.data.Data.categories;

        console.log('Categories Array:', categoriesArray); // Log the categories array

        setCategoriesData(categoriesArray);
        setLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchCategoriesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="shadow-md bg-white duration-200 relative z-50">
      {/* upper Navbar */}
      <div className="bg-white border border-b-orange-600 p-2 py-3">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-fit" />
            </a>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] md:w-[300px] lg:[450px] sm:group-hover:w-[300px] md:group-hover:w-[400px] lg:group-hover:w-[500px] transition-all duration-300 rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-600   "
              />
              <BiSearchAlt className="text-gray-500 group-hover:text-orange-600 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Profile button */}
            <button
              
              className="bg-orange-600 transition-all duration-200 text-white px-4 py-1 rounded-lg flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Profile
              </span>
              <FaRegUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* cart button */}
            <button
             
              className="bg-blue-600 transition-all duration-200 text-white px-4 py-1 rounded-lg flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Cart
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex justify-center items-center  hidden gap-4 flex-wrap">
          {/* toprated */}
            <li>
              <a
                href="/"
                className="inline-block px-4 hover:text-orange-600 duration-200"
              >
                Top Rated
              </a>
            </li>
          
          {/* Trending Products-Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 hover:text-orange-600">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] border hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className=" cursor-pointer text-blue-700 py-1 ml-auto">
              View All
              </button>
            </div>
          </li>


          {/* Audio-Dropdown and Links */}
          
          {Array.isArray(categoriesData) && categoriesData.length > 0 ? (
          categoriesData.map((category, index) => (
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2 hover:text-orange-600">
              {category.category}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
              {Array.isArray(category.sub_categories) && category.sub_categories.length > 0 && (
                <div className="absolute z-[9999] border hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {category.sub_categories.map((sub, subIndex) => (
                    <li key={subIndex}>{sub.category}</li>
                  ))}
                </ul>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}

     
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
