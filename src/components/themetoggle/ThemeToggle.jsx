"use client"

import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from "@/context/ThemeContext";

const themeToggle = () => {

  const {toggle, theme} = useContext(ThemeContext);

  return (
    <div
    className={`w-[42px] h-[22px] rounded-3xl ${theme === "light" ? 'bg-black' : "bg-white"} flex items-center justify-between relative`}
    >
      <Image src="/moon.png" alt="togglemoon" width={14} height={14}/>
      <div
      onClick={toggle}
      className={`w-[15px] h-[15px] rounded-full absolute ${theme === "dark" ? 'left-[1px] bg-[#0f172a]' : 'right-[1px] bg-white'}`}
      ></div>
      <Image src="/sun.png" alt="togglesun" width={14} height={14}/>
    </div>
  )
}

export default themeToggle;