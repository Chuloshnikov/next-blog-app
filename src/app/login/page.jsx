"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {

    const {data, status} = useSession();

    const router = useRouter();

    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "authenticated") {
        router.push("/");
    }
  return (
    <div
    className='flex items-center justify-center mt-[60px]'
    >
        <div
        className='bg-softTextColor xs:py-[30px] xs:px-[30px] sml:py-[50px] sml:px-[100px]  mdl:py-[100px] mdl:px-[150px] 
        flex flex-col gap-[50px] rounded-[10px] xs:text-md sml:text-lg'
        >
            <div 
            onClick={() => signIn("google")}
            className='p-5 flex justify-center items-center rounded-[5px] border-none text-white font-bold cursor-pointer bg-orange-500'
            >
                Sign in with Google
            </div>
            <div 
            className='p-5 flex justify-center items-center rounded-[5px] border-none text-white font-bold cursor-pointer bg-black'
            >
                Sign in with Github
            </div>
            <div 
            className='p-5 flex justify-center items-center rounded-[5px] border-none text-white font-bold cursor-pointer bg-blue-500'
            >
                Sign in with Facebook
            </div>
        </div>
    </div>
  )
}

export default LoginPage;