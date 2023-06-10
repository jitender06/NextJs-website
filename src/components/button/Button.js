import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ text, url }) => {
  return (
    <Link target="_blank" href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
