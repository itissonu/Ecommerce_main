import React, { useEffect, useState } from 'react'
import logo from '../../photos/newlogo.png'
import fb from '../../photos/facebook.png'
import insta from '../../photos/instagram.png'
import twitter from '../../photos/twitter.png'
import cart from '../../photos/shopping-bag.png'
import wishlist from '../../photos/wishlist.png'
import menu from '../../photos/burger-bar.png'
import search from '../../photos/magnifying-glass.png'
import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux'

export const Header = () => {
    const navigate = useNavigate();
    const [userPresent, setUser] = useState(false);

    const authstate = useSelector((state) => state.auth);
    const storedwishlist=JSON.parse(localStorage.getItem('wishlist'))||[];
    const wishliststate = useSelector((state) => state.wishlistproducts);
console.log(storedwishlist?.length || [])
    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        if (!storedUserData) {
            setUser(false);
        } else {
            setUser(true)
        }
    }, [authstate.user,wishliststate?.wishproducts?.length]);

    return (
        <div className='relative'>
            <header className=' w-full  z-50 fixed top-0'>

                <div className=' w-full  bg-slate-400 p-[4px] flex flex-row justify-center'>
                    <div className=' w-[1200px] bg-slate-400 p-[4px] flex flex-row justify-end'>
                        <img className=' h-3 w-3 mx-2  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={insta} alt='img' />
                        <img className=' h-3 w-3 mx-2  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={fb} alt='img' />
                        <img className=' h-3 w-3 mx-2  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={twitter} alt='img' />
                    </div>

                </div>

                <div className='w-full h-20 bg-white border-t-[0.5px] border-gray-500  z-20   shadow-xl  flex justify-center'>
                    <div className='w-auto flex items-center h-20 bg-slate-50'>
                        <img className=' mx-3 h-6 w-6 sm:hidden' src={menu} />
                    </div>
                    <div className='flex items-center justify-between w-[1200px] '>
                        <div className='flex h-full items-center'>
                            <div onClick={() => navigate('/')} className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'> <span className='text-xl'>Ecommerce.</span>
                            </div>
                            <div onClick={() => navigate('/user/products')} className=' hidden sm:flex items-center justify-center mx-3 p-2 hover:cursor-pointer h-full  hover:border-b-4 border-yellow-400'>
                                <li className=' text-xl font-mono font-extrabold  text-gray-800 list-none'>  <a> Men</a>  </li>
                            </div>
                            <div className='hidden sm:flex items-center justify-center mx-3 p-2 hover:cursor-pointer h-full  hover:border-b-4 border-yellow-400'>
                                <li className=' text-xl font-mono font-extrabold  text-gray-800 list-none'>  <a> Women</a>  </li>
                            </div>
                            <div className=' hidden sm:flex items-center justify-center mx-3 p-2 hover:cursor-pointer h-full  hover:border-b-4 border-yellow-400'>
                                <li className='text-xl font-mono font-extrabold  text-gray-800 list-none'>  <a> Shoes</a>  </li>
                            </div>
                        </div>

                        <div className='flex justify-center items-center h-[100%]  '>
                            <div className='flex relative'>
                                <input className=' p-2 outline-none  w-56  bg-[#eaeaea] border border-transparent ' type='text' placeholder='Search for products' />
                                <img className='h-6 w-6 absolute top-[12px] left-[-1.75rem] mr-2' src={search} />
                            </div>
                            <div onClick={() => navigate('/user/wishlist')} className='relative flex h-full items-center hover:border-b-4 border-yellow-400'>
                                <span className='flex absolute top-[1.25rem] rounded-[100%] z-10 bg-red-600 h-3 w-3 text-white font-extrabold  text-[9px] justify-center items-center right-2'>{storedwishlist.length||0}</span>
                                <img className='h-6 w-6 mx-3  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={wishlist} />
                            </div>
                            <div onClick={() => navigate('/user/cart')} className='relative flex h-full items-center hover:border-b-4 border-yellow-400 '>
                                <span className='flex absolute top-[1.25rem]  rounded-[100%] z-10 bg-red-600 h-3 w-3 text-white font-extrabold  text-[9px] justify-center items-center right-2'>3</span>
                                <img className='h-6 w-6 mx-3  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={cart} />
                            </div>
                            {userPresent === true ? <div className='flex gap-1 '><CgProfile onClick={() => navigate('/user/myprofile')} className='w-7 h-7 hover:cursor-pointer' /><button>Profile</button></div> : <button onClick={() => navigate('/login')}>Login/Register</button>}

                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
