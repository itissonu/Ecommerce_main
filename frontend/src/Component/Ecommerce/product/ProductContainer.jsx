import React, { useState } from 'react'
import wishlistimg from '../../../photos/wishlist.png'
import wishlistred from '../../../photos/redwishlist.png'
import CardCarousel from './CardphotoCarousel';
function ProductContainer() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const wishlist = [{
        id: 1,
        name: "Example Product",
        category: "Electronics",
        brand: "Example Brand",
        price: 499.99,
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
        id: 2,
        name: "Fancy Shirt",
        category: "Clothing",
        brand: "Fashionista",
        price: 889.99,
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
    }, {
        id: 4,
        name: "Adidas Running Shoes",
        category: "Footwear",
        brand: "Adidas",
        price: 129.99,
        discount: 15,
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
        id: 5,
        name: "Nike Dri-FIT T-Shirt",
        category: "Clothing",
        brand: "Nike",
        price: 49.99,
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
    },
    {
        id: 7,
        name: "Nike Air Max Running Shoes",
        category: "Footwear",
        brand: "Nike",
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
    }
        ,]
    const products = [{
        id: 1,
        name: "Example Product",
        category: "Electronics",
        brand: "Example Brand",
        price: 499.99,
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
        id: 2,
        name: "Fancy Shirt",
        category: "Clothing",
        brand: "Fashionista",
        price: 889.99,
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
        id: 3,
        name: "Elegant Dress",
        category: "Clothing",
        brand: "Chic Couture",
        price: 1149.99,
        discount: 8,
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
        id: 4,
        name: "Adidas Running Shoes",
        category: "Footwear",
        brand: "Adidas",
        price: 129.99,
        discount: 15,
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
        id: 5,
        name: "Nike Dri-FIT T-Shirt",
        category: "Clothing",
        brand: "Nike",
        price: 49.99,
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
        id: 6,
        name: "Adidas Ultraboost Sneakers",
        category: "Footwear",
        brand: "Adidas",
        price: 179.99,
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
        id: 7,
        name: "Nike Air Max Running Shoes",
        category: "Footwear",
        brand: "Nike",
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
        id: 8,
        name: "Puma Classic Hoodie",
        category: "Clothing",
        brand: "Puma",
        price: 69.99,
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
    },]
    return (
        <div className='w-full h-full flex flex-col '>
            <div className='w-full h-full flex flex-wrap'>
                {products.map((product, id) => (
                    <div onMouseOver={() => setHoveredProduct(id)}
                        onMouseOut={() => setHoveredProduct(null)} className='w-[19rem] h-max  justify-center m-2 shadow-xl items-center flex flex-col rounded-[10px]' key={id} >
                        <div className=' relative  '>
                            {!(hoveredProduct === id) && <span className={`text-xs border-1 border-gray-400 bg-[black]
                       
                         text-[white] p-1 absolute top-2 left-2 shadow-md `}>{product.brand}</span>}
                            {/* <img className='h-72 w-72 rounded-[0.75rem]' src={product.images[0].url} /> */}
                            {(hoveredProduct === id) ? <CardCarousel img={product.images} /> : <img className='h-72 w-72 rounded-[0.50rem]' src={product.images[0].url} />}

                            {(hoveredProduct === id) && <div className='w-full  absolute bottom-[-34px] flex flex-col mt-2 items-center bg-white h-[85px] transition-opacity duration-300 ease-in'>
                                <div className='bg-white flex p-1 items-center justify-center w-[80%] m-1   border-[1px] border-gray-300 rounded-md absolute bottom-2 shadow-lg'>
                                    {(wishlist.filter((wish) => wish.id === product.id).length === 1) ? 
                                        
                                            (<button className='flex h-max '>
                                            <img className='h-8 w-18 mx-1' src={wishlistred} alt='Wishlist Red' />
                                         </button>
                                            ) : (<button className='h-max flex items-center'>
                                            <img className='h-8 w-18 mx-1' src={wishlistimg} alt='Wishlist' /><span className='text-blue-400'>Wishlist</span>
                                            </button>
                                            )}
                                   
                                    {/* <img className='h-8 w-18 mx-1 ' src={wishlist} /> */}
                                    
                                </div>
                                <div className=' flex mt-2 '>
                                    <span className='mx-2 font-thin'>Size</span>
                                    <span className='mx-2  '>{product.size[0]} </span>
                                </div>
                            </div>}
                        </div>
                        <div className='flex flex-col  w-full p-3'>
                            <span className='font-[700] mx-2'>{product.category}</span>
                            <h1 className='font-normal text-base mx-2'>{product.name}</h1>

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