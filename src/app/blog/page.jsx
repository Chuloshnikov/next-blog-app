import CardList from '@/components/cardlist/CardList';
import Menu from '@/components/menu/Menu';
import React from 'react'

const BlogPage = () => {
  return (
    <div>
        <h1
        className='py-[5px] px-[10px] text-white bg-orange-400 text-center text-2xl font-bold'
        >
            Style Blog
        </h1>
        <div
        className="flex gap-[50px]"
        >
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage;