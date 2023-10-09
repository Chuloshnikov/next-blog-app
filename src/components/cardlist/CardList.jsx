import React from 'react'
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

const CardList = () => {
  return (
    <div
    className='flex-5'
    >
      <h1
      className='containerTitle'
      >
        Recent Posts
      </h1>
      <div
      className='posts'
      >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList;