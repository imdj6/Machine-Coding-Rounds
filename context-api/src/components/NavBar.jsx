import React, { useContext } from 'react'
import "../styles/NavBar.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from '../Context/CartContext'
function NavBar() {
  const navigate = useNavigate()
  const {cart}=useContext(CartContext)
  console.log(cart)
  return (
    <nav>
      <ul className='nav-main'>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate("/products")}>Products</li>
        <li onClick={() => navigate('/cart')} style={cart.length > 0 ? cartStyle : null}>
            Cart {cart.length > 0 && <span style={badgeStyle}>({cart.length})</span>}
        </li>
        <li onClick={()=>navigate("/login")}>Login</li>
      </ul>
    </nav>
  )
}
const cartStyle = {
  position: 'relative', // Position relative for badge positioning
  cursor: 'pointer', // Show pointer cursor on hover
  color: 'white', // Cart link text color
  padding: '25px', // Padding for cart link
};

const badgeStyle = {
  position: 'absolute', // Position absolute for badge positioning
  top: '0px', // Adjust top position to place badge above cart text
  right: '-10px', // Adjust right position to place badge near cart text
  backgroundColor: '#FA991C', // Badge background color
  color: '#fff', // Badge text color
  borderRadius: '50%', // Rounded border for circle shape
  padding: '4px 8px', // Padding for badge content
};
export default NavBar