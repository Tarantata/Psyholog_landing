import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Groups.css";
import groupslist from "../data/groupslist";
import Description from "./Description";

function Groups() {
  

  return (
    <section className="groups" id="groups">
      <div className="groups_frame">
        <div className="groups_backlayer">
          <h2 className="groups_title">Психотерапевтические группы</h2>
          <h3 className="groups_adt">Анонсы следующих занятий</h3>          
          <div className="groups_notice">         
            <TypeAnimation
              sequence={[
                'Ближайшая группа "Психологическое завершение родов" состоится 8 февраля 2025 года.',
                3000,
                '',
              ]}
              speed={2}
              omitDeletionAnimation={true}
              repeat={Infinity}
              cursor={false}
            />  
          </div>
          <div className="groups_notice">         
            <TypeAnimation
              sequence={[
              'Ближайшая группа "Психологическое завершение родов" состоится 8 февраля 2025 года.',
              3000,
              '',
              ]}
              speed={2}
              omitDeletionAnimation={true}
              repeat={Infinity}
              cursor={false}
            />  
          </div>          
        </div>      
        <div className="groups_frontlayer">                    
          {groupslist.map(({ id, units }) => (            
            <Description
              key={id}          
              units={units}
            />
          ))}                  
        </div>
      </div>
    </section>
  );
}

export default Groups;