import React, { useState } from "react";
import "./menu.css";

function Menu() {
  const menuItems = [
    { id: 1, name: "Cheese", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 2, name: "Bread", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 3, name: "Ham", image: "https://dummyimage.com/600x400/000/fff" },
    { id: 4, name: "Lettuce", image: "https://dummyimage.com/600x400/000/fff" }
  ];

  const carouselImages = [
    { src: "https://dummyimage.com/600x400/000/fff", caption: "Caption One" },
    { src: "https://dummyimage.com/600x400/000/fff", caption: "Caption Two" },
    { src: "https://dummyimage.com/600x400/000/fff", caption: "Caption Three" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (n) => {
    setCurrentSlide((prev) => (prev + n + carouselImages.length) % carouselImages.length);
  };

  const currentSlideIndex = (n) => {
    setCurrentSlide(n);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="path/to/menu-icon.png" alt="Menu Icon" />
        <h1>MENU</h1>
        <img src="path/to/menu-icon.png" alt="Menu Icon" />
      </div>
      
      <div className="slideshow-container">
        {carouselImages.map((image, index) => (
          <div key={index} className={`mySlides fade ${index === currentSlide ? "active" : ""}`}>
            <div className="numbertext">{index + 1} / {carouselImages.length}</div>
            <img src={image.src} style={{ width: "100%" }} alt={`Slide ${index + 1}`} />
            <div className="text">{image.caption}</div>
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        {carouselImages.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => currentSlideIndex(index)}></span>
        ))}
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
