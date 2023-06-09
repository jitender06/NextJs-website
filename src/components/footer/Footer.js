import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 jitender, all rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="image"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="image"
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="image"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Footer;
