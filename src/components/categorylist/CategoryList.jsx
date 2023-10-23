import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const getData = async () => {
  const res = await fetch(`${process.env.APP_URL}categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const iconStyle = (slug) => {
    let style;
  if (slug === "fashion") {
    style = "bg-purple-400"
  } else if (slug === "culture") {
    style = "bg-yellow-400"
  } else if (slug === "coding") {
    style = "bg-blue-400"
  } else if (slug === "food") {
    style = "bg-red-400"
  } else if (slug === "travel") {
    style = "bg-orange-300"
  } else if (slug === "style") {
    style = "bg-green-300"
  } else {
    style = "bg-grey-400"
  }
  return style;
}

const CategoryList = async () => {

  const data = await getData();

  return (
    <div
    >
      <h1
      className='containerTitle'
      >
        Popular Categories
      </h1>
        <div
        className='flex flex-wrap justify-between gap-6'
        >
          {
            data?.map((item) => (
              <Link
              href="/blog?cat=style"
              className={`flex items-center gap-[10px] capitalize xs:w-full mdl:w-[45%] lgl:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-[10px] 
              ${iconStyle(item.slug)}`}
              key={item._id}
              >
                  {item.img && (<Image 
                  src={item.img}
                  className='w-[32px] h-[32px] rounded-full'
                  width={32}
                  height={32}
                  alt="categoryImg"
                  />)
                  }
              <span className='text-white font-semibold'>{item.title}</span>
              </Link>
            ))
          }
        </div>
    </div>
  )
}



export default CategoryList;

