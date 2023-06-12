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

  const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  // console.log(session?.data?.user.name);
  console.log(data);

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const title=e.target[0].value;
    const desc=e.target[0].value;
    const img=e.target[0].value;
    const content=e.target[0].value;
    const username=e.target[0].value 

    try{
      await fetch('/api/posts',{
        method: "POST",
        body:JSON.stringify({
          title,
          desc,
          img,
          content,
          username
        })
      })
      mutate()
      e.target.reset()
    }
    catch(err){
      console.log(err);
    }
  }

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
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formPost}>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Image"/>
                <textarea placeholder="Content" id="" cols="30" rows="5"></textarea>
                <button type="submit">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;

// onClick={() => handleDelete(post._id)
