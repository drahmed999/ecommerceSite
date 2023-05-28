import React, { FC } from 'react'

interface QualityText{
    head:string,
    desc:string
};

const QualityText:FC<QualityText>=({head,desc})=> {
  return (
    <div>
         <div className='w-52 '>

<div className='font-extrabold text-teal-900 font-serif text-xl'>
{head}
</div>
<div className='mt-2  leading-relaxed'>
{desc}</div>
        </div>
    </div>
  )
}

export default QualityText