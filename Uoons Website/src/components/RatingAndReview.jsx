import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FilterSection = () => {
    const [priceRange, setPriceRange] = useState([3499, 199900]);
    const [showMoreBrands, setShowMoreBrands] = useState(false);

    const toggleShowMoreBrands = () => {
        setShowMoreBrands(!showMoreBrands);
    };

    return (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Price</h3>
                <div className="flex items-center space-x-4">
                    <input 
                        type="range" 
                        min="3499" 
                        max="199900" 
                        value={priceRange[0]} 
                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} 
                        className="w-full"
                    />
                    <input 
                        type="range" 
                        min="3499" 
                        max="199900" 
                        value={priceRange[1]} 
                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} 
                        className="w-full"
                    />
                </div>
                <div className="flex justify-between mt-2 text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
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
