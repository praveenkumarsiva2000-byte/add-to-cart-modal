import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <div className="flex-1 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-40 object-contain" />
      </div>
      <div className="mb-2">
        <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>
        <div className="text-indigo-600 font-semibold mt-2">${product.price}</div>
      </div>
      <div className="mt-4">
        <button onClick={onAdd} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
