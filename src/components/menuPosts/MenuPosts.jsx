import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({withImage}) => {
  return (
    <div>
      <div
      className='items'
      >
        <Link
        className='item flex items-center gap-4 mb-[10px]'
        href="/"
        >
          {withImage && 
          (<div
          className='imagecontainer flex-1/3 relative aspect-square h-[80px]'
          >
            <Image 
            className='image rounded-full border-[3px] border-gray-400 object-cover'
            src="/p1.jpeg" 
            alt="postImg" 
            fill
            />
          </div>
          )}
          <div
          className='textcontainer flex-2/3 flex flex-col gap-[5px]'
          >
            <span
            className='category text-xs py-[3px] px-2 bg-orange-500 rounded-xl max-w-max text-white'
            >
              Travel
            </span>
            <h3
            className='font-bold text-lg text-softTextColor'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </h3>
            <div
            className='detail text-softTextColor text-xs'
            >
              <span
              className='username'
              >
                John Doe
              </span>
              <span
              className='date'
              >
              {" "}- 10/03/2023
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPosts;