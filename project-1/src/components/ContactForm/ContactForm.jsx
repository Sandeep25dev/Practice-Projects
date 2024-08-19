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

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contactForm}>
        <div className={`${styles.topBtn}`}>
          <Button icon={<MdMessage fontSize="24px" />}>Via Support Chat</Button>
          <Button icon={<MdCall fontSize="24px" />}>Via Call</Button>
        </div>
        <Button icon={<MdEmail fontSize="24px" />} isOutline={true}>
          Via Email Form
        </Button>
        <form>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/service.svg" alt="contact img" />
      </div>
    </section>
  );
}

export default ContactForm;
