import React from 'react'
import { Header } from '../Component/Ecommerce/Header'
import cart from '../photos/shopping-cart.png'
import order from '../photos/collection.png'
import wishlist from '../photos/package.png'
import { Footer } from '../Component/Ecommerce/Footer'
import { useNavigate } from 'react-router-dom'
export const MyProfile = () => {
    const navigate = useNavigate();
    const user = {
        name: 'soumya ranjan sahu',
        email: 'soumya@gmail.com',
        
        profilePhoto: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3'
    }
    return (
        <div className='w-full  flex flex-col'>
            <Header />
            <div className='mt-28 flex justify-center bg-red-700 text-white font-serif font-extrabold'>
                <h2 className='p-4 bg-red-700 text-white font-serif font-extrabold'> MY PROFILE</h2>
            </div>
            <div className='h-screen w-full  flex  justify-center items-center'>
                <div className='h-[60%] w-4/5 p-8 border-gray-300 border-[1px] flex-col flex shadow-lg'>
                    <div className='flex flex-[50%] bg-slate-100 p-3'>
                        <img className='w-40 h-40 rounded-sm mx-5 ' src={user.profilePhoto} alt='img' />
                        <div className='flex flex-col flex-[60%]  '>
                            <div className='flex justify-between'>
                                <span className='capitalize  font-bold text-lg'>  {user.name}   </span>
                                <button className='text-gray-700 shadow-lg h-10 w-max p-2 font-mono bg-white border-[1px] border-gray-400 ' >EDIT PROFILE</button>
                            </div>
                            <span className='text-gray-500' >{user.email}</span>
                            <label className='text-gray-600 hover:cursor-not-allowed flex w-max'>Password - <span className='border-[1px] border-gray-300 bg-gray-200 w-max'> **********</span></label>

                        </div>
                    </div>
                    <div className='w-full flex justify-between flex-[45%] p-3'>
                        <div onClick={() => (navigate('/user/myorders'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={wishlist} />
                            <span className='font-bold'>Orders</span>
                            <span className='text-thin text-gray-400 text-xs'>Check your order status</span>
                        </div>
                        <div onClick={() => (navigate('/user/myorders'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={order} />
                            <span className='font-bold'> Collection & Wishlist</span>
                            <span className='text-thin text-gray-400 text-xs'>All your curated product collection</span></div>
                        <div onClick={() => (navigate('/user/cart'))} className='border-[1px] border-gray-300 shadow-lg h-[70%] w-[20%] flex justify-center flex-col items-center hover:bg-gray-100 hover:cursor-pointer'>
                            <img className='w-14 h-14' src={cart} />
                            <span className='font-bold  '>My Cart</span>  <span className='text-thin text-gray-400 text-xs'>All you product in the cart</span></div>

                    </div>
                    <div className='w-full flex justify-center'>
                    <button className='text-white font-bold shadow-lg h-10 w-max p-2 font-mono bg-red-500 border-[1px] border-red-400 hover:bg-red-700' >LOGOUT</button>
                    </div>
                    <div>

                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}
