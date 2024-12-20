import React from "react";
import "./Contacts.css";
import mail from "../data/images/e-mail.png";
import telegram from "../data/images/telegram.png";
import whatsApp from "../data/images/whatsapp.png";
import telephone from "../data/images/telephone.png";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts_frame">
        <div className="contacts_top">
          <h2 className="contacts_contacts">Контакты</h2>
          <h2 className="contacts_name">Ольга Геннадьевна Смирнова</h2>
        </div>
        <div className="contacts_info">
          <div className="contacts_option">
            <img className="contacts_images" src={telephone} alt="telephone" />
            <h3>+7 910 4074728</h3>
          </div>
          <div className="contacts_option">
            <img className="contacts_images" src={whatsApp} alt="WhatsApp" />
            <h3>+7 910 4074728</h3>
          </div>
          <div className="contacts_option">
            <img className="contacts_images" src={mail} alt="e-mail" />
            <h3>smirnovamail@yandex.ru</h3>
          </div>
          <div className="contacts_option">
            <img className="contacts_images" src={telegram} alt="telegram" />
            <h3> https://t.me/OlgaSmirnova_blog</h3>
          </div>
        </div>
        {/* <div className="insertion">insertion</div> */}
      </div>
    </section>
  );
}

export default Contacts;