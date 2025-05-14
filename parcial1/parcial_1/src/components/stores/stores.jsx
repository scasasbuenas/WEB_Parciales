import React from "react";
import "./stores.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import "../languageSwitcher/LanguageSwitcher.css";

function Store() {

  const { t } = useTranslation();

  const menuItems = [
    { id: 1, name: t("goods.cheese"), image: "https://dummyimage.com/600x400/000/fff" },
    { id: 2, name: t("goods.bread"), image: "https://dummyimage.com/600x400/000/fff" },
    { id: 3, name: t("goods.ham"), image: "https://dummyimage.com/600x400/000/fff" },
    { id: 4, name: t("goods.lettuce"), image: "https://dummyimage.com/600x400/000/fff" }
  ];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src="path/to/menu-icon.png" alt="Menu Icon" />
        <h1>{t("stores.title")}</h1>
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

      <div className="language-switcher-bottom-right">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Store;
