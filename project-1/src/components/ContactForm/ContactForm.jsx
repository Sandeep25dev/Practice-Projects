import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleChatBtn = () => {
    console.log("Chat support requested");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contactForm}>
        <div className={`${styles.topBtn}`}>
          <Button onClick={handleChatBtn} icon={<MdMessage fontSize="24px" />}>
            Via Support Chat
          </Button>
          <Button icon={<MdCall fontSize="24px" />}>Via Call</Button>
        </div>
        <Button icon={<MdEmail fontSize="24px" />} isOutline={true}>
          Via Email Form
        </Button>
        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>Submit</Button>
          </div>
          <div>{`Name: ${name}, Email: ${email}, Text: ${text}`}</div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/service.svg" alt="contact img" />
      </div>
    </section>
  );
}

export default ContactForm;
