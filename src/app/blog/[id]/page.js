import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            architecto ullam hic molliti
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            accusantium enim quibusdam, tenetur sint ullam voluptas, voluptatem
            unde, nobis hic iusto fuga consequuntur dicta voluptate
            necessitatibus reiciendis nemo? Libero, alias.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt="ss"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>jitender</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quam ipsa vel illo tempore officia maxime, deleniti recusandae fugiat
          molestiae? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ipsam, voluptates totam! Consequatur rem dolor aspernatur minima nihil
          aperiam veritatis rerum dignissimos inventore aliquid temporibus
          ipsam, voluptatibus, qui, delectus quisquam a!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
