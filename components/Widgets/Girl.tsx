import React, { Suspense } from "react";
import girl from "../../public/girl.webp";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import F1 from "../../public/F1.webp"
import F2 from "../../public/F2.webp"
import F3 from "../../public/F3.webp"
import F4 from "../../public/F4.webp"

function Girl() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row mt-16 ">
        {/* left */}
        <div className=" basis-6/12 p-12 space-y-8 ml-3 mt-4">

          <div className=" p-3 font-semibold rounded-md ">
            
            <button className="bg-red-400 p-3 rounded-md hover:bg-red-800">
            SHOP 50%

            </button>
          </div>
          <div className=" text-3xl sm:text-5xl font-sans font-bold shadow-inner">
            An Industrial Take on Streetwear
          </div>
          <div className="text-2xl text-teal-500 font-mono font-extralight">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </div>
<div>
  <button className="hover:bg-gray-500 bg-gray-900 flex px-10 py-2 sm:px-4 space-x-3 items-center border-2 rounded-md border-black">
    <ShoppingCartIcon color="white"/>
    <div className="font-bold font-serif text-white text-lg">Start <br /> Shopping</div>
  </button>
</div>


<div className="mx-auto pt-10">
<div className="flex-col sm:flex sm:flex-row justify-center space-y-2 gap-x-4 shadow-blue-200 hover:shadow-2xl">
  
    <Image src={F1} alt="" width={120} height={80}/>
  <Image src={F2} alt="" width={120} height={80}/>
  
  <Image src={F3} alt="" width={120} height={80}/>
  <Image src={F4} alt="" width={120} height={80}/>
  
  

</div>
</div>

        </div>
        {/* right */}
        <div className="basis-6/12 flex justify-center p-15 ">

          <Suspense fallback="Loading">
          <Image src={girl} alt="girl picture" width={700} height={800}  className=" bg-gray-300 p-3 rounded-[15000px]" />
          </Suspense>
          {/* <div className="rounded-full z-40 absolute"></div> */}
        </div>
      </div>
    </section>
  );
}

export default Girl;
