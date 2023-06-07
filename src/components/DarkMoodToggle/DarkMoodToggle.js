"use client"
import React, { useContext } from 'react';
import styles from "./DarkMoodToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext/ThemeContext';

const DarkMoodToggle = () => {
    const {toggle,mood}=useContext(ThemeContext)
    return (
        <div>
            <div className={styles.container} onClick={toggle}>
                <div className={styles.icon }>🌙</div>
                <div className={styles.icon }>🔆</div>
                <div className={styles.ball } style={mood==="light"?{left:"2px"}:{right:"2px"}} ></div>
            </div>
        </div>
    );
};

export default DarkMoodToggle;
