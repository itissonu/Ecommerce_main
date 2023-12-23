import React from "react";
import { FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuTag } from "react-icons/lu";
import { BiDetail } from "react-icons/bi";

const SingleProduct = () => {
  return (
    <div className="lg:flex ">
      <div className="flex-[60%]  p-5">
        <img
          className="h-auto w-xl"
          src="https://images.bewakoof.com/t1080/men-the-traveller-printed-t-shirt-557842-1670409309-1.jpg"
          alt="image"
        />
      </div>

      <div className=" flex flex-col p-4 flex-[50%] mx-auto">
        <div className="text-2xl font-bold">ADIDAS</div>
        <div className="text-lg opacity-25 text-gray-700 flex flex-wrap py-2">
          Men's Lilac The Traveller Graphic Printed Oversized T-shirt
        </div>
        <div className=" ">
          <span className="text-2xl font-bold">$499</span>
          <span className="line-through text-lg opacity-20 p-2">$999</span>
          <span className="text-green-300 block mt-2">50% OFF</span>
          <span className="capitalize text-sm block mb-3">
            Inclusive of all taxes
          </span>
          <div className="capitalize h-content  p-2 bg-slate-300 rounded-lg flex gap-6 text-lg mb-4">
            <span className="text-xs xs:text-sm">Price ₹459</span>
            <span className="text-sm flex items-center">
              SaveEXTRA ₹40with TriBe and, enjoy FREE Delivery
            </span>
          </div>

          <div className="my-2 shadow-lg bg-[#fff] flex h-fit p-3 justify-between items-center  ">
            <div className="text-sm sm:text-[30px] md:text-sm max-h-min xs:h-fit">OVERSIZED FIT</div>
            <div className="border-2 px-4 rounded-md w-fit h-content flex justify-between items-center gap-3">
              <span> 4.4 </span>
              <span>
                <FaStar className="text-yellow-400 inline-flex " />
              </span>
              <span className="hidden sm:block"> | 140 Ratings</span>
            </div>
            <div className="border-2  p-1 rounded-md text-sm text-gray-400">
              100% COTTON
            </div>
          </div>

          <div className="bg-white shadow-md flex justify-start p-3 gap-4 mt-6 ">
            <div className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
              XS
            </div>
            <div className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
              S
            </div>
            <div className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
              M
            </div>
            <div className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
              L
            </div>
            <div className=" h-10 rounded-2xl bg-gray-300 w-14 items-center flex justify-center ">
              XL
            </div>
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

          <div className=" text-left">
            Red cabin trolley suitcase One short handle and a trolley with
            retractable handle on the top Four corner mounted inline skate
            wheels One main zip compartment secured with a combination lock
            system, has an inner zip pocket, elasticated straps secured with
            click clasp closures and a zip lining Warranty: 5 years Warranty
            provided by the brand owner / manufacturer
          </div>
        </div>

        <div className="mt-4">
          <span className="block font-semibold text-xl">Specifications</span>
          <div className="flex gap-4">
            <div className="flex-[50%]">
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
            </div>
            <div className="flex-[50%]">
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
              <div className=" mt-2 border-b">
                <span className="text-xs block">Back</span>
                <span className="text-[17px]">BackNon-Padded</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-2">
          <span>RATINGS</span>
          <div className="flex">
            <div className="flex flex-[50%] items-center border-r">
              <span className=" text-6xl mr-6 ">4.4</span>
              <span className="block">
                <FaStar size={30} className="text-yellow-400" />
              </span>
              <span>140 verified users</span>
            </div>
            <div className="flex flex-[50%] px-3 flex-col">
              <span>
                5 <div className="h-2 inline-block bg-[#2ca003] w-4/5 "></div>
              </span>
              <span>
                4 <div className="h-2 inline-block bg-[#ffc780] w-2/5 "></div>
              </span>
              <span>
                3 <div className="h-2 inline-block bg-[#2ca003] w-4/5 "></div>
              </span>
              <span>
                2 <div className="h-2 inline-block bg-[#ffc780] w-3/5 "></div>
              </span>
              <span>
                1 <div className="h-2 inline-block bg-[#cc5c58] w-1/5 "></div>
              </span>
            </div>
          </div>
        </div>

        <div>
          <span className="font-semibold text-xl">Customer Reviews</span>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
