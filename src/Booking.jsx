import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import user from './assets/user.png'
import axios from 'axios'
import hotelbg from './assets/hotelbg.jpg'
const Booking = () => {
      const [selectedhotel,setselectedhotel] = useState("")
      const [hotels,sethotels] = useState([])
      const handleselectedhotel=(hotelname)=>{
            setselectedhotel(hotelname);
      }
      useEffect(()=>{
            const gethotels=async()=>{
                  try{
                  const res=await axios.get("http://localhost:8800/gethotels")
                  sethotels(res.data)
                  }
                  catch(e)
                  {
                        console.log(e)
                  }
            }
            gethotels()
      },[])
  return (
    <div className='w-full h-[100vh]'>
        <div className='flex justify-between w-full items-center'>
        <h1 className='m-[10px] text-black font-bold text-[50px]'><Link to="/home">TourInn</Link></h1>
       
      </div>
      <div>
            <h1 className='text-[50px] text-center'>Our Hotels</h1>
      </div>
      <div className='h-[80px]'>
      </div>
      <div className='flex justify-evenly w-full text-center'>
            {hotels.map(hotel=>(
                  <div onClick={()=>handleselectedhotel(hotel.hotel_name)} className='w-[300px] h-[390px] #dddddd text-center flex flex-col justify-between rounded-xl border-[1px] shadow-md'>
                        <img src={hotelbg} alt="bg" className='w-[100%] h-[80%] object-cover ' />
                        <h1 className='text-xl'>{hotel.hotel_name}</h1>
                        <p className='text-xl'>{hotel.hotel_loc}</p>
                        <div className='flex m-[10px] justify-center items-center'>
                        <p>5.0</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        </div>
                  </div>
            ))}
      </div>
    </div>
  )
}

export default Booking