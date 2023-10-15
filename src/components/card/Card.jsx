import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ key, item }) => {
  return (
    <div
    key={key}
    className='post mb-[50px] flex gap-[50px] items-center'
    >
        <div
        className='imagecontainer xs:hidden xl:block flex-1 h-[300px] relative'
        >
            <Image 
            className='object-cover'
            src='/p1.jpeg' 
            alt="postImg" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div
        className='textcontainer flex-1 flex flex-col gap-[10px]'
        >
            <div
            className='detail'
            >
                <span
                className='text-softTextColor'
                >
                    11/02/2033 -{" "}
                </span>
                <span
                className='text-red-400'
                >
                    CULTURE
                </span>
            </div>
            <Link
            href="/"
            >
                <h3
                className='font-bold text-2xl'
                >
                    {item.title}
                </h3>
            </Link>
            <p
            className='text-base font-light text-softTextColor'
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente, maiores ratione nam quod dolorem aspernatur consequuntur 
                doloribus earum voluptatem deserunt pariatur ipsa, magni nisi. 
                Recusandae aut quasi eum necessitatibus inventore.
            </p>
            <Link
            className='border-b-[1px] border-red-500 max-w-max p-[1px]'
            href="/"
            >
                Read more
            </Link>
        </div>
    </div>
  )
}

export default Card;