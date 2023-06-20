"use client";
import React from "react";
import styles from "./Cover.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Image from "next/image";
const CoverSection = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I AM A MERN STACK DEVELOPER .  ", "I AM A NEXTJS DEVELOPER .  "],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.cover}>
      <div className={styles.content}>
        <p>Hello, This is Md Hadiuzzaman Rifat .</p>
        <span className={styles.animate} ref={el} />
      </div>
    </div>
  );
};

export default CoverSection;
