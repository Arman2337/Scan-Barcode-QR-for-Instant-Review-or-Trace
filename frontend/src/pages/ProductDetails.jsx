// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function ProductDetails() {
//   const { code } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${code}`);
//         if (res.data) {
//           setProduct(res.data);
//         } else {
//           setNotFound(true);
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setNotFound(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [code]);

//   if (loading) return <div className="p-4 text-center text-gray-600">Loading product info...</div>;

//   if (notFound) {
//     return (
//       <div className="p-4 text-center text-red-600">
//         ❌ Product not found for code: <strong>{code}</strong>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
//       <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
//       <p className="text-gray-600 mb-4">{product.description}</p>

//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//         <p><strong>Brand:</strong> {product.brand}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Origin:</strong> {product.origin}</p>
//         <p><strong>Authenticity:</strong> {product.authentic ? '✅ Verified' : '❌ Unverified'}</p>
//         <p><strong>Code:</strong> {code}</p>
//       </div>

//       {product.sustainability && (
//         <div className="mt-4 bg-green-100 p-2 rounded">
//           <p className="text-green-800"><strong>Sustainability:</strong> {product.sustainability}</p>
//         </div>
//       )}

//       {/* Optionally add customer reviews or buttons here */}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function ProductDetails() {
//   const { code } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${code}`);
//         if (res.data) {
//           setProduct(res.data);
//         } else {
//           navigate('/not-found');
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         navigate('/not-found'); // Redirect if error occurs (like 404)
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [code, navigate]);

//   if (loading) return <div className="p-4 text-center text-gray-600">Loading product info...</div>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
//       <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
//       <p className="text-gray-600 mb-4">{product.description}</p>

//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//         <p><strong>Brand:</strong> {product.brand}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Origin:</strong> {product.origin}</p>
//         <p><strong>Authenticity:</strong> {product.authentic ? '✅ Verified' : '❌ Unverified'}</p>
//         <p><strong>Code:</strong> {code}</p>
//       </div>

//       {product.sustainability && (
//         <div className="mt-4 bg-green-100 p-2 rounded">
//           <p className="text-green-800"><strong>Sustainability:</strong> {product.sustainability}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function ProductDetails() {
//   const { code } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/products/${code}`);
//         if (res.data) {
//           setProduct(res.data);
//         } else {
//           navigate('/not-found');
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         navigate('/not-found');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [code, navigate]);

//   if (loading) return <div className="p-4 text-center text-gray-600">Loading product info...</div>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
//       {/* ✅ Show Image if Available */}
//       {product.images && product.images.length > 0 && product.images[0] && (
//   <img
//     src={`http://localhost:5000/api/image-proxy?url=${encodeURIComponent(product.images[0])}`}
//     alt={product.name}
//     className="w-full h-64 object-contain mb-4 border rounded"
//     onError={(e) => {
//       e.target.onerror = null;
//       e.target.src = '/default-product.png'; // fallback image path
//     }}
//   />
// )}

//       <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
//       <p className="text-gray-600 mb-4">{product.description}</p>

//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//         <p><strong>Brand:</strong> {product.brand}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Origin:</strong> {product.origin}</p>
//         <p><strong>Authenticity:</strong> {product.authentic ? '✅ Verified' : '❌ Unverified'}</p>
//         <p><strong>Code:</strong> {code}</p>
//       </div>

//       {product.sustainability && (
//         <div className="mt-4 bg-green-100 p-2 rounded">
//           <p className="text-green-800"><strong>Sustainability:</strong> {product.sustainability}</p>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${code}`);
        if (res.data) {
          setProduct(res.data);
        } else {
          navigate('/not-found');
        }
      } catch (err) {
        console.error("Fetch error:", err);
        navigate('/not-found');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [code, navigate]);

  if (loading) return <div className="p-4 text-center text-gray-600">Loading product info...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          {product.images && product.images.length > 0 && product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full max-w-sm h-auto object-contain border rounded"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/default-product.png';
              }}
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No image available
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description || 'No description available.'}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <p><strong>Brand:</strong> {product.brand || 'N/A'}</p>
            <p><strong>Category:</strong> {product.category || 'N/A'}</p>
            <p><strong>Origin:</strong> {product.origin || 'N/A'}</p>
            <p><strong>Code:</strong> {code}</p>
            <p><strong>Authenticity:</strong> {product.authentic ? '✅ Verified' : '❌ Unverified'}</p>
          </div>

          {product.sustainability && (
            <div className="mt-4 bg-green-50 text-green-800 p-3 rounded shadow-inner">
              <strong>Sustainability:</strong> {product.sustainability}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
