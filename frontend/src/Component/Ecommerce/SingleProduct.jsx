import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { BiDetail } from "react-icons/bi";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAProduct } from "../../redux_toolkit/productSlice";
import { Loaderproduct } from "./Loaderproduct";

const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
  }, [id]);

  const productstate = useSelector((state) => state.allproducts);
  const dispatch = useDispatch();
  const getProducts = async () => {
    await dispatch(GetAProduct(id))
    setLoading(false);
  }
  const product = productstate?.singleProduct;
  const stocksize = product?.Stock >= 10 ? 10 : product?.Stock;
  
    const startValue = 1;
    const endValue = stocksize;
    const newArray = [];

  
  for (let i = startValue; i <= endValue; i++) {
    newArray.push(i);
}
const [selectedQuantity, setSelectedQuantity] = useState(1);

const handleQuantityChange = (e) => {
setSelectedQuantity(parseInt(e.target.value, 10));
};
console.log(selectedQuantity)
  return (
    <div className="lg:flex flex flex-col ">
      <Header />
      {(loading) ? <Loaderproduct /> :
        <div className="flex  mt-[7rem]">

          <div className="flex-[55%] flex h-max flex-col  justify-center gap-4 flex-wrap p-1">
            <img
              className=""
              src={product?.images[0]?.url}
              alt="image"
            /><div className="flex flex-wrap gap-3 p-4">
            {product.images.map((image, i) => (
              <img key={i}
                className="h-[30%] w-[30%] "
                src={image?.url}
                alt="image"
              />
            ))}</div>

          </div>

          <div className=" flex flex-col p-4 flex-[45%] mx-auto border-l-[1px] border-gray-200">
            <div className="text-2xl font-bold capitalize">{product?.brand}</div>
            <div className="text-lg  text-gray-500 flex flex-wrap py-2">
              {product?.name}
            </div>
            <div className=" ">
              <span className="text-2xl font-bold">₹499</span>
              <span className="line-through text-lg opacity-50 p-2">₹{product?.price}</span>
              <span className="text-green-300 block mt-2">{product?.discount}% OFF</span>
              <span className="capitalize text-sm block mb-3">
                Inclusive of all taxes
              </span>
              <div className="capitalize h-content  p-2 bg-slate-300 rounded-lg flex gap-6 text-lg mb-4 w-max">
                <span className="text-xs xs:text-sm">Price ₹459</span>
                <span className="text-sm flex items-center ">
                  SaveEXTRA ₹40with TriBe and, enjoy FREE Delivery
                </span>
              </div>

              <div className="my-2 shadow-lg bg-[#fff] flex h-fit p-3 justify-between items-center  ">
                <div className="text-sm sm:text-[30px] md:text-sm max-h-min xs:h-fit">OVERSIZED FIT</div>
                {product?.avgRatings !== 0 && <div className="border-2 px-4 rounded-md w-fit h-content flex justify-between items-center gap-3">
                  <span> 4.4 </span>
                  <span>
                    <FaStar className="text-yellow-400 inline-flex " />
                  </span>
                  <span className="hidden sm:block"> | 140 Ratings</span>
                </div>}
                <div className="border-2  p-1 rounded-md text-sm text-gray-400">
                  100% COTTON
                </div>
              </div>
              
              <div className="bg-white shadow-md flex justify-start p-3 gap-4 mt-4 ">
                {product?.size.map((sz, i) => (
                  <span key={i} className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
                    {sz}
                  </span>
                ))}


              </div>
            </div>
            <div className="flex item-center mt-3">
                <div className="flex">
                  <div className=" ">Quantity  &nbsp; </div>
                  <select className="border-[1px] border-gray-500 rounded-sm shadow-md outline-none"   value={selectedQuantity}
          onChange={handleQuantityChange}>
                    {newArray.map((num,index) => (
            <option key={index} value={num }>
              {num }
            </option>
          ))}
                  </select>
                </div>
              </div>
            <div className="flex justify-center items-center h-16 my-3 gap-4 mt-5">
              <button className=" w-1/2 rounded-md py-3 bg-[#ec3d25] hover:bg-[#fb641b]  hover:text-xl text-white text-lg font-bold ">
                <span className="mr-1 xs:mr-3 ">ADD TO BAG</span>
                <TiShoppingCart size={30} className="inline-flex" />
              </button>
              <button className="w-1/2 rounded-md py-3 text-black  text-xl border-2">
                <span className="mr-3 text-[#14abcf]">Wishlist</span>
                <IoIosHeartEmpty size={30} className="inline-flex " />
              </button>
            </div>

            <div>
              <span className="text-lg font-bold block mb-3">
                BEST OFFERS <LuTag size={20} className="ml-2 inline-flex" />
              </span>
              {[1, 2, 3].map((v, i) => {
                return (
                  <div key={i}>
                    <span className="font-semibold">
                      10% Instant Discount on ICICI Bank Credit and Debit Card
                    </span>
                    <span>
                      <ul className="text-sm my-2 list-disc ml-5">
                        <li>Min Spend ₹3,500, Max Discount ₹1,000.</li>
                      </ul>
                    </span>

                    <span className="text-rose-700 font-semibold">
                      Terms & Condition
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5">
              <span className="font-semibold text-2xl flex items-center justify-start gap-2">
                PRODUCT DETAILS <BiDetail size={25} className="inline-flex " />
              </span>

              <div className=" text-gray-500 text-sm
             text-left">
                {product.description}
              </div>
            </div>

            <div className="mt-4">
              <span className="block font-semibold text-xl  text-gray-800  uppercase">Specifications</span>
              <div className="flex gap-4">
                <div className="flex-[50%]">
                  <div className=" mt-2 border-b">
                    <span className="text-xs block  text-gray-800">Brand</span>
                    <span className="text-[17px]">{product?.brand}</span>
                  </div>
                  <div className=" mt-2 border-b">
                    <span className="text-xs block  text-gray-800">Name</span>
                    <span className="text-[17px]">{product?.name}</span>
                  </div>


                </div>
                <div className="flex-[50%]">
                  <div className=" mt-2 border-b">
                    <span className="text-xs block text-gray-800">Category</span>
                    <span className="text-[17px]">{product?.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {product?.avgRatings !== 0 && <div className="my-2">
              <span className=" text-gray-800 font-semibold uppercase">RATINGS</span>
              <div className="flex">
                <div className="flex flex-[50%] items-center border-r">
                  <span className=" text-6xl mr-6 ">4.4</span>
                  <span className="block">
                    <FaStar size={30} className="text-yellow-400" />
                  </span>
                  <span>140 verified users</span>
                </div>

              </div>
            </div>}

            <div className="flex flex-col  mt-4">
              <span className="font-semibold text-xl text-gray-800 uppercase">Customer Reviews</span>
              {product?.avgRatings !== 0 ? <div>
                {[1, 2, 3].map((v, i) => {
                  return (
                    <div>
                      <span>
                        <FaStar size={15} className="text-[#adc7e5]" />
                      </span>
                      <span className="text-lg  block">Look, style, quality, user experience awesome!</span>
                      <span className="text-sm font-semibold opacity-30">Dabi Das Mukherjee11 Dec 2023</span>
                    </div>
                  );
                })}
              </div> : <span>No Reviews to Show here</span>}
            </div>
          </div>
        </div>}
      <Footer />
    </div>
  );
};

export default SingleProduct;
