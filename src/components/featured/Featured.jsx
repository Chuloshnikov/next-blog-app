import React from 'react';
import Image from "next/image";

const Featured = () => {
  return (
    <div className={'mt-[30px]'}>
      <h1 className={'xs:text-4xl mdl:text-5xl lgl:text-6xl xl:text-7xl 2xl:text-8xl'}>
        <b>Hey, United Farmers is here!</b> Discover our stories and creative ideas.
      </h1>
      <div className={'mt-[60px] flex items-center gap-[50px]'}>
        <div className={'flex-1 h-[500px] relative xs:hidden lgl:flex'}>
          <Image 
          src="/p1.jpeg" 
          alt="postImg" 
          fill 
          className='object-cover'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          />
        </div>
        <div className={'flex-1 flex flex-col gap-6'}>
            <h1 className={'text-4xl'}>
                Unearthing the Stories of Agriculture: The Impact of a Maxter Blog.
            </h1>
          <p className={'text-xl text-softTextColor font-light'}>
          A Maxter blog offers a firsthand insight into the day-to-day challenges and rewards of working on a farm.
        Through the farm blog, readers can learn about sustainable agricultural practices and innovative farming techniques.
        Documenting seasonal changes, the blogger captures the beauty and transformation of nature, giving urban readers a connection to the countryside.
          </p>
          <button className={'py-5 px-6 border-none rounded-[5px] max-w-max bg-softTextColor text-white'}>
            Read More
        </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;