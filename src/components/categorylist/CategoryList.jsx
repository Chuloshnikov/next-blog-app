import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div
    >
      <h1
      className='containerTitle'
      >
        Popular Categories
      </h1>
        <div
        className='flex flex-wrap justify-between gap-6'
        >
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
            <Link
            href="/blog?cat=style"
            className={'flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] bg-yellow-300'}
            >
                <Image 
                src="/style.png" 
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
                />
              <span>style</span>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList;