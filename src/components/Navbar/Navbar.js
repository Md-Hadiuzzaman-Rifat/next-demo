"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";
import { signOut, useSession } from "next-auth/react";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(tog=>!tog)
  };
  // console.log(toggle);

  const session = useSession();
  // console.log(session);
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <h2>Omega</h2>
        </Link>
      </div>
      <div className={styles.container_links}>
        <DarkMoodToggle />
        <div className={styles.icon}>
          <IoReorderThree onClick={handleToggle} />
        </div>
        {/* when the toggle will show */}
        {
          toggle && (
            <div className={styles.toggleNavigation}>
            {/* toggle  */}
            <div className={styles.toggleNavigationItem}>
              <Link onClick={handleToggle} className={styles.link} href="/">
                Home
              </Link>
              <Link onClick={handleToggle} className={styles.link} href="/portfolio">
                Portfolio
              </Link>
              <Link onClick={handleToggle} className={styles.link} href="/blog">
                Blog
              </Link>
              <Link onClick={handleToggle} className={styles.link} href="/about">
                About
              </Link>
              <Link onClick={handleToggle} className={styles.link} href="/contact">
                Contact
              </Link>
              <Link onClick={handleToggle} className={styles.link} href="/dashboard">
                Dashboard
              </Link>
            </div>
            {/* toggle end  */}
          </div>
          )
        }
        <div className={styles.container_links_toggle}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/portfolio">
            Portfolio
          </Link>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          <Link className={styles.link} href="/dashboard">
            Dashboard
          </Link>
        </div>
        {session.status === "authenticated" && (
          <span onClick={signOut}>Logout</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
