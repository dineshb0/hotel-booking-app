import React, { useEffect } from 'react';
import loginill from './assets/login_ill.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Aos from "aos"
import "aos/dist/aos.css"

const Login = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user_id: "",
    user_password: ""
  });

  const handleChange = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/loginauth', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        sessionStorage.setItem("userid", user.user_id);
        navigate("/home");
      } else if (response.status === 401) {
        alert("Invalid username or password");
      }
    } catch (err) {
      if(err.response.status==500)
      {
        navigate('/somethingwrong')
      }
      if (err.response && err.response.status === 401) {
        alert("Invalid username or password");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  console.log(user);

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='border-[2px] border-gray-300 shadow-md rounded-xl w-[60%] h-[70%] flex'>
          <div data-aos="zoom-in-up" className='w-[50%] h-full bg-white border-r-2'>
            <img src={loginill} alt="" />
          </div>
          <div className='w-[50%] h-full bg-white flex flex-col gap-[20px] items-center justify-center'>
            <h1 data-aos="fade-right" className='text-4xl font-bold text-center m-[10px]'>Login</h1>
            <input
              data-aos="zoom-in"
              onChange={handleChange}
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px] focus-within:"
              type="text"
              placeholder='user id'
              name='user_id'
            />
            <input
              data-aos="zoom-in"
              onChange={handleChange}
              className="bg-transparent border-[2px] w-[400px] h-[40px] rounded-xl p-[10px]"
              type="password"
              placeholder='password'
              name="user_password"
            />
            <button
              data-aos="fade-down"
              onClick={handleClick}
              className='bg-transparent text-xl border-[1px] rounded-lg p-[5px] px-[10px] border-black hover:bg-blue-400 hover:border-white hover:text-white transition-all duration-150'>
              Login
            </button>
            <a data-aos="fade-down" href="#" className="no-underline text-xl hover:text-blue-500">
              <Link to={'/register'}>Register</Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
