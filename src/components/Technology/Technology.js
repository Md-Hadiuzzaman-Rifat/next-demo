import React from "react";
import styles from "./Technology.module.css";
import Image from "next/image";

const Technology = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>My Skills</h1>
        <p>All Libraries and Framework which I am proficient at:</p>
      </div>
      <div className={styles.technology}>
        <div>
            <Image width={320} height={180} src='/library/react.png' alt="" />
        </div>
        <div>
            <Image width={320} height={180} src='/library/nodejs.png' alt="" />
        </div>
        <div>
            <Image width={320} height={180} src='/library/mongodb.png' alt="" />
        </div>
        <div>
            <Image width={320} height={180} src='/library/firbase.png' alt="" />
        </div>
        <div>
            <Image width={320} height={180} src='/library/jwt.png' alt="" />
        </div>
        <div>
            <Image width={320} height={180} src='/library/redux.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
