import "../../src/styles/Card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ img, title, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/Products/${id}`);
      }}
    >
      <h1 className="card-heading">{title?.slice(0, 30)}</h1>
      <img className="card-img" src={img} alt={title} />
    </div>
  );
}
