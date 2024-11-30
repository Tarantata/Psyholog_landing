import React, { useState } from "react";
import "./Articles.css";
import subjects from "../data/subjects";
import Article from "./Article";
import glaces from "../data/images/reading5.png";

function Articles() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    activeId === id ? setActiveId(null) : setActiveId(id);
  };

  return (
    <section className="articles" id="articles">
      <div className="articles_frame">
        <h2 className="articles_title">Статьи</h2>       
        <img className="articles_img" alt="glaces" src={glaces}></img>       
        <h3 className="articles_quote">
          «Судьбу можно сравнить с землей под ногами: сила притяжения не
          отпускает от нее человека, но и не мешает ему шагать, куда вздумается.
          Примем судьбу как почву, на которой стоим, почву которая служит
          трамплином нашей свободы».
          <br></br>
          <br></br>
          Виктор Франкл
        </h3>

        <div className="articles_content">
          {subjects.map(({ id, title, img, units }) => (            
            <Article
              key={id}
              onClick={() => handleClick(id)}
              isActive={activeId === id}
              content={{ title, img, units }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
