"use client";
import React from "react";
import styles from "./Testimonial.module.css";
import testimonialData from "./data";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className={styles.content}>
        <h1>
          <span>Client </span>Testimonial
        </h1>
        <div className={styles.client}>
          {testimonialData.map((data) => (
            <div key={data.id}>
              {
                <div className={styles.client_review}>
                  <div className={styles.client_flex}>
                    <Image
                      src={data.img}
                      width={100}
                      height={100}
                      alt="Photos of reviewer"
                    ></Image>
                    <div>
                      <h3>{data.title}</h3>
                      <p className={styles.reviewName}>{data.name}</p>
                    </div>
                  </div>
                  <div>
                    <p>{data.desc}</p>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
