import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themetoggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div
    className='flex items-center justify-between h-[100px]' 
    >
        <div
        className='xs:hidden lgl:flex gap-2 flex-1'
        >
            <Image className='cursor-pointer' src="/facebook.png" alt="facebook" width={24} height={24}/>
            <Image className='cursor-pointer' src="/instagram.png" alt="instagram" width={24} height={24}/>
            <Image className='cursor-pointer' src="/tiktok.png" alt="tictok" width={24} height={24}/>
            <Image className='cursor-pointer' src="/youtube.png" alt="youtube" width={24} height={24}/>
        </div>
        <div
        className='xs:text-2xl lgl:text-4xl font-bold flex-1 xs:text-left lgl:text-center '
        >
          <Link href="/">
              Ma<span className='text-blue-400'>X</span>ter
          </Link>
        </div>
        <ul
        className='flex gap-3 xl:gap-4 flex-1 xs:text-lg lgl:text-xl items-center xs:justify-end'
        >
          <li><Link href="/"/><ThemeToggle/></li>
          <li className='xs:hidden lgl:flex cursor-pointer'><Link href="/"/>Homepage</li>
          <li className='xs:hidden lgl:flex cursor-pointer'><Link href="/"/>Contact</li>
          <li className='xs:hidden lgl:flex cursor-pointer'><Link href="/"/>About</li>
          <li><Link href="/"/><AuthLinks/></li>
        </ul>
    </div>
  )
}

export default Navbar;