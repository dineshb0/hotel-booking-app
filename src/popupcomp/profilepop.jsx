import React from 'react'
import user from '../assets/usernav.png'
import back from '../assets/back.png'
import { Link, useNavigate } from 'react-router-dom'
const profilepop = ({handleprofilepop,userid}) => {
      const navigate=useNavigate();
    const handlelogout=()=>{
            sessionStorage.removeItem("userid")
            navigate("/")
    }  
  return (
            <div data-aos="fade-left" className='border-[1px] border-slate-300 fixed top-0 right-0 w-[30%] h-[42vh] bg-white items-center transition rounded-l-2xl'> 
                        <div className='flex justify-start w-full'>
                              <img onClick={handleprofilepop} src={back} alt="back"  className='w-[30px] h-[30px] m-[20px] hover:cursor-pointer'/>
                        </div>

                        <div className='flex flex-col items-center'>
                              <img src={user} alt="pp"  className='w-[60px] h-[60px]'/>
                              <h1 className='m-[10px] text-4xl'>{userid}</h1>
                        </div>
                        <div className='flex flex-col items-start justify-around h-[20vh]'>
                              <h1 className='border-b-[1px] border-b-slate-300 p-2 text-xl w-full hover:cursor-pointer'><Link to={"/booking"}>Book now</Link></h1>
                              <h1 className='border-b-[1px] border-b-slate-300 p-2 text-xl w-full hover:cursor-pointer'>My Bookings</h1>
                              <h1 onClick={handlelogout} className='border-b-[1px] border-b-slate-300 p-2 text-xl w-full text-red-600 hover:cursor-pointer'>Logout</h1>
                        </div>
            
            </div>
  )
}

export default profilepop