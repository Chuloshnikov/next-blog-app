import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
    className='flex mt-[50px] xs:flex-col xs:gap-10 lgl:flex-row justify-between text-softTextColor py-6 px-0'
    >
      <div
      className='flex-1 flex flex-col gap-[14px]'
      >
       
        <div>
        <div
        className='text-2xl font-bold'
        >
          <h3>Ma<span className='text-blue-400'>X</span>ter</h3>
        </div>
          <p
          className='font-light'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nisi id sequi maxime commodi optio odit voluptas, 
            at temporibus odio eveniet assumenda quaerat vitae 
            voluptatem! Ipsum obcaecati expedita libero ut fuga?
          </p>
          <div
          className='mt-[10px] flex gap-3'
          >
            <Image src="/facebook.png" alt="facebook" width={18} height={18}/>
            <Image src="/instagram.png" alt="instagram" width={18} height={18}/>
            <Image src="/tiktok.png" alt="tiktok" width={18} height={18}/>
            <Image src="/youtube.png" alt="youtube" width={18} height={18}/>
          </div>
        </div>
      </div>
      <div
      className='links flex-1 flex xs:justify-between lgl:justify-end xs:gap-0 lgl:gap-24'
      >
        <ul 
        className='flex flex-col gap-[10px] font-light'
        >
          <span className='font-bold'>Links</span>
          <li><Link href="/">Homepage</Link></li>
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        <ul
        className='flex flex-col gap-[10px] font-light'
        >
          <span className='font-bold'>Tags</span>
          <li><Link href="/">Style</Link></li>
          <li><Link href="/">Fasion</Link></li>
          <li><Link href="/">Coding</Link></li>
          <li><Link href="/">Travel</Link></li>
        </ul>
        <ul
        className='flex flex-col gap-[10px] font-light'
        >
          <span className='font-bold'>Social</span>
          <li><Link href="/">Facebook</Link></li>
          <li><Link href="/">Instagram</Link></li>
          <li><Link href="/">Tiktok</Link></li>
          <li><Link href="/">Youtube</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;