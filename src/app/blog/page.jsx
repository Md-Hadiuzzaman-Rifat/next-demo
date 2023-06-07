import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
// import img from "./public/apps.jpg"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => 
        <Link key={item.key} href={`/blog/${item.id}`}>
          <div className="imgContainer">
            <Image
              src={'/apps.jpg'}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Blog;
