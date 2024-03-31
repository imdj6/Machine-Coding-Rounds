import React from 'react'
import { useNavigate } from "react-router-dom"
function Navbar() {
    const navigate = useNavigate();
    return (
        <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo" onClick={() => navigate('/')}>
                    <img src=
                        "https://img.freepik.com/free-vector/illustration-share-icon_53876-5843.jpg?size=626&ext=jpg"
                        height={100}
                        width={200}
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </div>
                <li>
                    <span onClick={() => navigate('/products')}>Products</span>
                </li>
                <li>
                    <span onClick={() => navigate('/todos')}>Todos</span>
                </li>
                <li>
                    <a href="#jobs">Jobs</a>
                </li>
                <li>
                    <span onClick={() => navigate('/students')}>Student</span>
                </li>
            </ul>

            <div class="rightNav">
                <button class="btn btn-sm" onClick={()=>navigate("/cart")}>
                    Cart
                </button>
            </div>
        </nav>
    )
}

export default Navbar