"use client"

import Image from "next/image";
import styles from "./Contact.module.css";
import contact from "/public/contact.png";

const Contact = () => {
    const handleSubmit=()=>{

    }
    return (
        <div className={styles.contact}>
            <h1>Let`s Keep in Touch</h1>
            <div className={styles.contact_container}>
                <div className={styles.contact_container_image}>
                <Image src={contact} alt="Contact Image" ></Image>
                </div>
                
            
            <form onSubmit={handleSubmit}>
                <input placeholder="name" type="text" />
                <input placeholder="email" type="text" />
                <textarea placeholder="message" name="" id="" cols="30" rows="5"></textarea>
                <button  type="submit">Send</button>
            </form>
            </div>

        </div>
    );
};

export default Contact;