import React, {useState} from "react";
import "./About.css";
import ToggleButton from "./ToggleButton";
import courses from "../data/courses";
import communities from "../data/communities";


function Collapsible({title, label}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);   
  }; 

  const listOfCourses = courses.map((item) =>
    <li key={item.id}>
      <p name={item.name}>{item.name}</p>
    </li>);

  const listOfUrls = communities.map((item) => 
    <li key={item.id}>
      <p name={item.name}>{item.name}</p>
      <a href={item.url}>{item.url}</a>
    </li>);

  return (
    <>
      <div className="about_collapsible">
        <h3 className="about_parag3">{title}</h3>
        <ToggleButton 
          onClick={handleClick}
          isActive={isActive}
        />      
      </div>
      {isActive && (label===1 ? <ul className="about_lists">{listOfCourses}</ul>
       : <ul className="about_lists">{listOfUrls}</ul>)}     
    </>
  );
}

function About() {  
  return (
    <section className="about" id="about">
      <h2 className="about_title">Обо мне</h2>   
      <h3 className="about_subtitle">Клинический и перинатальный психолог.</h3>
      <h3 className="about_parag1">Я знаю, как плохо бывает в ситуации невозможности; как легко потерять веру в себя в трудные времена; как страшно думать о родах или, например, об измене. Так часто случается в нашем мире: вы к этому не готовы – а оно вот, тут как тут. Что делать?</h3>
      <div className="about_help">
        <h3 className="about_parag2">Есть много способов жить жизнь в трудных ситуациях. Я знаю, как я могу помочь Вам найти свой путь.</h3>
        <h3 className="about_parag2">Как я помочь НЕ могу – я тоже знаю. 
        Приходите! Будем разбираться вместе.</h3>
      </div>
      <div className="about_dropdown">
        <Collapsible
          label = "1"
          title = "Моё основное образование:"       
        />
        <Collapsible
          title = "Членство в профессиональных сообществах:"
          label = "2"       
        />  
      </div>
    </section>
  );
}

export default About;