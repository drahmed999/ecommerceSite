import React from 'react'
import { MyInputWithButton } from '../Shared/MyInputWithButton'

function NewsLetter() {
  return (<section className='flex justify-around'>

    <div className='flex-col text-center my-32 sm:my-56 space-y-7'>
<div className='text-4xl font-bold font-sans'><h2>Subscribe Our Newsletter</h2></div>
<div className='text-xl leading-snug font-mono'><h3>Get the latest information and promo offers directly</h3></div>
<div className='flex justify-center'><MyInputWithButton/></div>



    </div>
  </section>
  )
}

export default NewsLetter