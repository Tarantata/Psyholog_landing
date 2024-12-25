import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Main.css";
import Connect from "./Connect";
import olga1 from "../data/images/Olga_4-main.png";

function Main() {  
  <TypeAnimation
    sequence={[
      "Ближайшая группа по ..... состоится .....",
      1000,
      "Ближайшая группа по ..... состоится .....",
      1000,
    ]}
    speed={30}
    repeat={Infinity}
    cursor={false}
  />

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
        {/* <div className="main_notice">         
         <TypeAnimation
            sequence={[
              'Ближайшая группа по ..... состоится .....',
              3000,
              '',
            ]}
            speed={2}
            omitDeletionAnimation={true}
            repeat={Infinity}
            cursor={false}
         />
        </div> */}
      </div>
    </section>    
  );
}

export default Main;