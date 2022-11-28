import React from 'react'
import truckOne from '../Assets/Screenshot_1.png'
import truckTwo from '../Assets/Screenshot_2.png'
import truckThree from '../Assets/Screenshot_3.png'
import truckFour from '../Assets/Screenshot_4.png'
import truckFive from '../Assets/Screenshot_5.png'
import truckSix from '../Assets/Screenshot_6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

//React Slick Carousel
import 'slick-carousel/slick/slick.css' 
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

export default function Gallery() {

    const allTruckShot = 
            [
                {   
                    id : 1,
                    truckShot : truckOne,
                    alt: 'truck One'
                },
                {   
                    id : 2,
                    truckShot : truckTwo,
                    alt: 'truck Two'
                },
                {   
                    id : 3,
                    truckShot : truckThree,
                    alt: 'truck Three'
                },
                {   
                    id : 4,
                    truckShot : truckFour,
                    alt: 'truck Four'
                },
                {   
                    id : 5,
                    truckShot : truckFive,
                    alt: 'truck Five'
                },
                {   
                    id : 6,
                    truckShot : truckSix,
                    alt: 'truck Six'
                }
            ]
    
    //React Slick Carousel

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

      // Carousel Arrow Function
      function NextArrow(props) {
        const { onClick } = props;
        return (
            <span className='bg-slate-300 w-5 h-5 p-5 rounded-full
                             flex justify-center items-center
                             absolute right-[4%] top-[-70px] z-10
                             cursor-pointer'
                  onClick={onClick}>

                <FontAwesomeIcon icon={faChevronRight}/>
            </span>
        );
      }

      //Carousel Arrrow Function
      function PrevArrow(props) {
        const { onClick } = props;
        return (
            <span className='bg-slate-300 w-5 h-5 p-5 rounded-full
                             flex justify-center items-center 
                             absolute right-[70px] top-[-70px] z-10
                             sm:right-[100px]
                             cursor-pointer' 
                  onClick={onClick}>

                <FontAwesomeIcon className='text-[20px]' icon={faChevronLeft}/>
            </span>
        );
      }
  return (
    <section id='gallery' className='pt-[25px] pb-[100px]
                        lg:pt-[100px]'>
        <div className='max-w-screen-xl mx-auto
                        '>
            <h1 className='text-4xl pb-[15px] px-[18px]
                           sm:text-center sm:text-5xl
                           lg:text-6xl lg:pb-[20px]'>Gallery</h1>
      
            <div id='truckItems' 
                className='pb-[25px] pt-[100px] relative
                           sm:px-[18px]'>

                {/* React Slick Carousel  */}
                <Slider {...settings}>
                {allTruckShot.map(allTruck => {
                    return(
                        <div key={allTruck.id}
                            className='truck-items relative
                                      outline-none cursor-pointer'>
                            <img src={allTruck.truckShot} 
                                 alt={allTruck.alt}
                                 className='w-[100%] rounded-xl object-cover border'/>
                        </div>
                    )
                })}
                </Slider>             
            </div>
        </div>
    </section>
  )
}
