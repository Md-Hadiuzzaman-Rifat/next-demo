"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./dashboard.module.css";
import Image from "next/image";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/posts", fetcher);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div>
        <h1 className={styles.heading}>Dashboard</h1>
        <div className={styles.container}>
          <div className={styles.content}>
            {!isLoading &&
              data &&
              data.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <div className={styles.contentText}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span className={styles.delete}>X</span>
                  </div>
                </div>
              ))}
          </div>
          <form className={styles.form}>
            <div className={styles.formPost}>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Image"/>
                <textarea placeholder="Content" id="" cols="30" rows="5"></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;

// onClick={() => handleDelete(post._id)
