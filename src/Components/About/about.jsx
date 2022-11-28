import React from 'react'
import AboutTruck from '../Assets/about-truck.jpg'
export default function About(){
  return (
    <section id='about' className='px-[18px] pt-[25px] pb-[100px] max-w-screen-xl mx-auto
                        sm:px-[28px]'>
        <div className='flex flex-col-reverse
                        lg:flex-row lg:items-center lg:gap-10 lg:pt-[40px]
                        '>
            <img src={AboutTruck} alt='about truck' 
                 className='w-[400px] rounded-tl-[100px] mx-auto'
                 />
            <div>
                <h1 className='text-4xl pb-[15px]
                                sm:text-center sm:text-5xl
                                lg:text-6xl lg:pb-[20px] lg:text-left'>
                    About
                </h1>
                <p className='pb-[25px]'>
                    Experienced road transport operator especially those that delivers quality, skilled niche serviceis frequently
                    encountered. One such company is Novel Trading which has almost two decades experience in tansporting a variety
                    of goods between Luzon and other provinces in Visayas and Mindanao. It is a direct service provider which aims
                    to render services to its client with a reputation of quality. 
                </p>
            </div>
        </div>
    </section>
  )
}
