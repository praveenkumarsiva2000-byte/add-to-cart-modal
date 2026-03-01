import React from 'react';

export default function Navbar({ count = 0, onOpenCart }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold"
            title="Amart Cloth"
            aria-label="Amart Cloth logo"
          >
            AC
          </div>
          <div>
            <div className="text-lg font-semibold">Amart Cloth</div>
            {/* subtitle removed as requested */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16 11V9a4 4 0 10-8 0v2H6a2 2 0 00-2 2v3a1 1 0 001 1h10a1 1 0 001-1v-3a2 2 0 00-2-2h-0zM8 9a2 2 0 114 0v2H8V9z" />
            </svg>
            Cart
            <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs bg-white text-indigo-700 rounded-full">{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
