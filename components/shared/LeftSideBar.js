"use client";
import { sidebarLinks } from "@/constants";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedOut, useAuth } from "@clerk/nextjs";

const LeftSideBar = () => {
  const { userId } = useAuth();
  const pathname = usePathname();
  return (
    <section className="bg-white sticky light-border left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 gap-6 flex-col">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
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
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium bg-accents hover:bg-accents/70 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              Sign In
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="light-border-2 small-medium bg-transparent text-accents/70 outline outline-2 hover:outline-0 hover:bg-accents hover:text-white min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
