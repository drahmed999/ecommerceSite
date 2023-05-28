import React from 'react'
import QualityText from '../Shared/QualityText'
import  QualityImg from "../../public//QualityImg.webp"
import Image from 'next/image'

function Quality() {
  return (
      <section className='mt-15 sm:px-6'>
  <div className='flex-col'>
{/* Top Heading */}
<div className='bg-rose-100 via-slate-400 to-blue-200 transition-colors rounded-l-full rounded-tr-full hover:bg-stone-50 p-2 sm:p-0 m-2 sm:m-0 text-2xl md:text-5xl'>
<div className='flex p-3 mx-auto justify-end hover:shadow-xl underline hover:scale-105 hover:text-rose-800 leading-relaxed font-serif duration-700 font-extrabold hover:underline-offset-8'>
<h1>Unique and 
    <br />
    Authentic Vintage 
    <br />
    Designer Jewellery</h1>

</div>
</div>
<div className='flex-col sm:flex sm:flex-row flex-grow items-center justify-around mt-20 shadow-lg '>
    {/* left Side */}
      <div className='sm:basis-6/12 relative -z-10 flex justify-around '>
    <div className='grid sm:grid-cols-2 gap-10 sm:gap-20 '>

    {/* col-1 */}
        <div className=' space-y-5 sm:space-y-16'>

        
        <QualityText head='Using Good Quality Materials' desc='Lorem ipsum dolor sit amt, consectetur adipiscing elit,dolor sit amt.'/>
        <QualityText head='100% Handmade Products' desc='Lorem ipsum dolor sit amt, consectetur adipiscing elit,dolor sit amt.'/>
        
        </div>
{/* col-2 */}
        <div className='space-y-5 sm:space-y-16'>
        <QualityText head='Modern Fashion Design' desc='Lorem ipsum dolor sit amt, consectetur adipiscing elit dolor sit amt.'/>
        <QualityText head='Discount for Bulk Orders' desc='Lorem ipsum dolor sit amt, consectetur adipiscing elit,dolor sit amt.'/>

        </div>

<div className='absolute -z-20 text-4xl mt-15 sm:mt-0 sm:text-7xl md:text-8xl text-emerald-100 flex items-center p-4 font-bold'> Different From OTHERS</div>


    </div>

      </div>
      {/*right Side  */}
<div className='sm:basis-6/12'>
<div className='grid sm:grid-cols-2 gap-2'>

    <div>
<Image src={QualityImg} alt='' width={880} height={800}/>
    </div>
<div>

    <div className='w-44  ml-3 text-teal-600 hidden md:block'>
        <h4>
        This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
        </h4>
    </div>
<div>
    <button className='bg-emerald-300 border-2 border-black rounded-lg duration-500 hover:bg-red-800 font-bold ml-5 mt-2 px-8 py-2'>
        See All 
        <br/>Products
    </button>
</div>

</div>
</div>



</div>
</div>

  </div>
      </section>
  )
}

export default Quality