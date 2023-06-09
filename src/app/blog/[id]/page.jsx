import { useParams } from 'next/navigation';
import React from 'react';
import styles from "./page.module.css"
import Image from 'next/image';

async function getData(id){
    const res=await fetch(`http://localhost:3000/api/posts/${id}`)
    if(!res.ok){
        throw new Error("Failed to fetch data.")
    }
    return res.json()
}

const page = async({params}) => {
    const data = await getData(params.id)
    console.log(data);
    return (
        <div className={styles.container}>
            <div className={styles.containerTop}>
                <div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                </div>
                
                <div>
                    <Image src={data.img} width={400} height={300}></Image>
                </div>
            </div>
            <div className={styles.middleSection}
            >{data.desc}</div>
        </div>
    );
};

export default page;