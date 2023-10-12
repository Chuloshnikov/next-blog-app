"use client"

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/context/ThemeContext';


const ThemeProvider = ({children}) => {

const {theme} = useContext(ThemeContext);
const [mounted, setMounted] = useState(false)
const dark = 'text-[#ddd] bg-[#0f172a]';
const light = 'text-black bg-white';

useEffect(() => {
    setMounted(true)
}, []);

if (mounted) {
    return (
        <div className={theme === "light" ? `${light}`: `${dark}`}>{children}</div>
      )
}

}

export default ThemeProvider