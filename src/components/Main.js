import React from "react";
import "./Main.css";
import Connect from "./Connect";
import olga1 from "../data/images/Olga_4-main.png";
// import {useTranslation} from "react-i18next";

function Main() {

  // const { t, i18n } = useTranslation();
  
  return (   
    <section className="main" id="main">  
      <div className="main_frame">  
        <h1 className="main_title">Забота о Вашем психологическом здоровье</h1>
        <div className="main_person">
          <h2 className="main_name">Ольга Геннадьевна Смирнова</h2>
          <h3 className="main_job">Индивидуальные и семейные консультации, групповая терапия</h3>
        </div>
        <img className="main_pic" alt="Olga1" src={olga1}/>
        <div className="main_connect">
          <Connect />   
        </div>
      </div>
    </section>    
  );
}

export default Main;