import React, { useEffect, useState } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import axios from 'axios';
import home from './assets/home.jpg'
import about from './assets/about.png'
import user from './assets/user.png'
import success from './assets/sucess.gif'
import { Link } from 'react-router-dom';
import Loginpopup from './popupcomp/loginpopup';
import Profilepop from './popupcomp/profilepop';

const Home = () => {
  const [profilepop, setprofilepop]=useState(false);
  const userid = sessionStorage.getItem("userid");
  const [complaint,setComplaint]=useState({
    user_email:"",
    complaint:""
  });
  const [showSuccesPop, setshowSuccessPop] = useState(false);
  console.log("user",userid)
  const [hotels,sethotels]=useState([]);
  useEffect(()=>{
    Aos.init()
  },[])
  useEffect(()=>{
    const getHotels = async()=>{
      try{
        const res = await axios.get("http://localhost:8800/gethotels")
        sethotels(res.data)
        console.log(hotels)
      }
      catch(e)
      {
        console.log(e);
      }
    }
    getHotels()
  },[])
  const handleChange=(e)=>{
    setComplaint((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }));
    
  }
  const handleContactButton=()=>{
    console.log(complaint)
    console.log(userid)
    setshowSuccessPop(true)
  }
  const closepopup=()=>{
    setshowSuccessPop(false)
  }
  const handleprofilepop=()=>{
    setprofilepop(!profilepop)
    console.log(profilepop)
  }
  console.log(complaint)
  return (
    <div className='font-sans overflow-hidden'>
      {userid===null && <Loginpopup/>}
      {profilepop==true && <Profilepop handleprofilepop={handleprofilepop} userid={userid}/>}
      <div className='flex justify-between w-full items-center'>
        <h1 className='m-[10px] text-black font-bold text-[50px]'>TourInn</h1>
        <ul className=' m-[10px] decoration-none no-underline flex gap-[30px] text-2xl'>
        <img onClick={handleprofilepop} src={user} alt="profile" className='w-[50px] h-[50px] hover:cursor-pointer' />
       </ul>
      </div>
      <div  className='bg-blue-200 w-full h-[80vh] rounded-b-[15%]'>
          <img src={home} alt="cover" className='object-cover w-full h-[100%] rounded-b-[10%]' />
      </div>
      <div className='w-full h-[80px]'></div>
      <div className='w-full mt-[50px] mb-[50px]'>
      <h1  data-aos="fade-left" data-aos-duration="1000" className='text-[40px] font-bold text-center p-4'>Our Branches</h1>
       <div  className=' flex justify-evenly items-center'>
        {hotels.map(hotel=>(
          <div data-aos="fade-down" data-aos-duration="1000" className=' p-[10px] px-[20px]  text-center text-[50px] font-bold'>
            <h1 className='border-b-[2px] border-black'>{hotel.hotel_loc}</h1>
          </div>
        ))}
       </div>
      </div>
      <div className='w-full h-[100px]'></div>
      <div>
      <h1  data-aos="fade-left" data-aos-duration="1000" className='text-[40px] font-bold text-center p-4 m-[20px]'>Reviews</h1>
        <div className='w-full flex justify-evenly'>
        <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col w-[300px] items-center justify-center gap-[10px] p-[10px] border-b-slate-300 rounded-2xl shadow-lg'>
        <img src={user}alt="profile" className='w-[80px] h-[80px]' />
        <h1>user1</h1>
        <p>"TourInn made my vacation planning so easy! I found a beautiful hotel right on the beach at an unbeatable price."</p>
        <div className='flex m-[10px]'>
        <p>5.0</p>
        <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col w-[300px] items-center justify-center gap-[10px] p-[10px] border-b-slate-300 rounded-2xl shadow-lg'>
        <img src={user}alt="profile" className='w-[80px] h-[80px]' />
        <h1>user1</h1>
        <p>"TourInn made my vacation planning so easy! I found a beautiful hotel right on the beach at an unbeatable price."</p>
        <div className='flex m-[10px]'>
        <p>5.0</p>
        <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col w-[300px] items-center justify-center gap-[10px] p-[10px] border-b-slate-300 rounded-2xl shadow-lg'>
        <img src={user}alt="profile" className='w-[80px] h-[80px]' />
        <h1>user1</h1>
        <p>"TourInn made my vacation planning so easy! I found a beautiful hotel right on the beach at an unbeatable price."</p>
        <div className='flex m-[10px]'>
        <p>5.0</p>
        <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col w-[300px] items-center justify-center gap-[10px] p-[10px] border-b-slate-300 rounded-2xl shadow-lg'>
        <img src={user}alt="profile" className='w-[80px] h-[80px]' />
        <h1>user1</h1>
        <p>"TourInn made my vacation planning so easy! I found a beautiful hotel right on the beach at an unbeatable price."</p>
        <div className='flex m-[10px]'>
        <p>5.0</p>
        <p>⭐⭐⭐⭐⭐</p>
        </div>
        </div>
        </div>
      </div>
      <div>
      <div className=' w-full h-screen flex items-center justify-center'>
        <div className='border-[2px] border-gray-300 shadow-md rounded-xl w-[60%] h-[70%] flex'>
          <div data-aos="zoom-in" data-aos-duration="1000" className='w-[50%] h-full bg-white border-r-2'>
            <img src={about} alt="" />
          </div>
          <div data-aos="fade-down" className='w-[50%] h-full bg-white flex flex-col gap-[20px] items-center justify-center'>
           <h1 data-aos="fade-down" data-aos-duration="1000" className='text-center text-[50px]'>Ready to GO?</h1>
           <p data-aos="fade-down" data-aos-duration="1000" className='text-xl'>Your Perfect Stay, Just a Click Away!</p>
           <button data-aos="zoom-in" data-aos-duration="1000" className='px-[10px] py-[5px] border-2 rounded-xl bg-transparent w-[150px] h-[50px] text-2xl hover:bg-blue-300 hover:text-white hover:border-white duration-300'><Link to="/booking">Book Now</Link></button>
          </div>
        </div>
      </div>
      </div>
      <div className='w-full h-[80vh] flex bg-slate-100 rounded-t-[10%] justify-evenly items-center'>
        <div className=''>
          <h1 className='text-[80px]'>Reach out</h1>
          <h1 className='text-[80px] text-center'>to us..</h1>
        </div>


        {showSuccesPop && <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
        <div className='bg-white p-5 rounded-lg shadow-lg w-[400px] flex flex-col gap-[20px] items-center justify-center '>
            <img src={success} alt="sucess" className='w-[100px] h-[100px]'/>
            <h1 className='text-[30px]'>submitted sucessfully</h1>
            <div className='flex justify-center'>
            <button  onClick={closepopup} className='text-center px-[10px] py-[5px] border-2 rounded-xl bg-transparent w-[150px] h-[50px] text-2xl hover:bg-blue-300 hover:text-white hover:border-white duration-300'>Done</button>
      </div>
      </div>
      </div>
}
       
        <div className='flex flex-col gap-[20px]'>
        <h1 className='text-[20px]'>user Id: {userid}</h1>
             <input
              data-aos="zoom-in"
              data-aos-duration="1000"
              onChange={handleChange}
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px] focus-within: border-black"
              type="text"
              placeholder='E-mail'
              name='user_email'
            />
            <textarea onChange={handleChange} data-aos="zoom-in" data-aos-duration="1000" name="complaint" id="texts" className=' border-black rounded-lg shadow-md p-5 h-[400px] w-[400px]' placeholder='enter your complaint'></textarea>
            <div className='flex justify-center'>
            <button onClick={handleContactButton} className='text-center px-[10px] py-[5px] border-2 rounded-xl bg-transparent w-[150px] h-[50px] text-2xl hover:bg-blue-300 hover:text-white hover:border-white duration-300'>Submit</button>
      </div>
      
        </div>
        
      </div>
      <div className='w-full bg-slate-100'>
        <h1 className='text-[20px] text-center'>made by dinesh</h1>
      </div>
      
    </div>
  );
};

export default Home;
