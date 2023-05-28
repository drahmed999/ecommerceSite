import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import ProductCard from '../Shared/ProductCard'
import girlOne from "../../public/girlOne.png"
import girlThree from "../../public/girlThree.png"
import girlTwo from "../../public/girlTwo.png"

function Products() {
  return (
    <section className='mt-20'>
    <SectionHeading headOne='Products' headTwo='Check What We Have'/>

      
      <div className=' flex-col mx-auto px-4 justify-center items-center sm:flex-none '>

    <div className='flex-col sm:flex sm:flex-row space-x-1 mx-auto  justify-center items-center mt-10'>

    <div><ProductCard bgColor='' name='Brushed Raglen Sweatshiet'  price='250$'  img={girlOne}/></div>
    <div><ProductCard  bgColor='bg-indigo-400' name='Cameryn Slash Tie Dress'  price='220$'  img={girlTwo}/></div>
    <div><ProductCard bgColor='' name='Flex Sweatshiet'  price='150$'  img={girlThree}/></div>
    </div>

    


</div>
  </section>
  )
}

export default Products
