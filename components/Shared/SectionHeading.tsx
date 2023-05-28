import React, { FC } from 'react'


interface SectionHeading{
    headOne:string,
    headTwo:string,
}

const SectionHeading:FC<SectionHeading>=({headOne,headTwo})=> {
  return (
    <div>
         <div className='text-blue-800 text-xl  hover:underline hover:scale-150 duration-700 hover:text-red-950  flex justify-center '>

{headOne}
</div>
<div className=' text-4xl flex justify-center font-mono font-semibold mx-auto px-14'>
{headTwo} 
</div>
    </div>
  )
}

export default SectionHeading