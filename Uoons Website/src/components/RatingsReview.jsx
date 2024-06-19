import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './RatingsReview.css'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import d from '../assets/4.png'

const RatingsReviews = () => {
  return (
    <div className='bg-white flex gap-5 items-start rounded-[16px] p-3 my-8 shadow-lg relative w-[95%]'>
      <div className="ratings-reviews-section w-[351px] p-4 sticky top-[120px] border rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>
        <div className="overall-rating text-xl mb-2">
          <span className="rating-value text-4xl font-bold text-yellow-500">4.7</span>
          <span className="rating-count text-lg text-gray-600 ml-2">Based on 1234 Ratings</span>
        </div>
        <div className="stars flex mb-4">
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStarHalfAlt className="text-yellow-500 text-xl" />
        </div>
        <div className="review-summary mb-6">
          <div className="review-item flex justify-between mb-1">
            <span className="review-count font-bold">789</span>
            <span className="review-text text-gray-600">5 Stars</span>
          </div>
          <div className="review-item flex justify-between mb-1">
            <span className="review-count font-bold">321</span>
            <span className="review-text text-gray-600">4 Stars</span>
          </div>
          <div className="review-item flex justify-between mb-1">
            <span className="review-count font-bold">56</span>
            <span className="review-text text-gray-600">3 Stars</span>
          </div>
          <div className="review-item flex justify-between mb-1">
            <span className="review-count font-bold">34</span>
            <span className="review-text text-gray-600">2 Stars</span>
          </div>
          <div className="review-item flex justify-between mb-1">
            <span className="review-count font-bold">34</span>
            <span className="review-text text-gray-600">1 Star</span>
          </div>
        </div>
        <div className="customer-reviews">
          <div className="customer-review mb-6">
            <span className="customer-name font-bold">John Doe</span>
            <span className="review-date text-sm text-gray-600 ml-2">10 Jun, 2024</span>
            <div className="stars flex my-2">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStarHalfAlt className="text-yellow-500 text-xl" />
            </div>
            <p className="review-text text-lg">Great phone with excellent battery life.</p>
          </div>
          <div className="customer-review mb-6">
            <span className="customer-name font-bold">Jane Smith</span>
            <span className="review-date text-sm text-gray-600 ml-2">8 Jun, 2024</span>
            <div className="stars flex my-2">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStarHalfAlt className="text-yellow-500 text-xl" />
            </div>
            <p className="review-text text-lg">Loving the camera quality and the display.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RatingsReviews;
