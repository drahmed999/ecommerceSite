// horizontal  card  with picture

import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import event1 from "../../public/event1.webp"

interface Hcard{
    imgSrc:StaticImageData,
    firstLine:string,
    secondLine:string,
}

const HorizontalCard:FC<Hcard>=({imgSrc,firstLine,secondLine})=>{
  return (
    <div className='flex-col sm:flex sm:flex-row bg-teal-500 flex-grow my-6 mx-8 items-center border-2 border-black sm:border-0'>
<div className=' flex-col sm:justify-end mx-auto p-4 justify-center items-center '>
    <h1 className='text-4xl font-serif font-bold'>{firstLine}</h1>
    <h3 className='text-xl font-sans font-semibold'>{secondLine}</h3>
</div>

{/* image right */}
<div className='flex justify-start items-start'>
    <Image src={imgSrc} width={350} height={200} alt=''/>
</div>


    </div>
  )
}

export default HorizontalCard