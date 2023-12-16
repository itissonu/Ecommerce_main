import React from 'react'
import { Header } from '../Header'
import { ProductSidebar } from './ProductSidebar'
import ProductContainer from './ProductContainer'

export const Productspage = () => {
  return (
    <div className='flex flex-col '>
        <Header/>
        <div className='mt-24 flex flex-col'>
            <div className='h-[30rem] w-full'>
                <img className='w-full h-full bg-contain' src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_Wdh9owc.jpg?format=webp&w=1500&dpr=1.3' alt='img'/>
            </div>
            <div>
                <div className='h-20 w-full border-b-2 border-gray-300'>
                    this the header will show no of products and heading of the product details
                </div>
                <div className='w-full flex  h-1/2 p-1'>
                    <div className='  h-40  flex flex-[20%]'>
                        <ProductSidebar/>
                    </div>
                    <div className=' flex p-5 flex-[80%]'>
                        <ProductContainer/>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}
