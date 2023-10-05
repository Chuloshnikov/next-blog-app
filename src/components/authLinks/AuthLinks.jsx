"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from "@/context/ThemeContext";

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const {theme} = useContext(ThemeContext);

  //temporary
  const status = "notauthenticated"
  return (
    <div
    className='flex gap-3 xl:gap-4 items-center'
    >
      {status === "notauthenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span>Logout</span>
      </>
    )}
    {/*burger*/}
    <div
    onClick={() => setOpen(!open)}
    className='w-[20px] h-[20px] xs:flex lgl:hidden flex-col justify-between cursor-pointer '
    >
      <div className={`w-full h-[3px] ${theme === "dark" ? 'bg-[#ddd]' : 'bg-black'}`}></div>
      <div className={`w-full h-[3px] ${theme === "dark" ? 'bg-[#ddd]' : 'bg-black'}`}></div>
      <div className={`w-full h-[3px] ${theme === "dark" ? 'bg-[#ddd]' : 'bg-black'}`}></div>
    </div>
    {open && (
      <div
      className={`absolute left-0 top-[100px] h-screen w-full 
      ${theme === "dark" ? 'bg-[#ddd]' : 'bg-black'}
      flex flex-col items-center justify-center gap-10 text-4xl`}
      >
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
        )}
      </div>
    )}
    </div>
  )
}

export default AuthLinks;