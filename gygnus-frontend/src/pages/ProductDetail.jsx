import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://gygnus-backend.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    // src/pages/ProductDetail.jsx

<div className="min-h-screen bg-pink-50 py-12 px-6">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-96 object-cover rounded-lg"
    />
    <div>
      <h2 className="text-3xl font-bold text-pink-800 mb-2">{product.name}</h2>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-pink-600 mb-6">₹{product.price}</p>
      <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full shadow">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  );
}

export default ProductDetail;
