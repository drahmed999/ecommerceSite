import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import girl from "../../public/girlOne.png"


interface ProductCard{
    bgColor?: string;
    img:StaticImageData,
    name:string,
    price:string

}


const ProductCard:FC<ProductCard>=({bgColor="bg-teal-700",img,name,price})=> {
  return (<>

  <div className='hover:scale-110 hover:text-blue-800 -z-10  hover:-z-50 duration-700 h-[450px] w-[350px]'>

    <div className="`${bgColor}`"><Image src={img} alt='' width={500}  height={400}/></div>
    <div className='flex-col font-bold'>
        <div className=''><h3>{name}</h3></div>
        <div className='hover:text-red-500'><h4>{price}</h4></div>
    </div>
  </div>
  </>
  )
}

export default ProductCard