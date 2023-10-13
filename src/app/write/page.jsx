"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WritePage = () => {

    const { status } = useSession();

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "authenticated") {
        router.push("/");
    }


   

  return (
    <div
    className='container relative flex flex-col'
    >
        <input 
        className='p-[50px] text-[64px] border-none outline-none text-[#b3b3b1] placeholder:text-softTextColor focus:border-none focus:outline-none appearance-none bg-transparent'
        type='text' 
        placeholder='Title'
        />
        <div
        className='editor flex gap-5 h-[700px] relative'
        >
            <button
            onClick={() => setOpen(!open)}
            className='button w-[36px] h-[36px] rounded-full bg-transparent border-[1px] flex items-center justify-center cursor-pointer'
            >
                <Image src="/plus.png" alt="plus" width={16} height={16}/>
            </button>
            {open && (
                <div
                className='add flex gap-5 bg-mainBg absolute z-100 w-full left-[50px]'
                >
                    <button
                    className='button w-[36px] h-[36px] rounded-full bg-transparent border-[1px] flex items-center justify-center cursor-pointer border-[#1a8917]'
                    >
                        <Image src="/image.png" alt="plus" width={16} height={16}/>
                    </button>
                    <button
                    className='button w-[36px] h-[36px] rounded-full bg-transparent border-[1px] flex items-center justify-center cursor-pointer border-[#1a8917]'
                    >
                        <Image src="/external.png" alt="plus" width={16} height={16}/>
                    </button>
                    <button
                    className='button w-[36px] h-[36px] rounded-full bg-transparent border-[1px] flex items-center justify-center cursor-pointer border-[#1a8917]'
                    >
                        <Image src="/video.png" alt="plus" width={16} height={16}/>
                    </button>
                </div>
            )}
            <ReactQuill
            className='w-full placeholder:text-softTextColor text-[#b3b3b1]'
            theme="bubble" 
            value={value} 
            placeholder='Tell your story...'
            />
        </div>
        <button
        className='absolute top-[30px] right-[30px] py-[10px] px-[20px] border-none bg-[#1a8917] text-white cursor-pointer rounded-3xl'
        >
            Publish
        </button>
    </div>
  )
}

export default WritePage;