import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Button from "@/components/button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.description}>
          Turning your ideas into reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="/" text="See Our Website" />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="heroimage" className={styles.imagecontainer} />
      </div>
    </div>
  );
}
