import React from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => { 
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>About</p>
        <h4>Me</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.content_image}>
          <Image
            className={styles.image}
            src="/md_Hadiuzzaman_Rifat.JPG"
            width={400}
            height={500}
            alt="photo of developer"
          ></Image>
        </div>
        <div className={styles.content_description}>
          <h1>Full Stack Web Developer</h1>
          <p>
            I am a &ldquo; <span>Full Stack Web Developer</span> &ldquo;. My Specialized area
            is <span>MERN</span> Stack. I also use <span>NextJs</span> Framework. This project is made
            with NextJs . If you need any information please follow my social
            links bellow. Or if you interested to work with me, feel free to
            contact me. I can make SEO friendly and dynamic website according to
            client choice. Thank you Stay healthy, stay safe.
          </p>
          <Link  target="_blank" href="https://drive.google.com/drive/folders/1gjqloh3XjFKZ3iVfmOxIGbK-QBjVrPP8?usp=sharing">
            <button>Download Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
