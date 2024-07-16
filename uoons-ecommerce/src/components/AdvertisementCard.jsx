import React from 'react';

function AdvertisementCard({ data }) {
  return (
    <div className="h-72 w-56 bg-gray-50 p-3 flex flex-col items-center justify-start border rounded-lg overflow-hidden hover:shadow-2xl relative">
      <div className="flex flex-col h-72 justify-start items-center overflow-hidden">
        <div className="w-44 h-40 relative rounded-lg">
          <img src={data.image} className="h-40 object-contain" alt={data.title} />
        </div>
        <div className="w-48 overflow-hidden h-10 text-sm text-center mt-2">{data.title}</div>
        <div className="flex flex-col justify-end items-center mt-2">
          <span className="text-green-600">Sponsored by {data.sponsored_by}</span>
        </div>
        <span className="text-xs text-red-500 mt-2">{data.tags}</span>
      </div>
    </div>
  );
}

export default AdvertisementCard;
