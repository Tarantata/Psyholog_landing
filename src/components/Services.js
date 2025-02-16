import React from "react";
import "./Services.css";
import Connect from "./Connect";
import olga2 from "../data/images/Olga_6-services.png";
import problems from "../data/problems";
import methods from "../data/methods";

function Services() {

  const listOfProblems = problems.map((item) => (
    <li key={item.id}>
      <p className="services_points" name={item.name}>{item.name}</p>
    </li>
  ));

  const listOfMethods = methods.map((item) => (
    <li key={item.id}>
      <p className="services_points" name={item.name}>{item.name}</p>
    </li>
  ));

  return (
    <section className="services" id="services">
      <div className="services_frame">
        <div className="services_top">
          <h2 className="services_title">Мои услуги</h2>
        </div>
        <img className="services_pic" alt="Olga1" src={olga2}/>    
        <h3 className="services_quote1">«Если мы не осознаем, что происходит у нас внутри, то извне нам кажется, что это судьба».</h3>
        
        <h3 className="services_quote2">Карл Густав Юнг</h3>                
        <p className="services_text services_text_1">Я работаю со взрослыми, подростками и семейными парами. Специализируюсь в работе с этими проблемами:</p>
        <div className="services_blur">
          <h2 className="services_question">Чем я могу быть Вам полезна?</h2>
        </div>        

        <ul className="services_list services_list_1">{listOfProblems}</ul>
       
        <p className="services_text services_text_2">Ко мне приходят не только с проблемами. Некоторые мои клиенты хотят найти свое предназначение, увидеть новые смыслы в своей жизни, стать зрелой, целостной личностью, раскрыть свой творческий потенциал!
          <br></br>
          <br></br>                    
          В своей работе я использую следующие методы:
        </p>       

        <ul className="services_list services_list_3">{listOfMethods}</ul>

        <p className="services_text services_text_3">Наша работа с клиентом может быть как краткосрочной, так и длительной. Мы будем работать в атмосфере принятия, искреннего интереса и безопасности.</p>
        <div className="services_connect">
          <Connect />
        </div>
        <h3 className="services_price services_price_1">Стоимость моих услуг:</h3>
        <h3 className="services_price services_price_2">Разовые консультации
          <br></br>
          Длительная индивидуальная работа
          <br></br>
          Консультации для пар
          <br></br>         
          <div className="services_line"></div>
        </h3>
        <h3 className="services_price services_price_3">онлайн 6000 рублей / офлайн 7000 рублей - 50 минут</h3>
      </div>
    </section>
  );
}

export default Services;