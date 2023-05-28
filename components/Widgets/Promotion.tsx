import React from 'react'
import HorizontalCard from '../Shared/HorizontalCard'
import event1 from "../../public/event1.webp"
import VerticalCard from '../Shared/VerticalCard'
import  event2 from  "../../public/event2.webp"
import  event3 from  "../../public/event3.webp"
import SectionHeading from '../Shared/SectionHeading'



function Promotion() {
  return (
    <section><div className='mx-auto mt-24 space-y-10 '>
        <SectionHeading headOne='Promotions' headTwo='Our Promotions Events'/>
        
        {/* Promotion Cards */}
<div className='flex-col justify-center items-center sm:flex-none'>
<div className='flex-col sm:flex sm:flex-row  justify-center'>
{/* left side */}
<div className='basis-3/6 flex-col'>
<div><HorizontalCard imgSrc={event1} firstLine='GET UP TO 60%' secondLine='For the summer season'/>
</div>

<div className='bg-emerald-950 text-center text-white p-5 m-8 h-52 flex-col items-center justify-center '>


<h1 className='text-4xl font-bold font-serif'>GET 30% OFF</h1>
<div className='sm:mt-10 mt-1 '><h4>USE PROMO CODE</h4></div>
<div className=' p-1  sm:p-2 border-2 text-lg sm:text-2xl mt-2 font-bold font-sans rounded-3xl hover:bg-red-400 duration-700  inline-flex sm:px-5  border-white'><h3> DINE WEEKEND SALES</h3></div>
</div>
</div>
{/* right side */}
        <div className='basis-3/6 flex-col sm:flex sm:flex-row gap-y-2 gap-x-5  p-2'>
<div>
        <VerticalCard imgItem={event2} name='Flex Sweatshirt' cutPrice='100$' newPrice='75$'/>
</div>
<div>
        <VerticalCard imgItem={event3} name='Flex Push Button Bomber' cutPrice='200$' newPrice='165$'/>

</div>
        </div>
        
</div>
</div>   
        
        </div>
        </section>)
}

export default Promotion