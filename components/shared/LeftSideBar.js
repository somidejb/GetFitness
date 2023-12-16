'use client'
import { sidebarLinks } from '@/constants';
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { SignedOut, useAuth } from '@clerk/nextjs';

const LeftSideBar = () => {
    const {userId} = useAuth();
    const pathname = usePathname();
  return (
    <section className="bg-yellow-900 sticky light-border left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-none max-sm:hidden lg:w-[266px]">
        <div className="flex flex-1 gap-6 flex-col">
            {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) &&
                item.route.length > 1) || pathname === item.route;
                return(                    
                    <Link
                    key={item.route}
                        href={item.route}
                        className= {`${isActive ? "bg-orange-300 rounded-lg text-white" : "text-dark-500"} flex items-center justify-start gap-4 p-4 bg-transparent}`}
                    >
                        <Image 
                            src = {item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={`${isActive ? "" : "invert-colors"}`}
                        />
                        <p>{item.label}</p>
                    </Link>                    
                )
            })}
        </div>
        <SignedOut>
            <div className="flex flex-col gap-3">               
                <Link href="/sign-in">
                    <Button className = "small-medium bg-orange-500 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                        <span className="bg-orange-500">
                            Sign In
                        </span>
                    </Button>
                </Link>
            
                <Link href="/sign-up">
                    <Button className = "light-border-2 small-medium bg-orange-500 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light">
                        Sign Up
                    </Button>
                </Link>
            </div>
        </SignedOut>
    </section>
  )
}

export default LeftSideBar