import React, { useState } from "react";
import "./home.css";

function Home({ username }) {
  // Example user data without fetching logic
  const [userData] = useState({
    name: username || "Usuario",
    level: "Intermedio",
    completedTriathlons: 5,
    nextEvent: "Triatlón de Madrid",
    nextEventDate: "15 de Agosto, 2025",
    profileImage: "https://via.placeholder.com/150"
  });

  // State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample training sessions data
  const trainingSessions = {
    swimming: [
      { id: 1, location: "Piscina Olímpica", distance: "1.5 km", time: "35 minutos", date: "10 de Julio, 2025" },
      { id: 2, location: "Lago de la Casa de Campo", distance: "2 km", time: "45 minutos", date: "20 de Julio, 2025" },
      { id: 3, location: "Piscina Municipal", distance: "1 km", time: "22 minutos", date: "1 de Agosto, 2023" }
    ],
    cycling: [
      { id: 1, location: "Ruta Sierra Norte", distance: "40 km", time: "1h 30min", date: "5 de Julio, 2025" },
      { id: 2, location: "Circuito El Pardo", distance: "30 km", time: "1h 10min", date: "15 de Julio, 2025" },
      { id: 3, location: "Carretera de Colmenar", distance: "60 km", time: "2h 15min", date: "25 de Julio, 2025" }
    ],
    running: [
      { id: 1, location: "Parque del Retiro", distance: "10 km", time: "48 minutos", date: "8 de Julio, 2025" },
      { id: 2, location: "Casa de Campo", distance: "15 km", time: "1h 15min", date: "18 de Julio, 2025" },
      { id: 3, location: "Madrid Río", distance: "7 km", time: "32 minutos", date: "29 de Julio, 2025" }
    ]
  };

  // Example central content data without fetching logic
  const [centralContent] = useState([
    {
      id: 1,
      title: "Categorías de Entrenamiento",
      categories: [
        { id: "swimming", name: "Natación", icon: "🏊‍♂️" },
        { id: "cycling", name: "Ciclismo", icon: "🚴‍♂️" },
        { id: "running", name: "Carrera", icon: "🏃‍♂️" }
      ]
    },
    {
      id: 2,
      title: "Mis estadísticas",
      items: [
        { id: 201, metric: "Distancia total", value: "120 km" },
        { id: 202, metric: "Tiempo en agua", value: "24 horas" },
        { id: 203, metric: "Tiempo en bicicleta", value: "58 horas" },
        { id: 204, metric: "Tiempo corriendo", value: "32 horas" }
      ]
    }
  ]);

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    // If clicking the same category, toggle it off
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div className="home-container">
      {/* User Info and Statistics Section - Side by Side */}
      <section className="top-section-container">
        {/* Section 1: User Information */}
        <div className="user-info-section">
          <div className="user-profile">
            <img src={userData.profileImage} alt="Perfil de usuario" className="profile-image" />
            <div className="user-details">
              <h2>{userData.name}</h2>
              <p>Nivel: {userData.level}</p>
              <p>Triatlones completados: {userData.completedTriathlons}</p>
              <div className="next-event">
                <h3>Próximo evento</h3>
                <p>{userData.nextEvent}</p>
                <p>{userData.nextEventDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="content-section stats-section">
          <h2>{centralContent[1].title}</h2>
          <div className="content-items">
            {centralContent[1].items.map((item) => (
              <div key={item.id} className="content-item">
                <span className="metric-name">{item.metric}:</span>
                <span className="metric-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>{centralContent[0].title}</h2>
        <div className="categories-container">
          {centralContent[0].categories.map((category) => (
            <div 
              key={category.id} 
              className={`category-item ${selectedCategory === category.id ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Sessions display when a category is selected */}
        {selectedCategory && (
          <div className="sessions-container">
            <h3>Sesiones de {centralContent[0].categories.find(c => c.id === selectedCategory).name}</h3>
            {trainingSessions[selectedCategory].map(session => (
              <div key={session.id} className="session-item">
                <div className="session-header">
                  <h4>{session.location}</h4>
                  <span className="session-date">{session.date}</span>
                </div>
                <div className="session-details">
                  <span><strong>Distancia:</strong> {session.distance}</span>
                  <span><strong>Tiempo:</strong> {session.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
