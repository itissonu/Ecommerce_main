import React, { useState } from 'react'
import { Progress } from './Progress'
import { Footer } from '../Footer'

export const Cart = () => {
    const products = [{
        name: "Example Product",
        category: "Electronics",
        brand: "Example Brand",
        price: 499.99,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        discount: 5,
        images: [{
            url: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695457767_2085607.jpg?format=webp&w=480&dpr=1.3",
            id: "656f713701d951f4682f96e5"
        },
        {
            url: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1645591799_3821086.jpg?format=webp&w=480&dpr=1.3",
            id: "656f713701d951f4682f96e6"
        }, {
            url: "https://images.bewakoof.com/t640/men-s-blue-mind-hunter-graphic-printed-oversized-t-shirt-628033-1701081976-1.jpg",
            id: "unique-id-13"
        },
        {
            url: "https://images.bewakoof.com/t640/men-s-black-mind-hunter-graphic-printed-oversized-t-shirt-628041-1701081432-1.jpg",
            id: "unique-id-14"
        }],
        colors: ["Black", "White", "Blue"],
        size: ["S", "M", "L"]
    }, {
        name: "Fancy Shirt",
        category: "Clothing",
        brand: "Fashionista",
        price: 889.99,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        discount: 10,
        images: [
            {
                url: "https://images.bewakoof.com/t320/boys-yellow-iron-man-graphic-printed-t-shirt-602283-1687869232-1.jpg",
                id: "unique-id-1"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-blue-legendary-sanin-graphic-printed-oversized-t-shirt-628713-1702015800-1.jpg",
                id: "unique-id-2"
            }
        ],
        colors: ["Red", "Green", "Yellow"],
        size: ["M", "L", "XL"]
    },
    {
        name: "Elegant Dress",
        category: "Clothing",
        brand: "Chic Couture",
        price: 1149.99,
        discount: 8,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-s-blue-legendary-sanin-graphic-printed-oversized-t-shirt-628713-1702015800-1.jpg",
                id: "unique-id-3"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-black-loki-grunge-graphic-printed-t-shirt-628238-1701260205-1.jpg",
                id: "unique-id-4"
            }
        ],
        colors: ["Blue", "Pink", "Black"],
        size: ["S", "M", "L"]
    }, {
        name: "Adidas Running Shoes",
        category: "Footwear",
        brand: "Adidas",
        price: 129.99,
        discount: 15,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-s-black-loki-grunge-graphic-printed-t-shirt-628238-1701260205-1.jpg",
                id: "unique-id-5"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-brown-deadpool-reloaded-graphic-printed-oversized-t-shirt-628046-1701081717-1.jpg",
                id: "unique-id-6"
            }
        ],
        colors: ["Blue", "Black", "White"],
        size: ["US 7", "US 8", "US 9"]
    },
    {
        name: "Nike Dri-FIT T-Shirt",
        category: "Clothing",
        brand: "Nike",
        price: 49.99,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        discount: 10,
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-black-beast-within-graphic-printed-oversized-t-shirt-628234-1701260274-1.jpg",
                id: "unique-id-7"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-brown-deadpool-reloaded-graphic-printed-oversized-t-shirt-628046-1701081717-1.jpg",
                id: "unique-id-8"
            }
        ],
        colors: ["Red", "Gray", "Black"],
        size: ["S", "M", "L"]
    }, {
        name: "Adidas Ultraboost Sneakers",
        category: "Footwear",
        brand: "Adidas",
        price: 179.99,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        discount: 10,
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-s-brown-deadpool-reloaded-graphic-printed-oversized-t-shirt-628046-1701081717-1.jpg",
                id: "unique-id-9"
            },
            {
                url: "https://images.bewakoof.com/t640/men-black-beast-within-graphic-printed-oversized-t-shirt-628234-1701260274-1.jpg"
            }
        ],
        colors: ["Black", "Gray", "Red"],
        size: ["US 8", "US 9", "US 10"]
    },
    {
        name: "Nike Air Max Running Shoes",
        category: "Footwear",
        brand: "Nike",
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        price: 139.99,
        discount: 8,
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-s-black-mind-hunter-graphic-printed-oversized-t-shirt-628041-1701081432-1.jpg",
                id: "unique-id-11"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-blue-mind-hunter-graphic-printed-oversized-t-shirt-628033-1701081976-1.jpg",
                id: "unique-id-12"
            }
        ],
        colors: ["Blue", "White", "Orange"],
        size: ["US 7", "US 8", "US 9"]
    },
    {
        name: "Puma Classic Hoodie",
        category: "Clothing",
        brand: "Puma",
        price: 69.99,
        stock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        discount: 15,
        images: [
            {
                url: "https://images.bewakoof.com/t640/men-s-blue-mind-hunter-graphic-printed-oversized-t-shirt-628033-1701081976-1.jpg",
                id: "unique-id-13"
            },
            {
                url: "https://images.bewakoof.com/t640/men-s-black-mind-hunter-graphic-printed-oversized-t-shirt-628041-1701081432-1.jpg",
                id: "unique-id-14"
            }
        ],
        colors: ["Gray", "Black", "Green"],
        size: ["S", "M", "L"]
    },];
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
                "size": null,
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
                "size": null,
                "FinalPrice": 1998,
                "__v": 0
            }
        ]
    }
    const sampleCartItem = [
        {
            "_id": "6572ed06375abf5f940ee69f",
            "quantity": 3,
            "FinalPrice": 888,
        },
        {
            "_id": "6572ed06375abf5f940ee6aa",
            "quantity": 2,
            "FinalPrice": 567,
        },
        {
            "_id": "6572ed06375abf5f940ee6bb",
            "quantity": 1,
            "FinalPrice": 345,
        }
    ];

    const [productQuantities, setProductQuantities] = useState({});

    const handleChange = (productId, e) => {
        const newQuantities = {
            ...productQuantities,
            [productId]: { ...productQuantities[productId], [e.target.name]: e.target.value, },
        };
        setProductQuantities(newQuantities);
        console.log(productQuantities)
    };
    // const [ProductInfo, setInfo] = useState({ size: 'S', quantity: 1 })

    // const handleChange = async ({productId,e}) => {
    //     setInfo((prev) => ({
    //         ...prev,
    //         [productId]: {
    //           ...prev[productId],
    //           quantity: e.target.value
    //         }
    //       }));
    // };
    // console.log(ProductInfo);
    return (
        <div className='relative w-full'>
        <div className='h-4 bg-red-700 w-full absolute shadow-red-300'></div>
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
                        <div className='flex p-6 justify-between items-center border-[1px] border-gray-300'>
                            <span>Deliverd to:761105</span>
                            <button className='text-red-400 h-10 w-max p-2 font-mono  border-[1px] border-red-400 shadow-md'>CHECK PINCODE</button>
                        </div>
                        <div className='p-3'>
                            {products.map((pro, i) => (
                                <div key={i} className='p-2 flex m-3 w-full h-[18rem] shadow-lg border-[1px] border-gray-300'>
                                    {/* <div className='flex-[25%] relative'>
                                        <img className='w-[200px] h-[200px] rounded-md' src={pro.images[0].url} alt='img' />
                                        <span className={`z-1 text-xs border-1 border-gray-400 bg-[#000000a9]
                       
                         text-[white] p-1 absolute top-2 right-1 rounded-md shadow-md `}>{pro.brand}</span>
                                    </div> */}
                                    <div className='flex-[75%] m-2 flex-col justify-between flex'>
                                        <div >
                                            <div className='flex justify-between '>
                                                <span className=' font-bold text-base capitalize'> {pro.brand}</span>
                                                {/* <span className=' font-bold'>Rs.{pro.price}</span> */}
                                            </div>
                                            <span className='text-gray-500 text-base'>{pro.category}</span>
                                            <div>
                                                <select className=' outline-none bodrder-[1px] p-2 h-12 w-15  border-2 border-orange-400 
                                            m-2'  name='size' onChange={(e) => handleChange(pro.images[0].id, e)}
                                                    value={productQuantities[pro.images[0].id]?.size || 'M'}>
                                                    {pro.size.map((sizes, index) => (
                                                        <option key={index} value={sizes} >{sizes}</option>
                                                    ))}

                                                </select>
                                                <select className=' outline-none bodrder-[1px] p-2 h-12 w-15  border-2 border-orange-400 
                                            m-2' name='quantity' onChange={(e) => handleChange(pro.images[0].id, e)}
                                                    value={productQuantities[pro.images[0].id]?.quantity || 1}>
                                                    {pro.stock.map((stocks, index) => (
                                                        <option key={index} value={stocks} >{stocks}</option>
                                                    ))}

                                                </select>
                                            </div>

                                            <span name='FinalPrice' className='text-sm font-bold'>Total Rs. {(
                                                pro.price *
                                                (productQuantities[pro.images[0].id]?.quantity || 1) - // Use product quantity from state
                                                pro.price *
                                                (productQuantities[pro.images[0].id]?.quantity || 1) *
                                                (pro.discount / 100)
                                            ).toFixed(2)}
                                                <del className='font-thin ml-1 text-gray-600'>
                                                     {(pro.price * (productQuantities[pro.images[0].id]?.quantity || 1)).toFixed(2)}
                                                </del> <span className='text-red-400'> {pro.discount}% OFF</span>
                                            </span>
                                        </div>
                                        <div className=' justify-start flex flex-row'>
                                            <button className='border-[1px] border-gray-200 shadow-md  p-2 font-semibold text-sm text-gray-400'>REMOVE</button>
                                            <button className=' mx-2 border-[1px] border-gray-200 shadow-md p-2 font-semibold text-sm text-gray-400'>MOVE TO WISHLIST</button>
                                        </div>

                                    </div>
                                    <div className='flex-[25%] relative flex-col flex gap-3'>
                                        <img className='w-[200px] h-[200px] rounded-md' src={pro.images[0].url} alt='img' />
                                        <span className={`z-1 text-xs border-1 border-gray-400 bg-[#000000a9]
                       
                         text-[white] p-1 absolute top-2 right-1 rounded-md shadow-md `}>{pro.brand}</span>
                          <span className='p-4 font-bold'>Rs.{pro.price}</span>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='flex-[45%] w-full flex  items-center flex-col relative  '>
                        <div className='flex justify-center items-center bg-[#117a7a] text-white font-bold w-[65%] m-6 p-3 h-max'>
                            <span>Save an additional amount on this order</span>
                        </div>
                        <div className='flex justify-center items-center bg-[#f1f4f4] text-gray-700 font-bold w-[65%] m-3 p-3 h-max'>
                            <img className='w-[15px] h-[15px]' src='https://images.bewakoof.com/web/Red-truck.png' alt='trucj' />
                            <span>Yay! You get FREE delivery on this order</span>
                        </div>
                        <div className='m-5  border-[1px] border-gray-300 w-[65%] flex flex-col '>
                            <div className='w-full shadow-sm bg-gray-200 font-semibold p-3 flex border-b-[1px] border-gray-300 justify-center items-center'>
                                <span  >
                                    PRICE SUMMARY
                                </span>
                            </div>

                            <div className='flex  flex-col w-full '>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Total MRP  </span>
                                    <span>₹1299</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Discount MRP  </span>
                                    <span >₹1299</span>
                                </div>
                                <div className='flex p-3 justify-between  border-b-[1px] border-gray-300'>
                                    <span className='text-gray-500'>Delivery Fee </span>
                                    <span className='text-green-700 '>FREE</span>
                                </div>
                                <div className='flex p-2 justify-between  border-b-[1px] border-gray-300'>
                                    <span>Subtotal </span>
                                    <span className='font-bold text-lg'>₹{carts.cartitems.reduce((acc,productitm)=>acc+productitm.FinalPrice,0)}</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[65%] p-2 flex flex-col  border-[1px] border-gray-300'>
                        <div className='flex justify-between m-3'>
                            <span>
                                Total ₹ 1248
                            </span>
                            <button className='p-3 h-max w-max font-bold text-white rounded-xl bg-red-500'>ADD ADDRESS</button>
                            </div>
                            <div className='flex justify-between'>
                                <img className='w-12 h-12' src='https://images.bewakoof.com/web/cart-badge-trust.svg' alt='img'/>
                                <img className='w-12 h-12' src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='img'/>
                                <img  className='w-12 h-12' src='https://images.bewakoof.com/web/quality-check.svg' alt='img'/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
