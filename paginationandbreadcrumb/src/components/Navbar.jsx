import "../../src/styles/Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="nav-main">
        <li>
          <span onClick={() => navigate("/")}>Home</span>
        </li>
        <li>
          <span onClick={() => navigate("/Products")}>Products</span>
        </li>
        <li>
          <span onClick={() => navigate("/About")}>About</span>
        </li>
        <li>
          <span onClick={() => navigate("/Login")}>Login</span>
        </li>
      </ul>
    </nav>
  );
}
