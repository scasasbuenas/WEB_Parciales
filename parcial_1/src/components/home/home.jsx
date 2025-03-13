import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import "../languageSwitcher/LanguageSwitcher.css";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const { t } = useTranslation();


  return (
    <div className="home-container">
      {/* New icon section */}
      <div className="icon-section">
        <div className="icon-item" onClick={() => navigate("/menu")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Menu" />
          <h3 style={{ color: "white" }}>{t("home.menu")}</h3>
        </div>
        <div className="icon-item" onClick={() => navigate("/stores")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Stores" />
          <h3 style={{ color: "white" }}>{t("home.stores")}</h3>
        </div>
        <div className="icon-item" onClick={() => navigate("/cart")}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Cart" />
          <h3 style={{ color: "white" }}>{t("home.cart")} </h3>
        </div>
      </div>

      <div className="language-switcher-bottom-right">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Home;
