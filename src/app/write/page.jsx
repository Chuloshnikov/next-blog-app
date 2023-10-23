"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { app } from '@/utils/firebase';


const storage = getStorage(app);

const WritePage = () => {

    const { status } = useSession();

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    
    useEffect(() => {
        const upload = () => {
            const name = new Date().gatTime + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                  case "paused":
                    console.log("Upload is paused");
                    break;
                  case "running":
                    console.log("Upload is running");
                    break;
                }
              },
              (error) => {},
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  setMedia(downloadURL);
                });
              }
            );
        }
        file && upload();
    }, [file])

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "unauthenticated") {
        router.push("/");
    }

    const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");


      const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc: description,
            img: media,
            slug: slugify(title),
            catSlug: catSlug || "style", //If not selected, choose the general category
          }),
        });
    
        if (res.status === 200) {
          const data = await res.json();
          router.push(`/posts/${data.slug}`);
        }
      };

  return (
    <div
    className='container relative flex flex-col'
    >
        <input
        onChange={e => setTitle(e.target.value)} 
        className='p-[50px] text-[64px] border-none outline-none text-softTextColor placeholder:text-[#b3b3b1] focus:border-none focus:outline-none appearance-none bg-transparent'
        type='text' 
        placeholder='Title'
        />
         <select 
        onChange={(e) => setCatSlug(e.target.value)}
        className='mb-[50px] py-[10px] px-[20px] ml-[50px] max-w-max text-softTextColor bg-transparent'
        >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
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
                className='add flex gap-5 bg-transparent absolute z-100 w-full left-[50px] z-10'
                >
                    <input type="file" id="image" onChange={e => setFile(e.target.files[0])}
                    style={{ display: "none"}}
                    />
                    <button
                        className='button w-[36px] h-[36px] rounded-full  border-[1px] flex items-center justify-center cursor-pointer border-[#1a8917]'
                        >
                    <label
                    htmlFor='image'
                    >
                        <Image src="/image.png" alt="plus" width={16} height={16}/>
                    </label>
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
            <input
            onChange={(e) => setDescription(e.target.value)}
            className='p-[50px] text-[64px] border-none outline-none text-softTextColor  placeholder:text-[#b3b3b1] focus:border-none focus:outline-none appearance-none bg-transparent'
            placeholder='Tell your story...'
            />
        </div>
        <button
        onClick={handleSubmit}
        className='absolute top-[30px] right-[30px] py-[10px] px-[20px] border-none bg-[#1a8917] text-white cursor-pointer rounded-3xl'
        >
            Publish
        </button>
    </div>
  )
}

export default WritePage;