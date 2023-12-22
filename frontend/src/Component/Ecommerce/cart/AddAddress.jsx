import React, { useEffect, useState } from 'react'
import { Progress } from './Progress'
import { Footer } from '../Footer'
import { AddressModal } from '../Modals/AddressModal';

export const AddAddress = () => {
    const [open, setOpen] = useState(false);
    const [existingAddress, setAddress] = useState([]);
    const [addres, setAddres] = useState('');
    const [selectedAddress, setSelectedAddress] = useState(null);

    const carts = {
        "cartitems": [
            {
                "_id": "6572ed06375abf5f940ee69f",
                "ProductId": {
                    "_id": "656f73f2b35b98eeca457422",
                    "name": "Example Product 2",
                    "description": "This is an example product description.of product2",
                    "category": "topwear",
                    "brand": "Example Brand",
                    "price": 499.99,
                    "discount": 0.1,
                    "Stock": 94,
                    "ratings": [
                        {
                            "name": "John Doe",
                            "rating": 4.5,
                            "comment": "Great product!",
                            "_id": "656f73f2b35b98eeca457423"
                        },
                        {
                            "name": "Jane Doe",
                            "rating": 5,
                            "comment": "Amazing!",
                            "_id": "656f73f2b35b98eeca457424"
                        }
                    ],
                    "totalRatings": 2,
                    "images": [
                        {
                            "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
                            "_id": "656f73f2b35b98eeca457425"
                        },
                        {
                            "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
                            "_id": "656f73f2b35b98eeca457426"
                        }
                    ],
                    "featuredProduct": true,
                    "colors": [
                        "Black",
                        "White",
                        "Blue"
                    ],
                    "size": [
                        "S",
                        "M",
                        "L"
                    ],
                    "createdAt": "2023-12-05T19:03:14.717Z",
                    "__v": 0,
                    "ageCategory": "Others",
                    "avgRatings": 0
                },
                "userId": "656e0dfdc0a96c1cc45da17b",
                "quantity": 15,
                "color": "Blue",
                "size": 'S',
                "FinalPrice": 998,
                "__v": 0
            },
            {
                "ProductId": {
                    "avgRatings": 0,
                    "ageCategory": "Others",
                    "_id": "656f7470b35b98eeca457429",
                    "name": "Wrong tshirt",
                    "description": "This is an example product description.of product2",
                    "category": "Shirt",
                    "brand": "Wrong",
                    "price": 499.99,
                    "discount": 0.5,
                    "Stock": 1100,
                    "ratings": [
                        {
                            "name": "John Doe",
                            "rating": 4.5,
                            "comment": "Great product!",
                            "_id": "656f7470b35b98eeca45742a"
                        },
                        {
                            "name": "Jane Doe",
                            "rating": 5,
                            "comment": "Amazing!",
                            "_id": "656f7470b35b98eeca45742b"
                        }
                    ],
                    "totalRatings": 2,
                    "images": [
                        {
                            "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
                            "_id": "65702a6ed65a6bece2366777"
                        },
                        {
                            "url": "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
                            "_id": "65702a6ed65a6bece2366778"
                        }
                    ],
                    "featuredProduct": false,
                    "colors": [
                        "Black",
                        "White",
                        "Blue"
                    ],
                    "size": [
                        "S",
                        "M",
                        "L"
                    ],
                    "createdAt": "2023-12-05T19:05:20.193Z",
                    "__v": 0
                },
                "userId": "656e0dfdc0a96c1cc45da17b",
                "quantity": 6,
                "color": "Blue",
                "size": 'M',
                "FinalPrice": 1998,
                "__v": 0
            }
        ]
    }
    useEffect(() => {
        const LocalstgAddress = JSON.parse(localStorage.getItem('addresses')) || [];
        setAddress(LocalstgAddress);
    }, [addres]);

    const handleDelete = (index) => {

        const AddressAfterdel = existingAddress.filter((_, i) => i !== index);
        setAddress(AddressAfterdel);
        localStorage.setItem('addresses', JSON.stringify(AddressAfterdel));
    }
    const [border, setBorder] = useState('');
    const handleRadioChange = (index) => {

        setBorder(index);
        setSelectedAddress(existingAddress[index]);
    };

    const subtotal = carts.cartitems.reduce(
        (acc, item) => acc + item.quantity * item.ProductId.price,
        0
    );

    const shippingCharges = subtotal > 1000 ? 0 : 200;

    const tax = subtotal * 0.18;

    const totalPrice = subtotal + tax + shippingCharges;

    return (
        <div className='w-full relative'>
        <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>
            {open && <AddressModal isOpen={open} setOpen={setOpen} setAddres={setAddres} addres={addres} />}
            <header className=' fixed top-0 w-full z-10'>
                <div className='w-full h-20 bg-white  border-gray-500  z-20   shadow-xl '>
                    <div className='flex h-full items-center'>
                        <div className='flex items-center justify-center mx-3 p-2 hover:cursor-pointer'>
                            <span className='text-xl'>Ecommerce.</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className='w-full h-20 mt-20 '>
                <Progress />
            </div>
            <div className='p-4 full flex justify-center items-center '>
                <div className='w-[80%] flex'>
                    <div className='flex-[55%] flex flex-col w-full p-4 '>
                        <div className='flex justify-end  border-[1px] p-4  border-gray-300 shadow-md'>
                            <button className='text-red-400 shadow-lg h-10 w-max p-2 font-mono  border-[1px] border-red-400 ' onClick={() => setOpen(true)}>ADD ADDRESS</button>
                        </div>
                        <span className='m-3 font-semibold text-lg text-gray-700'>Deliver to</span>
                        <div>
                            {existingAddress.map((address, index) => (

                                <div key={index} className={`${border === index ? 'border-blue-500 shadow-sky-300' : 'border-slate-200'} w-[60%] flex p-4 shadow-md border-[1px] flex-col m-3`}>
                                    <div className='flex justify-end '><input className='h-5 w-5'
                                        type="radio"
                                        name="addressRadio"
                                        value={index}
                                        checked={selectedAddress === existingAddress[index]}
                                        onChange={() => handleRadioChange(index)}
                                    /></div>

                                    <span className='font-medium capitalize text-gray-700'>Soumya ranjan sahu</span>
                                    <span>{address.pincode}</span>
                                    <span>{address.address}</span>
                                    <span>{address.state}</span>
                                    <span>{address.city}</span>
                                    <span className='font-bold text-lg'>Phone:{address.phoneNo}</span>
                                    <div className='flex justify-end w-full p-5'>

                                        <button className='border-[1px] shadow-md text-red-500 hover:bg-slate-200 border-gray-400 p-3 mx-2 h-max w-max ' onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className='flex-[45%]  border border-r-[1px] border-gray-200 w-full flex  flex-col  '>
                        {/* {selectedAddress&& <div>
                                    <span> {selectedAddress.address} {selectedAddress.phoneNo} | {selectedAddress.state}</span>
                        </div>} */}
                        <div>
                            <span className='bg-yellow-300 p-2 mx-5'> You are paying for these items</span>
                            {
                                carts.cartitems.map((product, ind) => (
                                    <div className=' w-[70%] h-max flex border-b-[1px] border-gray-400 p-4 ' key={ind}>
                                        <img className='h-8 w-8 mx-3' src={product.ProductId.images[0].url} />
                                        <span>{product.ProductId.brand} |{product.ProductId.name} |Size: {product.size} </span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='m-5  border-[1px] border-gray-300 w-[65%] flex flex-col '>
                            <div className='w-full shadow-sm bg-gray-200 font-semibold p-3 flex border-b-[1px] border-gray-300 justify-center items-center'>
                                <span  >
                                    BILLING DETAIS
                                </span>
                            </div>

                            <div className='flex  flex-col w-full '>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Cart Total  </span>
                                    <span>₹{(subtotal).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>    GST (Incl. of taxes)  </span>
                                    <span >₹{(tax).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Delivery Fee </span>
                                    <span className='text-green-700 '>₹{(shippingCharges).toFixed(2)}</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Total Amount </span>
                                    <span className='font-bold text-lg'>₹{(totalPrice).toFixed(2)}</span>
                                </div>
                                <button className='p-3 h-max w-full  rounded-sm bg-[#117a7a] text-white font-bold'>CONTINUE TO PAYMENT</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
