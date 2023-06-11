"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
    const [err,setErr]=useState(false)
    const router=useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
    
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
          setErr(err);
          console.log(err);
        }
      };

  return (
    <div>
      <h2>This is register Form.</h2>
      <form className={styles} onSubmit={handleSubmit}>
        <input type="text" placeholder="username" required/>
        <input type="email" placeholder="email" required/>
        <input type="password" placeholder="password" required/>
        <button type="submit">Register</button>
      </form>
      <br />
      <Link href="/dashboard/login">Login</Link>
      {err && <div>{err}</div>   }
    </div>
  );
};

export default Register;

