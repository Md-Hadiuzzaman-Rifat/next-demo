import React from "react";
import styles from "./SocialLink.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail , AiFillGithub} from "react-icons/ai";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span>Get </span>In Touch
        </h1>
      </div>
      <div className={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/md-hadiuzzaman-rifat/" target="_blank">
          <div className={styles.circle}>
            <FaLinkedinIn className={styles.icon}></FaLinkedinIn>
          </div>
        </Link>
        <Link target="_blank" href="https://www.facebook.com/mdhadiuzzamanrifat/">
          <div className={styles.circle}>
            <FaFacebookF className={styles.icon}></FaFacebookF>
          </div>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/mdhadiuzzamanrifat/">
          <div className={styles.circle}>
            <FaInstagram className={styles.icon}></FaInstagram>
          </div>
        </Link>
        <Link target="_blank" href="https://twitter.com/md_hadi_rifat">
          <div className={styles.circle}>
            <FaTwitter className={styles.icon}></FaTwitter>
          </div>
        </Link>
        <Link target="_blank" href="https://github.com/Md-Hadiuzzaman-Rifat">
          <div className={styles.circle}>
            <AiFillGithub className={styles.icon}></AiFillGithub>
          </div>
        </Link>
      </div>
      <p>
        Copyright © 2023 All rights reserved | This template is made with Love
        by <span>Md Hadiuzzmana Rifat</span>{" "}
      </p>
    </div>
  );
};

export default SocialLinks;
