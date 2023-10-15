"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Pagination = () => {

  const router = useRouter

  return (
    <div
    className='flex justify-between'
    >
      <button
      onClick={() => router.push(`?=${page - 1}`)}
      className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer'
      >
        Previous
      </button>
      <button
      onClick={() => router.push(`?=${page + 1}`)}
      className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination;