"use client"
import React from 'react';
import styles from "./Testimonial.module.css"
import testimonialData from "./data"

const Testimonial = () => {
    return (
        <div>
            <div className={styles.content}>
                <h1><span>Client </span>Testimonial</h1>
                {
                    testimonialData.map((data)=> <div key={data.id}>
                        {
                            
                        }
                    </div> )
                }
            </div>
        </div>
    );
};

export default Testimonial;

