import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
const Category = ({ params }) => {
  // console.log(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image
            fill={true}
            className={styles.image}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image
            fill={true}
            className={styles.image}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image
            fill={true}
            className={styles.image}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgcontainer}>
          <Image
            fill={true}
            className={styles.image}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
