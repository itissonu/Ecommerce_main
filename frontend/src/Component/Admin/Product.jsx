import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Model } from './Model';
import axios from 'axios';

const Product =  () => {
  
 const[resData,setResdata]=useState("");
  useEffect(()=>{
  const fetchdata=async()=>{
      try {
        const res= await axios.get("http://localhost:8001/app/product/admin/allProduct",{
          withCredentials: true,
        });
      //  console.log(res)
        setResdata(res.data.productlist)
      } catch (error) {
        console.log(error)
      }
  }
  fetchdata();
  },[]);
 

  const [open, setOpen] = useState(false);
 // console.log(open);

  return (
    <div>

      <NavBar />
      <div className='flex'>
        <SideBar />
        <div className='bg-indigo-100  h-auto w-screen '>
          <div className='flex justify-between align-middle mx-5 m-4' >
            <span className='text-4xl'>Product Details</span>
            <button className=' hover:cursor-pointer hover:bg-cyan-400 w-28 font-bold h-12 p-1 rounded bg-green-400 text-amber-50 shadow-xl ' onClick={(e) => setOpen(true)} > Add Product</button>
          </div>
          <div className='mx-5 m-4 h-auto w-auto '>
            <div className='flex flex-row m-4 mx-4 p-3 justify-between  items-center'>
              <span className='mx-2 w-24'>Avatar </span>
              <span className=' w-24'> Product name</span>
              <span className=' w-24'> Price</span>
              <span className=' w-24'> Stock</span>
              <span className=' w-24'> Brand</span>
              <span className=' w-24'>Edit</span>
              <span className=' w-24'>Delete</span>
            </div>
            {resData &&
              resData.map((product) => (
                <div id={product.id} className='flex flex-row m-4 mx-4 p-3 justify-between  items-center  border-b-2 border-slate-500'>
                  <img className=' h-20  w-20' src={product?.images[0]?.url} alt='loading' />
                  <span className=' w-24'>{product?.name}</span>
                  <span className=' w-24'>{product?.price}</span>
                  <span className=' w-24'>{product?.Stock}</span>
                  <span className=' w-24'>{product?.brand}</span>
                  <button className=' w-24 hover:cursor-pointer hover:bg-cyan-400  font-bold h-12 p-1 rounded bg-green-400 text-amber-50 shadow-xl'  >Edit</button>
                  <button className=' w-24 hover:cursor-pointer hover:bg-cyan-400  font-bold h-12 p-1 rounded bg-red-400 text-amber-50 shadow-xl'  >Delete</button>

                </div>
              ))

            }

          </div>

        </div>
      </div>
      {open && <div>
        <div >
            <Model  isOpen={open} setOpen={setOpen}/>
        </div>
      </div>}
    </div>
  )
}

export default Product
