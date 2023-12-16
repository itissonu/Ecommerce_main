import React, { useState } from 'react'
import img1 from '../photos/Vector-1.svg'
import img2 from '../photos/Vector-2.svg'
import avatar from '../photos/AVATAR.svg'
import profile from '../photos/healthicons_ui-user-profile.svg'
import user from '../photos/user.png'
import lock from '../photos/lock.png'
import hide from '../photos/hide.png'
import eye from '../photos/eye.png'
import email from '../photos/email.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate=useNavigate();

  const[err,setError]=useState('')
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(true);
  const [file, setFile] = useState(null);
  const [userInfo, setUserInfo] = useState('');
 
  const handleChange = async (e) => {
    setUserInfo((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }
    ));
  };


  const hanleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let photo = file;
    const data = new FormData();
    if (file) {
      data.append('file', file);
      data.append('upload_preset', 'upload');
    }
    try {

      if (file) {
        const uploadRes = await axios.post(
          'https://api.cloudinary.com/v1_1/dbsonu270/image/upload',
          data
        );
        const { url } = uploadRes.data;

        photo = url;

        setLoading(false);

        const userdetails = {
          ...userInfo,
          profilePhoto: photo
        }
        
        const userregister = await axios.post("http://localhost:8001/app/auth/register", userdetails, {
          withCredentials: true,
        });
        navigate('/login');
       
        
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(err)
     
      console.log(error);
    }

  }



  return (
    <div className='flex justify-center items-center  h-screen w-full  bg-slate-200 border-t-4 border-yellow-500' >
      <img className=' absolute top-0 left-0 ' src={img1} alt='img1' />
      <img className=' absolute bottom-0 right-0 w-64 h-60' src={img2} alt='img1' />
      <div className=' h-3/4  w-1/3 max-w-md  bg-white  border-t-8 border-yellow-500 z-10'>
        <form className=' h-full w-full bg-white flex flex-col  items-center '>
          <div className='flex flex-col justify-center items-center'>
            <img className=' m-2' src={profile} alt='img' />
            <img className=' m-2' src={avatar} alt='avatar' />
            <input type='file' className="cursor-pointer mx-3  ml-52 appearance-none bg-transparent border-none text-white p-2 rounded-md border-2 border-blue-500 hover:border-blue-700 focus:border-blue-700 focus:outline-none" accept="image/*"
              onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className='flex m-3'>
            <img className=' w-11 h-11 mx-3' src={user} alt='img' />
            <input className=' w-full sm:w-80 p-2 outline-none   border-b-2  border-slate-500' type='text' name='name' placeholder='Enter Your Name' onChange={handleChange} />
          </div>
          <div className='flex m-3'>
            <img className=' w-11 h-11 mx-3' src={email} alt='img' />
            <input className=' w-full sm:w-80 p-2 outline-none   border-b-2  border-slate-500' type='email' name='email' placeholder='Enter Your Password' onChange={handleChange} />
          </div>
          <div className='flex  m-3 relative'>
            <img className=' w-11 h-11 mx-3' src={lock} alt='img' />
            <input className='w-full sm:w-80  p-2 outline-none   border-b-2  border-slate-500' type={pass ? 'password' : 'text'} name='password' placeholder='Enter Your Password' onChange={handleChange} />
            {pass ? <img className='absolute z-10 top-1 right-0 w-8 h-8 mx-2' onClick={() => setPass(false)} src={eye} alt='img' /> :
              <img className='absolute z-10 top-1 right-0 w-8 h-8 mx-2' onClick={() => setPass(true)} src={hide} alt='img' />}
          </div>
          <div className=' mt-4'>
            <button className={`hover:cursor-pointer justify-center items-center flex hover:bg-cyan-400 w-28 font-bold h-12 p-1 rounded bg-green-400 text-amber-50 shadow-xl ${loading ? 'animate-pulse' : ''}`} type='submit' onClick={hanleSubmit}>{loading ? <div className='w-7 h-7 rounded-full border-4 border-dashed border-white animate-spin'></div> : 'Register'}</button>
          </div>



        </form>
      </div>
    </div>
  )
}

export default Register