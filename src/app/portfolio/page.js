"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
const Portfolio = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span
            className={styles.title}
            style={mode === "light" ? { color: "white" } : { color: "white" }}
          >
            Illustrations
          </span>
        </Link>

        <Link href="/portfolio/website" className={styles.item}>
          <span
            className={styles.title}
            style={mode === "light" ? { color: "white" } : { color: "white" }}
          >
            Website
          </span>
        </Link>

        <Link href="/portfolio/application" className={styles.item}>
          <span
            className={styles.title}
            style={mode === "light" ? { color: "white" } : { color: "white" }}
          >
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
