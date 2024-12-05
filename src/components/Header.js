import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        if (isElementInViewport(section)) {
          setActiveSection(section.id);
          console.log(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  }

  return (
    <div className="header">
      <div className="header_content">
        <a href="#main">
          <button
            className={
              activeSection === "main" ? "button button_active" : "button"
            }
          >
            Главная
          </button>
        </a>
        <a href="#about">
          <button
            className={
              activeSection === "about" ? "button button_active" : "button"
            }
          >
            Обо мне
          </button>
        </a>
        <a href="#services">
          <button
            className={
              activeSection === "services" ? "button button_active" : "button"
            }
          >
            Мои услуги
          </button>
        </a>
        <a href="#articles">
          <button
            className={
              activeSection === "articles" ? "button button_active" : "button"
            }
          >
            Статьи
          </button>
        </a>
        <a href="#contacts">
          <button
            className={
              activeSection === "contacts" ? "button button_active" : "button"
            }
          >
            Контакты
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
