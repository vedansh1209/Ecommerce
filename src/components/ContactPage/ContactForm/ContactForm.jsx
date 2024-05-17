import styles from "./Contact.module.css";
import Button from "../Button/Button.jsx";
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";


const ContactForm = () => {
  const [name, setName] = useState("NAME "+" ");
  const [email, setEmail] = useState("MAIL "+" ");
  const [text, setText] = useState("TEXT"+" ");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn} >
          
          <Button 
          text="VIA SUPPORT CHAT" 
          icon={<MdMessage fontSize="24"/>}
          />
          <Button 
          text="VIA CALL" 
          icon={<FaPhoneAlt fontSize="24"/>}
          />
        </div>
        <Button 
           isOutline={true}
           text="VIA EMAIL FORM"
           icon={<HiMail fontSize="24"/>}
          />
          <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>

      </div>

      <div className={styles.contact_image}>
      <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  )
}

export default ContactForm