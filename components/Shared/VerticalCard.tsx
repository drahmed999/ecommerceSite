import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'


interface vCard{
imgItem:StaticImageData,
name:string,
cutPrice:string,
newPrice:string,

}

const VerticalCard:FC<vCard>=({imgItem,name,cutPrice,newPrice})=> {
  return (
    <div className='flex-row font-serif  mt-6 relative -z-10 bg-slate-400 w-72 h-[470px] border-2 border-black sm:border-0 mx-auto  '>

<div className='p-6'>

<div className='text-left text-2xl font-extralight hover:underline hover:scale-110  duration-500'><h3> {name}</h3></div>
<div className='flex flex-row text-xl text-left pl-3 space-x-2'>

<div><s>{cutPrice}</s></div>
<div>{newPrice}</div>
</div>
</div>

<div className='bottom-0 absolute'>
    <Image src={imgItem} alt='' width={350} height={500} className='h-[350px]'/>
</div>

    </div>
  )
}

export default VerticalCard