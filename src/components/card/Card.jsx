import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div
    className='post mb-[50px] flex gap-[50px] items-center'
    >
        <div
        className='imagecontainer flex-1 h-[350px] relative'
        >
            <Image 
            className='object-cover'
            src='/p1.jpeg' 
            alt="postImg" 
            fill/>
        </div>
        <div
        className='textcontainer flex-1 flex flex-col gap-[30px]'
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
                className='containerTitle'
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h3>
            </Link>
            <p
            className='text-lg font-light text-softTextColor'
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente, maiores ratione nam quod dolorem aspernatur consequuntur 
                doloribus earum voluptatem deserunt pariatur ipsa, magni nisi. 
                Recusandae aut quasi eum necessitatibus inventore.
            </p>
            <Link
            className='border-b-[1px] border-red-500 max-w-max p-[2px]'
            href="/"
            >
                Read more
            </Link>
        </div>
    </div>
  )
}

export default Card;