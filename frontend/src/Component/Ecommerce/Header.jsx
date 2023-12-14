import React from 'react'
import logo from '../../photos/newlogo.png'
import fb from '../../photos/facebook.png'
import insta from '../../photos/instagram.png'
import twitter from '../../photos/twitter.png'
import cart from '../../photos/shopping-bag.png'
import wishlist from '../../photos/wishlist.png'
import menu from '../../photos/burger-bar.png'
import search from '../../photos/magnifying-glass.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='relative'>
            <header className=' w-full  fixed top-0'>

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
                        <div className='flex '>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'> <span>Ecommerce.</span>
                            </div>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <li className=' list-none'>  <a> Men</a>  </li>
                            </div>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <li className=' list-none'>  <a> Women</a>  </li>
                            </div>
                            <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                                <li className=' list-none'>  <a> Shoes</a>  </li>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='flex relative'>
                                <input className=' p-2 outline-none  w-56  bg-[#eaeaea] border border-transparent ' type='text' placeholder='Search for products'/>
                                <img className='h-5 w-5 absolute top-[12px] left-[-1.75rem] mr-2' src={search}/>
                            </div>
                            <img className='h-6 w-6 mx-3  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={wishlist}/>
                            <img className='h-6 w-6 mx-3  transition-transform transform hover:scale-110 hover:shadow-lg hover:cursor-pointer' src={cart}/>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
