import Image from "next/image";
import home from "public/outside.png";
import styles from "./Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_texts}>
        <h1>Developer Showcase Website.</h1>
        <p style={{lineHeight:'1.5rem'}}>
          A developer can share blog article, can see others article as well. New feature will introduce after some day. The new feature can offer a developer to share portfolio sites.
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
