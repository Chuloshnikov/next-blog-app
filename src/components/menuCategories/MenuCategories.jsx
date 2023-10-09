import React from 'react';
import Link from 'next/link';

const MenuCategories = () => {
  return (
    <div
    className=''
    >
         <div
        className='flex flex-wrap gap-2 mt-[35px] mb-[60px]'
        >
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={' capitalize py-[10px] px-[25px] justify-center rounded-[10px] text-sm bg-yellow-300'}
            >
              <span>style</span>
            </Link>
        </div>
    </div>
  )
}

export default MenuCategories;