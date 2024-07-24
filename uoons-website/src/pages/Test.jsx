import React, { useRef } from 'react';

const ScrollableGrid = () => {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollLeft} className="px-4 py-2 bg-blue-500 text-white">Scroll Left</button>
      <button onClick={scrollRight} className="px-4 py-2 bg-blue-500 text-white">Scroll Right</button>
      
      <div 
        ref={gridRef} 
        className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 overflow-x-auto whitespace-nowrap" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 200px)', gridAutoRows: '1fr', overflowX: 'auto' }}
      >
        <div className="bg-gray-200 p-4">Item 1</div>
        <div className="bg-red-200 p-4">Item 2</div>
        <div className="bg-blue-200 p-4">Item 3</div>
        <div className="bg-orange-200 p-4">Item 4</div>
        <div className="bg-pink-200 p-4">Item 5</div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default ScrollableGrid;
