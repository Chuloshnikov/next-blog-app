import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {


    const status = "autenticated";
  return (
    <div
    className='mt-[50px]'
    >
        <h2
        className='text-softTextColor mb-[30px]'
        >
            Comments
        </h2>
        {status === "autenticated" ? (
        <div
        className='write flex items-center justify-between gap-6'
        >
            <textarea 
            placeholder='Write a comment...'
            className='input p-6 w-full'
            ></textarea>
            <button
            className='py-4 px-5 text-white bg-teal-500 border-none rounded-[5px] cursor-pointer'
            >
                Send
            </button>
        </div>
        ) : (
        <Link href="/login">
            Login to write a comment
        </Link>
        )}
        <div
        className='comments mt-[50px]'
        >
            <div
            className='comment mb-[50px]'
            >
                <div
                className='user flex items-center gap-5 mb-5'
                >
                    <Image src="/p1.jpeg" alt="userImg rounded-full object-cover" width={50} height={50}/>
                    <div
                    className='userInfo flex flex-col gap-[5px] text-softTextColor'
                    >
                        <span className='username text-medium'>John Doe</span>
                        <span className='date text-sm'>01/01/23</span>
                    </div>
                </div>
                <p
                className='desc text-md'
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Nihil eos temporibus quas fugit nam, autem placeat distinctio beatae 
                    ad et a quis pariatur tempora quae magnam eaque eligendi necessitatibus dignissimos.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments;