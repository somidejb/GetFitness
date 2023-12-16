import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className = "flex flex-wrap justify-between bg-orange-100 fixed z-50 w-full gap-5 p-6 shadow-none sm:px-12">
        <Link href = "/"  className = "flex items-center gap-1">
            <Image 
                src="/assets/images/get-fit-logo.png"
                width={23}
                height={23}
                alt="GetFitness"
            />
            <p className="h2-bold text-light-900 max-sm:hidden font">Get <span className="text-orange-500">Fitness</span></p>
        </Link>
        
        <div className="flex flex-between flex-row gap-5">
            <SignedIn>
                <UserButton 
                    afterSignOutUrl="/" 
                    appearance={{
                        elements: {
                            avatarBox: "h-10 w-10"
                        },
                        variables: {
                            colorPrimary: "#FF7F50"
                        }
                    }}
                />
            </SignedIn>

            <MobileNav />
        </div>

    </nav>
  )
}

export default Navbar