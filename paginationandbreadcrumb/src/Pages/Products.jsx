import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Card.css";
const ITEMS_PER_PAGE = 4; // Number of items to display per page
export default function Product() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const Totalpage = Math.ceil(products?.length / ITEMS_PER_PAGE);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(true);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getdata();
  }, []);
  const getPageData = () => {
    const startIndex = (currentpage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products?.slice(startIndex, endIndex);
  };
  const handlePageChange = (page) => {
    setCurrentpage(page);
  };
  if (loading || !products) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <div>
      <div className="card-container">
        {getPageData().map((product) => (
          <Card
            key={product.id}
            img={product.image}
            title={product.title}
            id={product.id}
          />
        ))}
      </div>
      <div className="pagination-container">
        {currentpage > 1 && (
          <span
            onClick={() => {
              handlePageChange(currentpage - 1);
            }}
          >{`<`}</span>
        )}
        {Array.from({ length: Totalpage }).map((_, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                handlePageChange(index + 1);
              }}
              className={currentpage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </span>
          );
        })}
        {currentpage < Totalpage && (
          <span
            onClick={() => {
              handlePageChange(currentpage + 1);
            }}
          >{`>`}</span>
        )}
      </div>
    </div>
  );
}
