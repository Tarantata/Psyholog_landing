import React from "react";
import "./Description.css";

function Description({units}) {
  return(
    <div className="description_frame">     
      {units.map((unit) => <p className="description_text" key = {unit}>{unit}</p>)}
    </div>
  );
}

export default Description;