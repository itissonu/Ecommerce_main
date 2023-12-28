import React, { useEffect, useReducer } from 'react'
import { Header } from '../Header'
import { ProductSidebar } from './ProductSidebar'
import ProductContainer from './ProductContainer'
import { Footer } from '../Footer'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from '../../../redux_toolkit/productSlice'
import { ToastContainer } from 'react-toastify'
import { Loaderproduct } from '../Loaderproduct'
export const Productspage = () => {
      const productstate = useSelector((state) => state.allproducts);
      const dispatch = useDispatch();
     
      useEffect(()=>{
        getProducts()
      },[]);

      const getProducts =async ()=>{
       await  dispatch(GetAllProducts())
      }
  return (
    <div className='flex flex-col '>
        <Header/>
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
        <div className='mt-24 h-max flex flex-col'>
            <div className='h-[30rem] w-full'>
                <img className='w-full h-full bg-contain' src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Wdh9owc.jpg?format=webp&w=1500&dpr=1.3' alt='img'/>
            </div>
            <div>
                <div className='h-20 w-full border-b-2 border-gray-300'>
                    this the header will show no of products and heading of the product details
                </div>
                <div className='w-full flex  h-1/2 p-1'>
                    <div className='  h-max  flex flex-[20%]'>
                        <ProductSidebar/>
                    </div>
                    <div className=' flex p-3 h-full flex-[80%]'>
                    {productstate.loading ? <Loaderproduct /> : <ProductContainer products={productstate?.products} />}
                       {/* {!(productstate?.products) && productstate.loading ? <Loaderproduct/>:<ProductContainer products={productstate?.products} />}  */}
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  )
}
