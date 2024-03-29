import Homepage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Product from "./Pages/Products";
import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import BreadCrumb from "./components/BreadCrumb";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <BreadCrumb />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Products/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
