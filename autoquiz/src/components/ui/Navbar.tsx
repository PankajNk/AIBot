import { getAuthSession } from '@/lib/nextauth'
import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';
import { ThemeToggle } from './ThemeToggle';



type Props = {}

const Navbar = async(props: Props) => {
    // const session = await getAuthSession()
  
    // if(session?.user){
    //     return <pre>{JSON.stringify(session.user,null,2)}</pre>
    // }else{
    //     return <div>Not signed in</div>
    // }
    return(
        <div className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 '>
            <div className='flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl '>
                {/* Logo */}
                <Link href='/' className='flex item-center gap-2 '>
                <p className='rounded-lg border-2 border-b-4 border-r-4 text-s font-bold transition-all transition duration-150 ease-out hover:ease-in'>
                    Auto Quiz
                </p>
                </Link>
                <div className="flex items center mr-3">
                    <ThemeToggle className='mr-4'/>
                    <div className='flex items-center'>
                        <SignInButton text="Sign In" />
                    </div>
                </div>
                
            </div>
        </div>
    )
  
};

export default Navbar