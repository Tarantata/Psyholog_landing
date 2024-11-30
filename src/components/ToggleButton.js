import React from "react";
import "./ToggleButton.css";
import toggleButton from "../data/images/toggleButton.png"

function ToggleButton({isActive, onClick}) {
  return ( 
    <button className="toggle_button" 
    onClick={onClick}>
      <img className={isActive ? 
        "toggle toggle_active" : "toggle"} 
        src={toggleButton} 
        alt="ToggleButton"                
        ></img>    
    </button>
  );
}

export default ToggleButton;