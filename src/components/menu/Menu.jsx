import React from 'react';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div
    className='xs:hidden lgl:block lgl:basis-1/3 mt-[60px]'
    >
      <h2
      className='subtitle text-softTextColor '
      >
        {"What's not"}
      </h2>
      <h3
      className='title text-xl font-bold'
      >
        Most Popular
      </h3>
      <MenuPosts withImage={false}/>
      <MenuPosts withImage={false}/>
      <MenuPosts withImage={false}/>
      <MenuPosts withImage={false}/>
      <MenuPosts withImage={false}/>
      <h2
      className='subtitle text-softTextColor '
      >
        Discover by topic
      </h2>
      <h3
      className='title text-xl font-bold'
      >
        Categories
      </h3>
      <MenuCategories/>
      <h2
      className='subtitle text-softTextColor '
      >
        Chosen by the editor
      </h2>
      <h3
      className='title text-xl font-bold'
      >
        Editors Pick 
      </h3>
      <MenuPosts withImage={true}/>
      <MenuPosts withImage={true}/>
      <MenuPosts withImage={true}/>
      <MenuPosts withImage={true}/>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu;