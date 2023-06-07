"use client"
import React, { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext=createContext()

export const ThemeProvider = ({children}) => {
    const [mood,setMood]=useState("dark")

    const toggle=()=>{
        setMood((prevMood)=>prevMood === "dark"? "light": "dark")
    }
    return (
        <ThemeContext.Provider value={{toggle,mood}}>
            <div className={`theme ${mood}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

 ThemeProvider;