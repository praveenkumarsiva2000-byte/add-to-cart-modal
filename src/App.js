import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  function addToCart(product) {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      alert('Product already in cart');
      return;
    }
    setCart((c) => [...c, product]);
  }

  function removeFromCart(productId) {
    setCart((c) => c.filter((p) => p.id !== productId));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar count={cart.length} onOpenCart={() => setIsModalOpen(true)} />

      <main className="max-w-6xl mx-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold mb-4">Products from Fake Store API</h1>

        {loading ? (
          <div className="text-center py-20">Loading products...</div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={() => addToCart(product)} />
            ))}
          </div>
        )}
      </main>

      <footer className="text-center py-4 text-sm text-gray-600">Copyrights reserved by amartcloth @2026</footer>

      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={cart}
        onRemove={removeFromCart}
      />
    </div>
  );
}
