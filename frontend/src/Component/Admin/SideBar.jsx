import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center  bg-orange-100  w-56 gap-3 h-screen'>
    <Link to={'/productadmin'}>  <div className='rounded shadow-md bg-white w-full p-2 flex justify-center font-semibold cursor-pointer'>Products</div> </Link>
      <div className='rounded shadow-md bg-white w-full p-2 flex justify-center font-semibold cursor-pointer'>Users</div>
    </div>
  )
}

export default SideBar
