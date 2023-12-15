import React from 'react'
import { Header } from './Header'
import Carousel from './Carousel'
import { Category } from './Category'
import { Loaderproduct } from './Loaderproduct'
import { Footer } from './Footer'

function EcommerceHome() {
  return (


    <div className='  h-full w-full flex flex-col '>
      <Header />

      <Carousel />


      <Category />
      <Carousel />

      <Category />
      <Footer />


    </div>



  )
}

export default EcommerceHome