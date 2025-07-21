// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    fetch("https://gygnus-backend.onrender.com/api/products") // or your deployed backend URL
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    // src/pages/Home.jsx (or wherever you're rendering product list)

<div className="bg-gradient-to-b from-white to-pink-50 min-h-screen py-10 px-4">
  <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">💎 Featured Jewelry</h1>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <Link key={product._id} to={`/product/${product._id}`}>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-2xl" referrerPolicy="no-referrer" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-pink-700">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-1">₹{product.price}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

  );
};

export default Home;
