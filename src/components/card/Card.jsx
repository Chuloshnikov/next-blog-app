import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ key, item }) => {
  return (
    <div
    key={key}
    className='post mb-[50px] flex gap-[50px] items-center'
    >
        {item.img && (
            <div
            className='imagecontainer xs:hidden xl:block flex-1 h-[300px] relative'
            >
                <Image 
                className='object-cover'
                src={item.img} 
                alt="postImg" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            )}
        <div
        className='textcontainer flex-1 flex flex-col gap-[10px]'
        >
            <div
            className='detail'
            >
                <span
                className='text-softTextColor'
                >
                    {item.createdAt.substring(0, 10)} -{" "}
                </span>
                <span
                className='text-red-400'
                >
                    {item.catSlug}
                </span>
            </div>
            <Link
            href={`/posts/${item.slug}`}
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
               {item.desc.substring(0, 60)}
            </p>
            <Link
            className='border-b-[1px] border-red-500 max-w-max p-[1px]'
            href={`/posts/${item.slug}`}
            >
                Read more
            </Link>
        </div>
    </div>
  )
}

export default Card;