import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((items) => (
        <Link
          href={`/blog/${items.id}`}
          className={styles.container}
          key={items.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt="hgj"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{items.title}</h1>
            <p className={styles.desc}>{items.body}</p>
            <h1>{items.id}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
