import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Products from './Pages/Products'
import { CartProvider } from './Context/CartContext'
import Cart from './Pages/Cart'
function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </CartProvider>
  )
}

export default App
