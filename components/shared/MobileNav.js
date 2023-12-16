"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetClose,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { sidebarLinks } from '@/constants'
import { SignedOut } from '@clerk/nextjs'
import {usePathname} from 'next/navigation'
  

const NavContent = () => {
    const pathname = usePathname();
    return (
        <section className="flex h-full flex-col gap-6 pt-16">
            {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) &&
                item.route.length > 1) || pathname === item.route;
                return(
                    <SheetClose asChild key={item.route}>
                        <Link
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
                    </SheetClose>
                )
            })}
        </section>
    )
}

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger aasChild>
            <Image 
                src= "/assets/icons/hamburger-menu2.png"
                width ={36}
                height={36}
                alt="Menu"
                className = "invert-colors sm:hidden"
            />
        </SheetTrigger>
        <SheetContent side="left"
        className = "bg-orange-100 border-none" >
        <Link href = "/"  className = "flex items-center gap-1">
            <Image 
                src="/assets/images/get-fit-logo.png"
                width={23}
                height={23}
                alt="GetFitness"
            />
            <p className="h2-bold text-dark-100 font">Get <span className="text-orange-500">Fitness</span></p>
        </Link>
        <div>
            <SheetClose asChild>
                <NavContent />
            </SheetClose>
            <SignedOut>
                <div className="flex flex-col gap-3">
                    <SheetClose asChild>
                        <Link href="/sign-in">
                            <Button className = "small-medium bg-orange-500 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                <span className="bg-orange-500">
                                    Sign In
                                </span>
                            </Button>
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href="/sign-up">
                            <Button className = "light-border-2 small-medium bg-orange-500 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light">
                                Sign Up
                            </Button>
                        </Link>
                    </SheetClose>
                </div>
            </SignedOut>
        </div>
        </SheetContent>
    </Sheet>

  )
}

export default MobileNav