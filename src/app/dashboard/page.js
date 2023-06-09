import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/1.png"
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.text}>Free Training </h3>
          <p className={styles.desc}>
            We equip you with the knowledge and skills to confidently manage and
            update your website, putting you in control of your online success.
          </p>
          <button className={styles.btn}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
