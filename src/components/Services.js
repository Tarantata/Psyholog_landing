import React from "react";
import "./Services.css";
import Connect from "./Connect";
import olga2 from "../data/images/Olga_6-services.png";

function Services() {
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
        <ul className="services_list services_list_1">
          <li className="services_rec1">одиночество;</li>
          <li className="services_rec1">утрата смысла жизни;</li>
          <li className="services_rec1">депрессия;</li>
          <li className="services_rec1">тревога, панические атаки;</li>
          <li className="services_rec1">неврозы;</li>
          <li className="services_rec1">расстройства сна;</li>
        </ul>  
        <ul className="services_list services_list_2"> 
          <li className="services_rec2">сексуальная неудовлетворенность и охлаждение в отношениях, трудности восстановления семейных отношений после измен;</li>
          <li className="services_rec2">возрастные кризисы;</li>
          <li className="services_rec2">социальная тревожность, коммуникативные трудности, непонимание со стороны родных и друзей;</li>
          <li className="services_rec2">психогенное бесплодие, подготовка к ВРТ, сопровождение на всех этапах беременности;</li>
          <li className="services_rec2">подготовка к «мягким» и комфортным родам.</li>
        </ul>
        <p className="services_text services_text_2">Ко мне приходят не только с проблемами. Некоторые мои клиенты хотят найти свое предназначение, увидеть новые смыслы в своей жизни, стать зрелой, целостной личностью, раскрыть свой творческий потенциал!
          <br></br>
          <br></br>                    
          В своей работе я использую следующие методы:
        </p>
        <ul className="services_list services_list_3">
          <li className="services_rec2">КПТ (Когнитивно-Поведенческая терапия)</li>
          <li className="services_rec2">Аналитическая психология</li>
          <li className="services_rec2">ДПДГ (Десенсибилизация и Переработка Движением Глаз (англ. EMDR - Eye Movement Desensitization and Reprocessing)</li>
          <li className="services_rec2">Эриксоновский гипноз</li>         
        </ul>
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
          <hr className="services_hr"></hr>
        </h3>
        <h3 className="services_price services_price_3">50 минут / 5000 рублей</h3>
      </div>
    </section>
  );
}

export default Services;