"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'

const LocalSearchBar = ({route, iconPosition, imgSrc, placeholder, otherClasses}) => {
  return (
    <div className={`bg-[#F4EBEB] flex grow items-center min-h-[56px] gap-4 rounded-[10px] px-4 
            ${otherClasses}`}>
      {iconPosition === 'left' && (
        <Image 
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input 
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />

    </div>
  )
}

export default LocalSearchBar