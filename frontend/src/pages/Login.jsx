import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//import { Toast } from 'react-toastify/dist/components';
import { toast } from 'react-toastify';
import Toaster from '../Component/toast/Toast';


function Login() {
  const navigate = useNavigate();
  const [err, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const tostifySuccess=(msg)=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleChange = async (e) => {
    setUserInfo((prev) => ({
      ...prev, [e.target.name]: e.target.value

    }));

  }
  const hanleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    try {
      const resdata = await axios.post('http://localhost:8001/app/auth/login', userInfo,{
        withCredentials: true,
      });
     // console.log(resdata);
      tostifySuccess(resdata.data.message);

      const userId = resdata.data.role;

      navigate(userId === "admin" ? '/admin' : '/');

      setLoading(false);

    } catch (error) {
      setError(error.response.data.message);
      console.log(err)

      console.log(error);

    }

  }

  return (
    <div>
    <Toaster/>
      <form onSubmit={hanleSubmit}>
        <input className=' w-full sm:w-80  p-2   border-2  border-slate-500' placeholder='email' type='email' name='email' onChange={handleChange} />
        <input className=' w-full sm:w-80  p-2    border-2  border-slate-500' placeholder='password' type='password ' name='password' onChange={handleChange} />
        <button className={`hover:cursor-pointer justify-center items-center flex hover:bg-cyan-400 w-28 font-bold h-12 p-1 rounded bg-orange-400 text-amber-50 shadow-xl ${loading ? 'animate-pulse' : ''}`} type='submit' onClick={hanleSubmit}>{loading ? <div className='w-8 h-8 rounded-full border-4 border-dashed border-y-4 border-t-transparent animate-spin'></div> : 'Register'}</button>
      </form>

    </div>
  )
}

export default Login