import { Routes, Route } from "react-router-dom"
import React, { Suspense } from "react"
const HomePage = React.lazy(() => import("./Pages/HomePage"))
const Students = React.lazy(() => import("./Pages/Students"))
const Products = React.lazy(() => import("./Pages/Products"))
const NotFound = React.lazy(() => import("./Pages/NotFound"))
const Cart=React.lazy(()=>import("./Pages/Cart"))
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ReduxProvider from "./utils/redux/Provider"
function App() {
  return (
    <ReduxProvider>
      <Navbar />
      <Suspense fallback={<div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        Loading...
      </div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/students" element={<Students />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </ReduxProvider>
  )
}

export default App
