import React, { useEffect } from 'react'
import video from './assets/videobg.mp4'
import Aos from "aos"
import "aos/dist/aos.css"

import { Link } from 'react-router-dom'
const Hero = () => {
      useEffect(()=>{
            Aos.init()
      },[])
  return (
      <>
            <div className='w-full h-[100vh]'>
                  <div className='w-full h-full absolute top-0 left-0 bg-black opacity-[0.2]'></div>
                  <video className='object-cover w-full h-full' src={video} loop autoPlay muted/>
                  <div className='text-3xl sm:text-3xl w-full h-full absolute top-0 left-0 flex flex-col gap-10 items-center justify-center text-white md:text-7xl font-bold'>
                        <h1 className='text-4xl md:text-8xl tracking-widefont-extrabold' data-aos="fade-right">TourInn</h1>
                        <p data-aos="fade-right">Where Every Stay is Special</p>
                        <button data-aos="fade-up" className='border-[2px] text-3xl border-white p-3 px-5 rounded-lg hover:bg-blue-400 transition-all duration-150'><Link to="/home">Book Now</Link></button>
                  </div>
            </div>
      </>
  )
}

export default Hero