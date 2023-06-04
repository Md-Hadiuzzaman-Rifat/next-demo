import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {

  return (
    <div className={styles.container}>
      <div>
        <Link href="/"><h2>Omega</h2></Link>
      </div>
      <div>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/portfolio">Portfolio</Link>
        <Link className={styles.link} href="/blog">Blog</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/dashboard">Dashboard</Link>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
