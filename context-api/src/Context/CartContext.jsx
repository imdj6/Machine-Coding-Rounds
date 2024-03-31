import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addtoCart = (data) => {
        const cartIndex=cart.findIndex((elem) => elem.id === data.id)
        if (cartIndex!==-1) {
            const updatedcart=[...cart]
            updatedcart[cartIndex].quantity+=1
            setCart(updatedcart)
        }
        else {
            setCart([...cart, { ...data, quantity: 1 }]);
        }
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