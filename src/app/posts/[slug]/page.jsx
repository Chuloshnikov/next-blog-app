import Menu from '@/components/menu/Menu';
import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const getData = async (slug) => {
    const res = await fetch(
        `http://localhost:3000/api/posts/${slug}`,
        {
            cache: "no-store",
        }
    );
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
  

const SinglePage = async ({ params }) => {

    const {slug} = params;

    const data = await getData(slug);

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
                    {data?.title}
                </h1>
                <div
                className='user flex items-center gap-4'
                >
                    { data?.user?.image && (
                        <div
                        className='userimagecontainer w-[50px] h-[50px] relative'
                        >
                            <Image src={data.user.image} alt="userImage" className="avatar rounded-full object-cover" fill/>
                        </div>
                    )}
                    <div
                    className='userText flex flex-col gap-1 text-softTextColor font-medium text-'
                    >
                        <span className='username'>{data?.user.name}</span>
                        <span className='date'>01/01/2024</span>
                    </div>
                </div>
            </div>
            {data?.img && (
                <div
                className='imageContainer xs:hidden lgl:block flex-1 h-[350px] relative'
                >
                    <Image src="/p1.jpeg" alt="postImage" className="image" fill/>
                </div>
            )}
        </div>
        <div
            className='content flex gap-[50px]'
            >
                <div
                className='post mt-[60px] xs:w-full lgl:basis-2/3'
                >
                    <div 
                    className='xs:text-lg lgl:text-xl font-light' 
                    dangerouslySetInnerHTML={{__html:data?.desc}}
                    />
                       
                    <div
                    className='comment'
                    >
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu/>
            </div>
    </div>
  )
}

export default SinglePage;