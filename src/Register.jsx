import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import regill from './assets/reg_ill.png'
import axios from 'axios'
import Aos from "aos"
import "aos/dist/aos.css"

const Register = () => {
  useEffect(()=>{
    Aos.init()
  },[])

 let navigate=useNavigate()
 const [user,setuser]=useState({
  user_id:"",
  user_password:""
 })
 const handleChange=(e)=>{
  setuser(prev=>({
      ...prev,[e.target.name]:e.target.value
  }))
 }
 const handleClick=async (e)=>{
  if(!user.user_id || !user.user_password)
  {
    alert("cannot be empty")
    return
  }
  try{
    const response=await axios.post("http://localhost:8800/registeruser",user)
    if(response.status===200)
    {
      navigate("/login",)
      alert("registered successfully")
    }
  }
  catch(err)
  {
    if(err.response.status===500)
      alert("server error")
    if(err.response.status===401)
      alert("failed to register")
  }
 }
 console.log(user)
  return (
    <>
       <div className='w-full h-screen flex items-center justify-center'>
        <div className='border-[2px] border-gray-300 shadow-md rounded-xl w-[60%] h-[70%] flex'>
          <div data-aos="zoom-in-up" className='w-[50%] h-full bg-white border-r-2'>
            <img src={regill} alt="" />
          </div>
          <div data-aos="fade-right" className='w-[50%] h-full bg-white flex flex-col gap-[20px] items-center justify-center'>
            <h1 className='text-4xl font-bold text-center m-[10px]'>Register</h1>
            <input
              data-aos="zoom-in"
              onChange={handleChange}
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px] focus-within:"
              type="text"
              placeholder='user id'
              name='user_id'
              required
            />
            <input
              data-aos="zoom-in"
              onChange={handleChange}
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px]"
              type="password"
              name="user_password"
              placeholder='enter password'
            />
            <input
            data-aos="zoom-in"
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px] focus-within:"
              type="email"
              name='email'
              placeholder='email'
            />
            <button
              data-aos="fade-down"
               onClick={handleClick}
              className='bg-transparent text-xl border-[1px] rounded-lg p-[5px] px-[10px] border-black hover:bg-blue-400 hover:border-white hover:text-white transition-all duration-150'>
              register
            </button>
            <a data-aos="fade-down" href="#" className="no-underline text-xl hover:text-blue-500">
              <Link to={'/login'}>back</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register