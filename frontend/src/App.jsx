import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import Layout from './components/Layout';
// import NotFound from './pages/NotFound';
import AllProducts from "./pages/AllProducts";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/product/:code" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

