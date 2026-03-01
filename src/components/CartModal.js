import React from 'react';

export default function CartModal({ isOpen, onClose, items = [], onRemove }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose}></div>

      <div className="bg-white rounded-lg shadow-lg z-10 max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">Close</button>
        </div>

        <div className="p-4 max-h-80 overflow-auto">
          {items.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty</div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">${item.price}</div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="px-3 py-1 rounded bg-red-600 text-white text-sm">Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-4 py-3 border-t flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Close</button>
        </div>
      </div>
    </div>
  );
}
