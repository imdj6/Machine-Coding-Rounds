import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const addtoCart = (data) => {
        setCart([...cart, data]);
    };

    const removefromcart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addtoCart,
            removefromcart
        }}>
            {children}
        </CartContext.Provider>
    );
};