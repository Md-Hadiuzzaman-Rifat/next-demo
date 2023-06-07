import Link from "next/link";
import styles from "./Navbar.module.css";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";

const Navbar = () => {

  return (
    <div className={styles.container}>

      <div>
        <Link href="/"><h2>Omega</h2></Link>
      </div>
      <div className={styles.container_links}>
        <DarkMoodToggle></DarkMoodToggle>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/portfolio">Portfolio</Link>
        <Link className={styles.link} href="/blog">Blog</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
        <Link className={styles.link} href="/dashboard">Dashboard</Link>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
