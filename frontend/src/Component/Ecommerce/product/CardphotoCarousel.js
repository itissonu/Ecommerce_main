import React, { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const CustomDots = ({ dots, onClick }) => (
//     <ul style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', padding: 0, margin: 0, listStyle: 'none' }}>
//       {dots}
//     </ul>
//   );

const CardCarousel = ({img}) => {
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 2000,
     
    };
   

    return (
        <div className='carousel-container' >
        <Slider {...settings} className='!flex z-0 !flex-row !justify-center !items-center h-[100%] w-[19rem] z-13 ' >
        {img.map((photo,i)=>(
            <div key={photo.id} className='!flex justify-center items-center !flex-row'>
            <img className=' h-[287px] rounded-[0.75rem] w-[287px]' src={photo.url} />{console.log(photo.url)}
            

            </div>
        ))}
           
        </Slider>
        </div>
    );
};

export default CardCarousel;
