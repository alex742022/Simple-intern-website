import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFront} from '@fortawesome/free-solid-svg-icons'
import {faTruckPlane} from '@fortawesome/free-solid-svg-icons'
import {faTruckFast} from '@fortawesome/free-solid-svg-icons'
import {faTruckMonster} from '@fortawesome/free-solid-svg-icons'
export default function Services() {
  return (
    <section id='services' className='bg-gray-200 pt-[25px] pb-[100px]
                        lg:pt-[100px]'>
        <div className='px-[18px] max-w-screen-xl mx-auto
                        sm:px-[28px]'>
            <h1 className='text-4xl pb-15px
                           sm:text-center sm:text-5xl
                           lg:text-6xl lg:pb-[20px]'>
                Services
            </h1>

            <div className='flex justify-center py-[30px]'>
                <FontAwesomeIcon icon={faTruckFront}
                    className='text-[50px] text-slate-600'/>
            </div>

            <div className='flex flex-col gap-7
                            sm:flex-row
                            lg:pt-[50px]'>

                <div className='border border-slate-900 rounded-[10px] px-[10px] py-[20px]
                                sm:w-4/12'>
                    <div className='flex pb-[10px] 
                                    lg:justify-center'>
                        <FontAwesomeIcon icon={faTruckFast}
                        className='text-3xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-[600] pb-[10px] text-slate-500
                                   lg:text-center'>
                        Maintained
                    </h1>
                    <p>
                        Comprehensively equipped with a wide range of well maintained transportation equipment and vehicles.
                    </p>
                </div>

                <div className='border border-slate-900 rounded-[10px] px-[10px] py-[20px]
                                sm:w-4/12'>
                    <div className='flex pb-[10px]
                                    lg:justify-center'>
                        <FontAwesomeIcon icon={faTruckMonster}
                            className='text-3xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-[600] pb-[10px] text-slate-500
                                   lg:text-center'>
                        Constraction
                    </h1>
                    <p>
                        Offers land developing materials aggregares constraction services.
                    </p>
                </div>

                <div className='border border-slate-900 rounded-[10px] px-[10px] py-[20px]
                                sm:w-4/12'>
                    <div className='flex pb-[10px]
                                    lg:justify-center'>
                        <FontAwesomeIcon icon={faTruckPlane}
                            className='text-3xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-[600] pb-[10px] text-slate-500
                                   lg:text-center'>
                        Importation
                    </h1>
                    <p>
                        Importation and selling of surplus Japan trucks  and heavy equipments for constaction and others uses.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
