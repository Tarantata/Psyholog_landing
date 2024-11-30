import React from "react";
import "./Header.css"

import {useState, useEffect, useRef} from "react";

function Header() {

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset 
      < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
      // console.log(newActiveSection);
    });

    setActiveSection(newActiveSection);
  };
  
  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="header_content">
        <div className="header_menu">
          <a href="/#main">
            <button className={activeSection==="main" ? "button button_active" : "button"}>Главная</button>
          </a>
          <a href="/#about">
            <button className={activeSection==="about" ? "button button_active" : "button"}>Обо мне</button>
          </a>
          <a href="/#services">
            <button className={activeSection==="services" ? "button button_active" : "button"}>Мои услуги</button>
          </a>
          <a href="/#articles">
            <button className={activeSection==="articles" ? "button button_active" : "button"}>Статьи</button>
          </a>
          <a href="/#contacts">
            <button className={activeSection==="contacts" ? "button button_active" : "button"}>Контакты</button>
          </a>
        </div>
        <div className="header_lang">
          <button className="button button_lang">Eng</button>
          <button className="button button_lang button_active">Рус</button >
        </div>
      </div>  
    </div>
  );
}

export default Header;