// src/pages/AllProducts.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products"); // Update your API endpoint if needed
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    // <div className="min-h-screen bg-gray-100 p-8">
    //   <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">🛒 All Products</h1>
    //   {products.length === 0 ? (
    //     <p className="text-center text-gray-600">Loading products...</p>
    //   ) : (
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {products.map((product) => (
    //         <div key={product._id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    //           <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
    //           <p><strong>Brand:</strong> {product.brand}</p>
    //           <p><strong>Origin:</strong> 
    //             {product.origin?.country}, {product.origin?.region}
    //           </p>
    //           <p><strong>Rating:</strong> ⭐ {product.rating || "N/A"}</p>
    //           <p><strong>Barcode:</strong> {product.barcode}</p>
    //           <p><strong>Authenticity:</strong> ✅ Verified</p>
    //           <p className="text-sm text-gray-500 mt-2">Added on: {new Date(product.createdAt).toLocaleDateString()}</p>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">🛒 All Product Listings</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Loading product information...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Product Image */}
            <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                    e.target.src = "https://m.media-amazon.com/images/I/51Br-KH59tL.jpg";
                }}
                className="w-60 h-56 object-cover"
            />


              {/* Product Info */}
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600"><strong>Brand:</strong> {product.brand}</p>
                <p className="text-sm text-gray-600">
                  <strong>Origin:</strong> {product.origin?.country}, {product.origin?.region}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Barcode:</strong> {product.barcode || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Rating:</strong> ⭐ {product.rating || "Not Rated"}
                </p>
                <p className="text-sm text-gray-500">
                  Added: {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
