"use client";
import React from "react";
import styles from "./FeaturedPortfolio.module.css";
import dataProjects from "./dataProjects";
import Image from "next/image";
import Link from "next/link";

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
            <Link href={project.live} target="_blank">
              <Image
                className={styles.image}
                alt="Project Image"
                src={project.img}
                width={300}
                height={200}
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPortfolio;
