import React, { useState } from 'react';
import Card2 from './Card2';
import SortByButton from './SortByButton';
import Header from './Header';

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('Recommended');
  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating'];

  return (
    <div className="product-list-container bg-gray-100 min-h-screen p-4">
      <Header />
      <div className="sort-and-filter-section flex justify-between items-center mb-4">
        <SortByButton options={sortOptions} selectedOption={sortBy} onChange={setSortBy} />
      </div>
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card2 key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
