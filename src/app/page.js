import Image from "next/image";
import home from "public/outside.png";
import styles from "./Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_texts}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          consequatur nobis.
        </p>
        <Link href="/developer">
          <button> Developer Portfolio</button>
        </Link>
      </div>
      <div className={styles.home_image}>
        <Image src={home} alt="Home page Programming image."></Image>
      </div>
    </div>
  );
}
