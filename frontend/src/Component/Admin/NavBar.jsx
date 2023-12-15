import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate();
  const handleClick =async()=>{
    try {
    const response= await axios.get('http://localhost:8001/app/auth/logout',{
      withCredentials: true,
    });
    navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-white shadow-md sticky top-0 z-0 text-black flex justify-between items-center h-14 px-5'>
      <div>Home</div>
      <button className='  w-24 hover:cursor-pointer  hover:bg-cyan-400  font-bold h-12 p-1  rounded-md bg-[#238DE1] text-amber-50 shadow-2xl' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default NavBar
