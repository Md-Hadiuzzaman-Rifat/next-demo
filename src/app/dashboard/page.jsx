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

  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
 
  // console.log(session?.data?.user.name);
  const username=session?.data?.user.name
  console.log(data);


  const handleSubmit=async(e)=>{
    e.preventDefault()

    const title=e.target[0].value;
    const desc=e.target[1].value;
    const img=e.target[2].value;
    const content=e.target[3].value;

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

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };


  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.dashboard}>
 
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
                    <span onClick={() => handleDelete(post._id)} className={styles.delete}>X</span>
                  </div>
                </div>
              ))}
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.heading}>Post Your Blog...</h1>
          <h3>Image link must be take from &quot;freepik.com&quot; or &quot; pexels.com&quot;</h3>
            <div className={styles.formPost}>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Description"/>
                <input type="text" placeholder="Image must be take from 'freepik.com' or 'pexels.com'"/>
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

