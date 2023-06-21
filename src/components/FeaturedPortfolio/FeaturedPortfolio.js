"use client";
import React from "react";
import styles from "./FeaturedPortfolio.module.css";
import dataProjects from "./dataProjects";
import Image from "next/image";

const FeaturedPortfolio = () => {
  return (
    <div className={styles.featuredPortfolio}>
      <div className={styles.text}>
        <p>Done</p>
        <h4>Project</h4>
      </div>
      <div className={styles.portfolio}>
        {dataProjects.map((project) => (
          <div className={styles.imageGrid} key={project.id}>
            <Image
            className={styles.image}
              alt="Project Image"
              src={project.img}
              width={300}
              height={200}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPortfolio;
