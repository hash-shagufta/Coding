import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { heroimage } from "@/app/components/assests"
import Image from "next/image"

function Hero() {
  return (
    
<section className='flex  flex-col  lg:flex-row gap-y-10 px-1 py-6'>
{/* right*/}
<div className='flex-1'>

<button type="button" className="inline-flex items-center px-5 py-2.5 text-sm text-center text-blue-700 font-bold bg-blue-200 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800">
 Sales 70% off
  
</button>

<h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-7xl mt-6  tracking-4 py-5">
An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 pb-5">
      Anyone can beat you but no one can beat your outfit as long as you <br></br>wear Dine outfits.
      </p>
      <button className= "flex gap-1 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-1xl">
      <ShoppingCart className="mr-2 h-7 w-7 "  /> Start Shopping
</button>
    <div className='flex gap-x-24 py-10 '>
    <Image width={80} height={80}  src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt='image' className='py-4'/>
    
    <Image width={80} height={80} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt='image' className='py-4'/>

    <Image width={80} height={80} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"} alt='image' className='py-4'/>

    <Image width={80} height={80} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt='image' className='py-4'/>
    </div>
</div>


{/* left*/}

<div>
<Image src={heroimage} alt='image' className=' bg-red-100 rounded-full'/>

</div>

    
</section>






  )
}

export default Hero