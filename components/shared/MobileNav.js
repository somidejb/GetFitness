"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? "bg-accents  text-black font-semibold" : "text-black"
              } flex items-center hover:bg-accents/80 rounded-lg justify-start gap-4 p-4 bg-transparent}`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger aasChild>
        <Image
          src="/assets/icons/hamburger-menu2.png"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/get-fit-logo.png"
            width={23}
            height={23}
            alt="GetFitness"
          />
          <p className="h2-bold text-black font-semibold ml-2">
            Get <span className="text-accents">Fitness</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3 mt-6">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium bg-accents hover:bg-accents/70 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign In
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="light-border-2 small-medium bg-transparent text-accents/70 outline outline-2 hover:outline-0 hover:bg-accents hover:text-white min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
