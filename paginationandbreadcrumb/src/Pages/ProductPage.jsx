import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(true);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getdata();
  }, [id]);
  if (loading || !data) {
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
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <img src={data.image} alt={data.title} style={{ width: "50%" }} />
    </div>
  );
}
