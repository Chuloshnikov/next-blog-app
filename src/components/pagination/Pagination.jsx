"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Pagination = ({page, hasPrev, hasNext}) => {

  const router = useRouter();

  return (
    <div
    className='flex justify-between'
    >
      <button
      onClick={() => router.push(`?page=${page - 1}`)}
      className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-red-900'
      disabled={!hasPrev}
      >
        Previous
      </button>
      <button
      onClick={() => router.push(`?page=${page + 1}`)}
      className='w-[100px] border-none p-[16px] bg-red-500 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-red-900'
      disabled={!hasNext}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination;