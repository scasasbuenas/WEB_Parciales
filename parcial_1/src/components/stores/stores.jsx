import React from "react";
import "./stores.css";

function Menu() {
  const menuItems = [
    { id: 1, name: "Cheese", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 2, name: "Bread", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 3, name: "Ham", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 4, name: "Lettuce", image: "https://dummyimage.com/600x400/000/fff" }
  ];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="path/to/menu-icon.png" alt="Menu Icon" />
        <h1>STORES</h1>
        <img src="path/to/menu-icon.png" alt="Menu Icon" />
      </div>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
