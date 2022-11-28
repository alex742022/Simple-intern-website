import React from 'react'
export default function Home() {

  return (

    <section id='home' className='h-[700px] bg-cover bg-center bg-truck2 bg-fixed
                        md:bg-truck'> 
      <div className='relative w-full h-full'>
        <div className='text-white w-full px-5 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
          <h1 className='text-6xl text-center sm:text-7xl font-[500] md:text-8xl '>Welcome</h1>
          <p className='p-3 text-center sm:text-xl'>Don't get stuck with rest. Truck with the best</p>
        </div>
      </div>
    </section>
  )
}
