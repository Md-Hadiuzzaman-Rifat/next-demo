import React from "react";
import styles from "./SocialLink.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span>Get </span>In Touch
        </h1>
      </div>
      <div className={styles.socialLinks}>
        <div className={styles.circle}>
          <FaLinkedinIn className={styles.icon}></FaLinkedinIn>
        </div>
        <div className={styles.circle}>
          <FaFacebookF className={styles.icon}></FaFacebookF>
        </div>
        <div className={styles.circle}>
          <FaInstagram className={styles.icon}></FaInstagram>
        </div>
        <div className={styles.circle}>
          <FaTwitter className={styles.icon}></FaTwitter>
        </div>
        <div className={styles.circle}>
          <AiOutlineMail className={styles.icon}></AiOutlineMail>
        </div>
      </div>
      <p>
        Copyright © 2023 All rights reserved | This template is made with Love
        by <span>Md Hadiuzzmana Rifat</span>{" "}
      </p>
    </div>
  );
};

export default SocialLinks;
