import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="meeting"
          className={styles.img}
        />
        <div className={styles.imgtext}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are You</h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
            voluptatibus reiciendis molestiae repellat quas autem corporis,
            dolorum illum nisi. Sapiente at suscipit unde sed quae veritatis
            facilis tempore ducimus.
          </p>
          <br />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga
            tenetur eaque doloribus voluptas fugiat aperiam vitae totam pariatur
            libero! Beatae saepe voluptatibus inventore vero consequuntur
            tempora quas tenetur, modi, dolorum nihil quod vitae? Illo vel
            dolores quod deserunt cupiditate?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
            adipisci qui nemo cum deleniti atque quisquam minus ab quo dolores!
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
