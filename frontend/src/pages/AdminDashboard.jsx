


// import { useEffect, useState } from 'react';

// export default function AdminDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     brand: '',
//     barcode: '',
//     sustainability: '',
//     image: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
//     setProducts(prev => prev.filter(p => p._id !== id));
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:5000/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newProduct)
//     });

//     if (res.ok) {
//       const createdProduct = await res.json();
//       setProducts(prev => [...prev, createdProduct]);
//       setNewProduct({ name: '', brand: '', qrCode: '', sustainability: '' , image: '' });
//       setShowForm(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* Add Product Button */}
//       <button
//         className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         onClick={() => setShowForm(!showForm)}
//       >
//         {showForm ? 'Cancel' : '+ Add Product'}
//       </button>

//       {/* Add Product Form */}
//       {showForm && (
//         <form onSubmit={handleAddProduct} className="mb-6 bg-gray-100 p-4 rounded">
//           <div className="mb-2">
//             <label className="block font-semibold">Name</label>
//             <input
//               type="text"
//               value={newProduct.name}
//               onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">Brand</label>
//             <input
//               type="text"
//               value={newProduct.brand}
//               onChange={e => setNewProduct({ ...newProduct, brand: e.target.value })}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">QR Code (URL or ID)</label>
//             <input
//               type="String"
//               value={newProduct.barcode}
//               onChange={e => setNewProduct({ ...newProduct, barcode: e.target.value })}
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">Image URL</label>
//             <input
//               type="url"
//               value={newProduct.image}
//               onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
//               className="w-full border p-2 rounded"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold">Sustainability</label>
//             <input
//               type="text"
//               value={newProduct.sustainability}
//               onChange={e => setNewProduct({ ...newProduct, sustainability: e.target.value })}
//               className="w-full border p-2 rounded"
//             />
//           </div>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Save Product
//           </button>
//         </form>
//       )}

//       {/* Product List */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Brand</th>
//               <th className="border p-2">QR Code</th>
//               <th className="border p-2">Sustainability</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((p) => (
//               <tr key={p._id} className="hover:bg-gray-50">
//                 <td className="border p-2">{p.name}</td>
//                 <td className="border p-2">{p.brand}</td>
//                 <td className="border p-2">{p.qrCode || 'N/A'}</td>
//                 <td className="border p-2">{p.sustainability || 'N/A'}</td>
//                 <td className="border p-2">
//                   <button className="text-blue-600 hover:underline mr-2">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="text-red-600 hover:underline">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }



// import { useEffect, useState } from 'react';

// export default function AdminDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     brand: '',
//     barcode: '',
//     sustainability: '',
//     image: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'DELETE',
//     });
//     setProducts(prev => prev.filter(p => p._id !== id));
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     const method = newProduct._id ? 'PUT' : 'POST';
//     const url = newProduct._id
//       ? `http://localhost:5000/api/products/${newProduct._id}`
//       : 'http://localhost:5000/api/products';

//     const res = await fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newProduct),
//     });

//     if (res.ok) {
//       const savedProduct = await res.json();
//       setProducts(prev =>
//         newProduct._id
//           ? prev.map(p => (p._id === savedProduct._id ? savedProduct : p))
//           : [...prev, savedProduct]
//       );
//       setNewProduct({
//         name: '',
//         brand: '',
//         barcode: '',
//         sustainability: '',
//         image: ''
//       });
//       setShowForm(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       {/* Add/Edit Product Button */}
//       <button
//         className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         onClick={() => {
//           setShowForm(!showForm);
//           setNewProduct({
//             name: '',
//             brand: '',
//             barcode: '',
//             sustainability: '',
//             image: ''
//           });
//         }}
//       >
//         {showForm ? 'Cancel' : '+ Add Product'}
//       </button>

//       {/* Add/Edit Product Form */}
//       {showForm && (
//         <form
//           onSubmit={handleAddProduct}
//           className="mb-6 bg-gray-100 p-4 rounded shadow"
//         >
//           <div className="mb-2">
//             <label className="block font-semibold">Name</label>
//             <input
//               type="text"
//               value={newProduct.name}
//               onChange={e =>
//                 setNewProduct({ ...newProduct, name: e.target.value })
//               }
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">Brand</label>
//             <input
//               type="text"
//               value={newProduct.brand}
//               onChange={e =>
//                 setNewProduct({ ...newProduct, brand: e.target.value })
//               }
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">QR Code (Barcode)</label>
//             <input
//               type="text"
//               value={newProduct.barcode}
//               onChange={e =>
//                 setNewProduct({ ...newProduct, barcode: e.target.value })
//               }
//               className="w-full border p-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label className="block font-semibold">Sustainability</label>
//             <input
//               type="text"
//               value={newProduct.sustainability}
//               onChange={e =>
//                 setNewProduct({
//                   ...newProduct,
//                   sustainability: e.target.value,
//                 })
//               }
//               className="w-full border p-2 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold">Image URL</label>
//             <input
//               type="url"
//               value={newProduct.image}
//               onChange={e =>
//                 setNewProduct({
//                   ...newProduct,
//                   image: e.target.value,
//                 })
//               }
//               className="w-full border p-2 rounded"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             {newProduct._id ? 'Update Product' : 'Save Product'}
//           </button>
//         </form>
//       )}

//       {/* Product List */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Brand</th>
//               <th className="border p-2">QR Code</th>
//               <th className="border p-2">Sustainability</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(p => (
//               <tr key={p._id} className="hover:bg-gray-50">
//                 <td className="border p-2">
//                   <div className="flex items-center gap-2">
//                     {p.image && (
//                       <img
//                         src={p.image}
//                         alt={p.name}
//                         className="w-10 h-10 object-cover rounded"
//                         onError={(e) => {
//                           e.target.src =
//                             'https://dummyimage.com/50x50/ccc/000000&text=No+Image';
//                         }}
//                       />
//                     )}
//                     <span>{p.name}</span>
//                   </div>
//                 </td>
//                 <td className="border p-2">{p.brand}</td>
//                 <td className="border p-2">{p.barcode || 'N/A'}</td>
//                 <td className="border p-2">{p.sustainability || 'N/A'}</td>
//                 <td className="border p-2">
//                   <button
//                     className="text-blue-600 hover:underline mr-2"
//                     onClick={() => {
//                       setShowForm(true);
//                       setNewProduct(p);
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    barcode: '',
    sustainability: '',
    image: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    });
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const method = newProduct._id ? 'PUT' : 'POST';
    const url = newProduct._id
      ? `http://localhost:5000/api/products/${newProduct._id}`
      : 'http://localhost:5000/api/products';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      const savedProduct = await res.json();
      setProducts((prev) =>
        newProduct._id
          ? prev.map((p) => (p._id === savedProduct._id ? savedProduct : p))
          : [...prev, savedProduct]
      );
      setNewProduct({
        name: '',
        brand: '',
        barcode: '',
        sustainability: '',
        image: '',
      });
      setShowForm(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Add/Edit Button */}
      <button
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => {
          setShowForm(!showForm);
          setNewProduct({
            name: '',
            brand: '',
            barcode: '',
            sustainability: '',
            image: '',
          });
        }}
      >
        {showForm ? 'Cancel' : '+ Add Product'}
      </button>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleAddProduct} className="mb-6 bg-gray-100 p-4 rounded shadow">
          <div className="mb-2">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold">Brand</label>
            <input
              type="text"
              value={newProduct.brand}
              onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold">QR Code (Barcode)</label>
            <input
              type="text"
              value={newProduct.barcode}
              onChange={(e) => setNewProduct({ ...newProduct, barcode: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold">Sustainability</label>
            <input
              type="text"
              value={newProduct.sustainability}
              onChange={(e) => setNewProduct({ ...newProduct, sustainability: e.target.value })}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Image URL</label>
            <input
              type="url"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="w-full border p-2 rounded"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {newProduct._id ? 'Update Product' : 'Save Product'}
          </button>
        </form>
      )}

      {/* Product Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">QR Code</th>
              <th className="border p-2">Sustainability</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="border p-2">
                  <div className="flex items-center gap-2">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 object-cover rounded"
                        onError={(e) => {
                          e.target.src = 'https://dummyimage.com/50x50/ccc/000&text=No+Image';
                        }}
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs">
                        No Image
                      </div>
                    )}
                    <span>{p.name}</span>
                  </div>
                </td>
                <td className="border p-2">{p.brand}</td>
                <td className="border p-2">{p.barcode || 'N/A'}</td>
                <td className="border p-2">{p.sustainability || 'N/A'}</td>
                <td className="border p-2">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => {
                      setShowForm(true);
                      setNewProduct(p);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
