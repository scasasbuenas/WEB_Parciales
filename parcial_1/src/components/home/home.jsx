import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home({ username }) {
  const navigate = useNavigate();

  // Example user data without fetching logic
  const [userData] = useState({
    name: username || "Usuario",
    level: "Intermedio",
    completedTriathlons: 5,
    nextEvent: "Triatlón de Madrid",
    nextEventDate: "15 de Agosto, 2025",
    profileImage: "https://via.placeholder.com/150"
  });

  return (
    <div className="home-container">
      {/* New icon section */}
      <div className="icon-section">
        <div className="icon-item" onClick={() => navigate("/menu")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Menu" />
          <h3 style={{ color: "white" }}>Menu</h3>
        </div>
        <div className="icon-item" onClick={() => navigate("/stores")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Stores" />
          <h3 style={{ color: "white" }}>Stores</h3>
        </div>
        <div className="icon-item" onClick={() => navigate("/cart")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Cart" />
          <h3 style={{ color: "white" }}>Cart</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
