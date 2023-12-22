import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Progress } from './Progress';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";

const stripePromise = loadStripe('your_stripe_publishable_key');
const handlSubmit=(e)=>{
    e.preventDefault();
}
const Payment = () => {
    return (
        <div className='w-full relative'>
            <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>
            {/* Header */}
            {/* <header className='fixed top-0 w-full z-10'>
                <div className='w-full h-20 bg-white border-gray-500 z-20 shadow-xl '>
                    <div className='flex h-full items-center'>
                        <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                            <span className='text-xl'>Ecommerce.</span>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* Progress */}
            <div className='w-full h-20'>
                <Progress />
            </div>
            <div className='flex w-full justify-center items-center h-[90vh] '>
                <div className=" flex flex-col w-[25%] h-[max] p-7 items-center border-[1px] border-gray-400 shadow-lg  ">
                    <div className='bg-[#409899] mb-2 w-full p-7 font-bold justify-center flex text-[floralwhite]'><span>Card Info</span></div>
                    <div className='flex justify-between w-full m-1 '>
                        <img className='h-14 w-14' src='https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg' />
                        <img className='h-14 w-14' src='https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg' />
                        <img className='h-14 w-14' src='https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg' />
                        <img className='h-14 w-14' src='https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg' />
                    </div>
                    <Elements stripe={stripePromise}>
                        <form className="flex flex-col w-full border-[1px] border-gray-200 shadow-sm p-3 " onSubmit={handlSubmit}>

                            <div className="payment-input-container  flex w-full">
                            <CiCreditCard1 className='w-10 h-10'/>
                                <CardNumberElement className="payment-input p-2 mx-5 focus:outline-none focus:border-blue-500 w-full   " />
                            </div>
                            <div className="payment-input-container flex w-full">
                            <MdEventAvailable className='w-10 h-10'/>
                            
                                <CardExpiryElement className="payment-input p-2 mx-5 focus:outline-none focus:border-blue-500 w-full   " />
                            </div>
                            <div className="payment-input-container  flex w-full">
                            <MdOutlineVpnKey className='w-10 h-10'/>
                            <CardCvcElement
          className="payment-input p-2 mx-5 focus:outline-none focus:border-blue-500 w-full   "
        />
                            </div>
                            <div className='flex justify-center'>    <button className="h-max w-max border-[1px] border-gray-400 bg-[#409899] hover:bg-[#215353] p-3 rounded-sm shadow-md text-white font-bold ">Pay Rs.343.00</button></div>
                         
                                
                        </form>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
