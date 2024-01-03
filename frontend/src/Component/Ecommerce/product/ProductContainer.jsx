import React, { useEffect, useState } from 'react'
import wishlistimg from '../../../photos/wishlist.png'
import wishlistred from '../../../photos/redwishlist.png'
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { AddWishlistGProduct, WishlistGetAllProducts, deleteWishlistProduct } from '../../../redux_toolkit/wishlistSlice';
import { Loaderproduct } from '../Loaderproduct';

function ProductContainer({ products }) {
    const navigate = useNavigate();
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [animateHeart, setAnimateHeart] = useState(false);
    const storedUserData = localStorage.getItem('user');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;
    
    let wishliststate = useSelector((state) => state.wishlistproducts)
    const dispatch = useDispatch();

    useEffect(() => {
        const calldispatch = async () => {
            if(userData)
            await dispatch(WishlistGetAllProducts())
        }
        calldispatch()
    }, [dispatch,wishliststate?.wishproducts?.length]);

    const wishlist = wishliststate.wishproducts;
    
    const handleHeartIconClick = async (ProductId, FinalPrice) => {
      
        const body = { ProductId, FinalPrice }
        await dispatch(AddWishlistGProduct(body))
        
        if(!userData){
            navigate('/login')
        }
        setAnimateHeart(true); 
        setTimeout(() => {
            setAnimateHeart(false); 
        }, 1000);
    }

    const handleHeartIconClickdelete = async (ProductId) => {     
        await dispatch(deleteWishlistProduct(ProductId));
        setAnimateHeart(true); 
        setTimeout(() => {
            setAnimateHeart(false); 
        }, 2000);
    }
    
    const isProductInWishlist = (ProductId) => {
        return wishlist.some((item) => item?.ProductId?._id === ProductId);
    };

    return (
        <div className='w-full h-full flex flex-col '>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
       
            <div className='w-full h-full flex flex-wrap gap-3'>
                {products?.length===0? <div className='flex justify-center items-center h-screen'>
               <div> please login for this action</div>
            </div>:products?.map((product, id) => (
                    <div onClick={() => navigate(`/user/singleProduct/${product._id}`)} onMouseOver={() => setHoveredProduct(id)}
                        onMouseOut={() => setHoveredProduct(null)} className='w-[19rem] h-[470px]  justify-center m-2 shadow-xl items-center flex flex-col ' key={id} >

                        <div className='p-4 relative  w-full '>
                            {!(hoveredProduct === id) && <span className={`text-xs border-1 border-gray-400 bg-gray-700 text-white p-1 absolute top-5 left-0 shadow-md transform transition-transform translate-x-4`}>
                                {product.brand}
                            </span>}
                            
                            {wishlist.length === 0 ? <FaRegHeart className='absolute  top-5 right-5 h-5 text-blue-500 w-5 hover:cursor-pointer' onClick={(e) => {
                                e.stopPropagation();
                                handleHeartIconClick(product._id, product.price);
                            }} /> : <>{(isProductInWishlist(product._id)) ? <FaHeart onClick={(e) => {
                                e.stopPropagation();
                                handleHeartIconClickdelete(product._id);
                            }} className={`absolute  top-6 right-5 h-5 text-[#117a7a] w-5 hover:cursor-pointer ${
                                animateHeart ? 'animate-pulse': ''}`}/> : <FaRegHeart className='absolute  top-5 right-5 h-5  w-5 hover:cursor-pointer' onClick={(e) => {
                                e.stopPropagation();
                                handleHeartIconClick(product._id, product.price);
                            }} />}</>}

                            <span className='absolute bottom-[26px] right-7 flex  bg-slate-100 items-center  p-1 font-mono text-[12px] '>4.4<IoStar className='h-3 m-1 w-3 text-[#117a7a]' /></span>

                            {(hoveredProduct === id && product.images[1]) ? (
                                <img className='object-fit h-72 w-72' src={product.images[1].url} alt="Second Image" />
                            ) : (
                                <img className='h-72 w-72' src={product.images[0].url} alt="First Image" />
                            )}

                        </div>
                        <div className='flex flex-col h-[136px] w-full p-3'>
                            <span className='font-[700] mx-2'>{product.category}</span>
                            <h1 className='font-normal mx-2 text-gray-500 text-sm'>{product.name}</h1>

                            <div className='flex  p-2 items-center'>
                                <span className='font-[700] text-sm '>Rs.{product.price}</span>
                                <span className='text-red-600  mx-2'>{product.discount}% OFF</span>
                            </div>
                        </div>
                    </div>
                ))

                }

            </div>
            <div className='w-full h-full p-6 flex item-center border-t-[1px] border-gray-300 mt-6'>
                <div className='flex w-[80%] h-max p-2 justify-center items-center gap-2'>
                    <button className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>1</button>
                    <button className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>2</button>
                    <button className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>3</button>
                    <button className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>4</button>
                </div>
                <button className='font-bold text-base p-4 border-[1px] border-[#e93d67] text-[#e93d67] h-max'>Next</button>
            </div>
        </div>
    )
}


export default ProductContainer