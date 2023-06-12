import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {

  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
 
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item) => 
        <Link key={item.key} href={`/blog/${item._id}`}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <br />
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Blog;
