import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contactForm}></div>
      <div className={styles.contactImage}></div>
    </section>
  );
}

export default ContactForm;
