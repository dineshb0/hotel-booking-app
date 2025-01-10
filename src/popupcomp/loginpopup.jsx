import React from 'react'
import { Link} from 'react-router-dom';
const loginpopup = () => {
  return (
    <div className='fixed inset-0 overflow-hidden z-50 bg-black bg-opacity-30 backdrop-blur-md h-[100vh] flex items-center justify-center'>
      <div className=' bg-white flex flex-col p-5 rounded-xl gap-4'>
      <h1 className='text-[30px]'>you need to login first..</h1>
      <div className='flex justify-center'>
            <button className='text-center px-[10px] py-[5px] border-2 rounded-xl bg-transparent w-[150px] h-[50px] text-2xl hover:bg-blue-300 hover:text-white hover:border-white duration-300'><Link to="/login">Login</Link></button>
      </div>
      <h1 className='text-[30px]'>is it your first time..?</h1>
      <div className='flex justify-center'>
            <button className='text-center px-[10px] py-[5px] border-2 rounded-xl bg-transparent w-[150px] h-[50px] text-2xl hover:bg-yellow-200 hover:border-white duration-300'><Link to="/register">Register</Link></button>
      </div>
      </div>
    </div>
  )
}

export default loginpopup