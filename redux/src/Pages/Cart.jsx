import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Cart() {
    const  {cart } = useSelector((state)=>state.cart);
    const [totalPrice,setTotalPrice] = useState();
    console.log(cart)
    useEffect(() => {
        const total = cart?.reduce((total, each) => {
           return total += each.price;
        }, 0)
        setTotalPrice(total)
    }, [cart])
    return (
        <div style={{ padding: "15px 20px",minHeight:"100vh" }}>
            {cart?.length > 0 ?
                cart?.map((item, key) => (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", padding: "10px 30px", marginBottom: "10px" }}>
                        <img src={item.image} alt={item.name} height={200} width={200} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                )) : <div style={{ fontSize: "20px", textAlign: "center", marginTop: "20px" }}>Nothing to show in cart!</div>
            }
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {cart?.length > 0 && totalPrice && <div style={{ fontSize: "40px", margin: "20px 0px" }}>Total Price: ${totalPrice}</div>}
                {cart?.length > 0 && <button style={{ backgroundColor: "black", color: "white", padding: "20px 30px", cursor: "pointer" }}>Pay Now</button>}
            </div>
        </div>
    )
}

export default Cart