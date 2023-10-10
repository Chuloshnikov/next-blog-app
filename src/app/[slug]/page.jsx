import Menu from '@/components/menu/Menu';
import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div>
        <div
        className='infocontainer flex align-super gap-[50px]'
        >
            <div
            className='textContainer flex-1'
            >
                <h1
                className='title xs:text-[36px] lgl:text-[48px] xl:text-[54px] font-bold mb-[50px]'
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </h1>
                <div
                className='user flex items-center gap-4'
                >
                    <div
                    className='userimagecontainer w-[50px] h-[50px] relative'
                    >
                        <Image src="/p1.jpeg" alt="userImage" className="avatar rounded-full object-cover" fill/>
                    </div>
                    <div
                    className='userText flex flex-col gap-1 text-softTextColor font-medium text-'
                    >
                        <span className='usename'>John Doe</span>
                        <span className='date'>01/01/2024</span>
                    </div>
                </div>
            </div>
            <div
            className='imageContainer xs:hidden lgl:block flex-1 h-[350px] relative'
            >
                <Image src="/p1.jpeg" alt="postImage" className="image" fill/>
            </div>
        </div>
        <div
            className='content flex gap-[50px]'
            >
                <div
                className='post mt-[60px] xs:w-full lgl:basis-2/3'
                >
                    <div className='xs:text-lg lgl:text-xl font-light'>
                        <p 
                        className='mb-6'
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum, sapiente. Officia a temporibus ab, ea ad necessitatibus 
                            quidem molestias quasi officiis tempore quo unde 
                            itaque explicabo dolorem, alias ratione odit?
                        </p>
                        <p
                        className='mb-6'
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum, sapiente. Officia a temporibus ab, ea ad necessitatibus 
                            quidem molestias quasi officiis tempore quo unde 
                            itaque explicabo dolorem, alias ratione odit?
                        </p>
                        <p
                        className='mb-6'
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum, sapiente. Officia a temporibus ab, ea ad necessitatibus 
                            quidem molestias quasi officiis tempore quo unde 
                            itaque explicabo dolorem, alias ratione odit?
                        </p>
                    </div>
                    <div
                    className='comment'
                    >
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage;