import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import './FilterSection.css'; // Import custom CSS for styling

const FilterSection = () => {
    const [priceRange, setPriceRange] = useState([390, 1780]);
    const [discountRange, setDiscountRange] = useState([10, 90]);
    const [rating, setRating] = useState(3);
    const [showMoreBrands, setShowMoreBrands] = useState(false);

    const toggleShowMoreBrands = () => {
        setShowMoreBrands(!showMoreBrands);
    };

    return (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-2xl w-full">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Price</h3>
                <div className="price-slider">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        min={390}
                        max={1780}
                        value={priceRange}
                        onChange={(newRange) => setPriceRange(newRange)}
                        renderThumb={(props, state) => <div {...props}>${state.valueNow}</div>}
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Discount</h3>
                <div className="discount-slider">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        min={10}
                        max={90}
                        value={discountRange}
                        onChange={(newRange) => setDiscountRange(newRange)}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}%</div>}
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Customer Rating</h3>
                <div className="rating-slider">
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        min={1}
                        max={5}
                        step={1}
                        value={rating}
                        onChange={(newRating) => setRating(newRating)}
                        renderThumb={(props, state) => (
                            <div {...props}>
                                {Array.from({ length: state.valueNow }, (_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                        )}
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Interface</h3>
                <div className="space-y-3">
                    {['Bluetooth', 'MicroUSB', 'PS/2', 'USB', 'Wi-Fi'].map((interfaceType, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-300" />
                            <span>{interfaceType}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Connection</h3>
                <div className="space-y-3">
                    {['Wireless', 'Wired', 'Combined'].map((connectionType, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-300" />
                            <span>{connectionType}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Mouse Size</h3>
                <div className="space-y-3">
                    {['Large', 'Medium', 'Small'].map((size, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-300" />
                            <span>{size}</span>
                        </label>
                    ))}
                </div>
            </div>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Brand</h3>
                <div className="space-y-3">
                    {['Apple', 'Honor', 'I Kall', 'Infinix', 'Itel'].map((brand, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-300" />
                            <span>{brand}</span>
                        </label>
                    ))}
                    {showMoreBrands && (
                        <div className="space-y-3">
                            {['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5'].map((brand, index) => (
                                <label key={index} className="flex items-center space-x-3">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-300" />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    )}
                    <button onClick={toggleShowMoreBrands} className="flex items-center text-blue-600">
                        {showMoreBrands ? 'Show Less' : 'Show More'} 
                        {showMoreBrands ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
