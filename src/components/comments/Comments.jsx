"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.APP_URL}comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div
    className='mt-[50px]'
    >
        <h2
        className='text-softTextColor mb-[30px]'
        >
            Comments
        </h2>
        {status === "authenticated" ? (
        <div
        className='write flex items-center justify-between gap-6'
        >
            <textarea 
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Write a comment...'
            className='input p-6 w-full'
            ></textarea>
            <button
            onClick={handleSubmit}
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
            {isLoading ? "loading" : data?.map((item) => (
                <div
                key={item.id}
                className='comment mb-[50px]'
                >
                    <div
                    className='user flex items-center gap-5 mb-5'
                    >
                        <Image src={item.user.image} alt="userImg rounded-full object-cover" width={50} height={50}/>
                        <div
                        className='userInfo flex flex-col gap-[5px] text-softTextColor'
                        >
                            <span className='username text-medium'>{item.user.name}</span>
                            <span className='date text-sm'>{item.createdAt}</span>
                        </div>
                    </div>
                    <p
                    className='desc text-md'
                    >
                       {item.desc}
                    </p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Comments;