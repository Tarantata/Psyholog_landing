import React from "react";
import "./Article.css";
import ToggleButton from "./ToggleButton";

function Article({ content, onClick, isActive }) {
  const { title, img, units } = content;

  return (
    <div className="article_collapsible">  
      <div className="article_header">
        <h3 className="article_title">{title}</h3>      
        <ToggleButton 
        onClick={onClick}
        isActive={isActive}
        />
      </div>
      <div className="article_units">
        {isActive && 
        <>       
          <img className="article_img" src={img}></img>
          {units.map((unit) => <p className="article_text" key = {unit}>{unit}</p>)}
        </>}
      </div>
    </div>
  );
}

export default Article;