import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../utils/redux/reducers/CartSlice";
function Products() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentpage, setCurrentPage] = useState(1);
    const TotalPages = Math.ceil(products?.length / 6);
    const getpagedata = () => {
        const startIndex = (currentpage - 1) * 6;
        const endIndex = startIndex + 6;
        return products?.slice(startIndex, endIndex);
    };
    const dispatch = useDispatch()
    useEffect(() => {
        const getproducts = async () => {
            try {
                setLoading(true);
                const data = await fetch("https://fakestoreapi.com/products");
                const productsd = await data.json();
                setProducts(productsd);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getproducts();
    }, []);
    if (loading || !products) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                    alignItems: "center",
                }}
            >
                Loading...
            </div>
        );
    }
    return (
        <>
            <div className="product-main">
                {getpagedata().map((product) => (
                    <div className="product-card">
                        <div key={product.id} className="">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img"
                            />
                        </div>
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            {product.title}
                        </div>
                        <button
                            onClick={() => dispatch(addTocart(product))}
                            style={{
                                textAlign: "center",
                                marginTop: "20px",
                                padding: "10px 20px",
                                backgroundColor: "black",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Add To Cart
                        </button>
                        {/* {cart.find((elem) => elem.id === product.id)?.quantity ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <button
                                    onClick={() => handleQuantityChange(product.id, "decrement")}
                                    style={{ background: "black", color: "white", padding: "10px 15px", fontSize: "20px", cursor: "pointer" }}
                                >
                                    -
                                </button>
                                <span style={{ margin: "0 20px", fontSize: "20px" }}>
                                    {cart.find((elem) => elem.id === product.id)?.quantity}
                                </span>
                                <button
                                    onClick={() => addtoCart(product)}
                                    style={{ background: "black", color: "white", padding: "10px 15px", fontSize: "20px", cursor: "pointer" }}
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => addtoCart(product)}
                                style={{
                                    textAlign: "center",
                                    marginTop: "20px",
                                    padding: "10px 20px",
                                    backgroundColor: "black",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >
                                Add To Cart
                            </button>
                        )} */}
                    </div>
                ))}
            </div>
            <div>
                <div
                    className="pagination"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "40px 10px",
                        alignItems: "center",
                    }}
                >
                    {currentpage > 1 && (
                        <span
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            style={{
                                fontSize: "40px",
                                margin: "0px 30px",
                                cursor: "pointer",
                            }}
                        >{`<`}</span>
                    )}
                    {Array.from({ length: TotalPages })
                        .map((_, index) => index)
                        .map((item, key) => (
                            <span
                                onClick={() => setCurrentPage(item + 1)}
                                style={{
                                    fontSize: "40px",
                                    margin: "0px 30px",
                                    cursor: "pointer",
                                }}
                                className={`${currentpage === item + 1 && "active"}`}
                            >
                                {item + 1}
                            </span>
                        ))}
                    {currentpage < TotalPages && (
                        <span
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            style={{
                                fontSize: "40px",
                                margin: "0px 30px",
                                cursor: "pointer",
                            }}
                        >{`>`}</span>
                    )}
                </div>
            </div>
        </>
    );
}

export default Products;
