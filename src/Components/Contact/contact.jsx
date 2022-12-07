import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
    <section id='contact' className='bg-[rgba(0,0,0,.8)] pt-[25px] pb-[100px] text-white
                          lg:pt-[100px]'>
        <div className='max-w-screen-xl mx-auto px-[18px]
                        sm:px-[28px]'>
          <h1 className='text-4xl pb-[30px]
                         sm:text-center sm:text-5xl
                         lg:text-6xl lg:pb-[50px]'>Contact Us</h1>
          <div className='flex flex-col gap-10
                          lg:flex-row'>
            <div>
              <h2 className='text-[20px] font-bold'>Nuvel Global Ventures, Inc.</h2>
              <p className='pb-[15px]'>Corporate office</p>
              <div className='flex items-center gap-3 pb-[15px]'>
                <FontAwesomeIcon icon={faLocationDot}
                                className='text-[15px]'/>
                <p>San Migue Barangay Rd, Santo Tomas, Batangas</p>
              </div>
              <div className='flex gap-3'>
                <FontAwesomeIcon icon={faPhone}
                                className='text-[15px] pt-[5px]'/>
                <p>
                    0917-126-3313<br/>
                    0908-865-8917<br/>
                    0917-126-3313
                </p>
              </div>
            </div>
            <div className='w-[100%]'>
            {/* <iframe className='w-[100%]' title='Nuvel Global Ventures, INC' src='https://maps.google.com/maps?width=808&amp;height=643&amp;hl=en&amp;q=%20Nuvel%20Global%20Ventures,%20Inc.+(Nuvel%20Global%20Ventures,%20Inc.)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/> */}
              <iframe className='w-[100%] h-[500px] rounded-xl' title='Nuvel Global Ventures, INC' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6440079447334!2d121.16997579999997!3d14.09818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd658bd2a8e587%3A0x1984eecaf579795!2sNuvel%20Global%20Ventures%2C%20Inc.!5e0!3m2!1sen!2sph!4v1669620912643!5m2!1sen!2sph" loading="lazy"></iframe>
            </div>
          </div>
        </div>
    </section>
  )
}
