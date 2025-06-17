
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleStartScanning = () => {
//     navigate("/scanner"); // Assumes you have a route defined for /scanner
//   };

//   return (
//     <div className="text-center p-10">
//       <h1 className="text-3xl font-bold mb-4">Scan. Verify. Trust your purchase.</h1>
//       <p className="mb-4">Easily scan barcodes/QR codes to verify product details and trace origins.</p>
//       <button
//         onClick={handleStartScanning}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//       >
//         Start Scanning
//       </button>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { FaBarcode, FaSearch, FaShieldAlt, FaStar } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate("/scanner");
  };
  const handleViewProductDetails = () => navigate("/all-products");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white shadow-md">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Scan. Verify. <span className="text-blue-600">Trust.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Instantly trace product origin, check reviews, and verify authenticity using barcodes or QR codes.
          </p>
          <button
            onClick={handleStartScanning}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            🚀 Start Scanning
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5704/5704689.png"
            alt="Scan product"
            className="w-80 animate-bounce-slow"
          />
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="px-6 md:px-16 py-16 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaBarcode size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Scan the Code</h3>
            <p className="text-sm text-gray-600">Point your camera or upload a barcode/QR code.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaSearch size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Fetch Product Info</h3>
            <p className="text-sm text-gray-600">We retrieve real-time data from our verified database.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaStar size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">View Reviews</h3>
            <p className="text-sm text-gray-600">Instantly check ratings and user feedback.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaShieldAlt size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Verify Authenticity</h3>
            <p className="text-sm text-gray-600">Make secure and trustworthy purchasing decisions.</p>
          </div>
        </div>
      </section> */}
      {/* How It Works */}
<section className="px-6 md:px-16 py-16 text-center bg-blue-50">
  <h2 className="text-3xl font-semibold mb-10 text-gray-800">How It Works</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    
    {/* Clickable Scan the Code box */}
    <div
      onClick={handleStartScanning}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-100"
    >
      <FaBarcode size={40} className="text-blue-600 mx-auto mb-4" />
      <h3 className="font-bold mb-2">Scan the Code</h3>
      <p className="text-sm text-gray-600">Point your camera or upload a barcode/QR code.</p>
    </div>
    
    <div
            onClick={handleViewProductDetails}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer hover:bg-blue-100"
          >
            <FaSearch size={40} className="text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Fetch Product Info</h3>
            <p className="text-sm text-gray-600">We retrieve real-time data from our verified database.</p>
          </div>
    {/* Other non-clickable boxes */}
    {/* <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <FaSearch size={40} className="text-blue-600 mx-auto mb-4" />
      <h3 className="font-bold mb-2">Fetch Product Info</h3>
      <p className="text-sm text-gray-600">We retrieve real-time data from our verified database.</p>
    </div> */}

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <FaStar size={40} className="text-blue-600 mx-auto mb-4" />
      <h3 className="font-bold mb-2">View Reviews</h3>
      <p className="text-sm text-gray-600">Instantly check ratings and user feedback.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <FaShieldAlt size={40} className="text-blue-600 mx-auto mb-4" />
      <h3 className="font-bold mb-2">Verify Authenticity</h3>
      <p className="text-sm text-gray-600">Make secure and trustworthy purchasing decisions.</p>
    </div>
  </div>
</section>

    </div>
  );
}
