import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lets's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imagecontainer}>
          <Image
            src="/contact.png"
            alt="contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.formcontainer}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            cols="30"
            rows="10"
            placeholder="message"
            className={styles.textArea}
          ></textarea>
          <Button text="Send" url="#" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
