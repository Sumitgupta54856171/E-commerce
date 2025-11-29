import React from 'react';
// Swiper ke React Components import karein
import { Swiper, SwiperSlide } from 'swiper/react';

// Core Swiper styles import karein
import 'swiper/css';

const MySwiper = () => {
  return (
    // <Swiper> component main container hai
    <Swiper
      // Optional parameters as props
      spaceBetween={50} // Slides ke beech mein space
      slidesPerView={1}  // Ek baar mein kitne slides dikhane hain
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ height: '300px', width: '100%', backgroundColor: '#eee' }} // Kuch basic styling (inline style avoid karein production mein)
    >
      {/* <SwiperSlide> individual slide hai */}
      <SwiperSlide style={{ textAlign: 'center', lineHeight: '300px', fontSize: '20px' }}>
        Slide 1
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: 'center', lineHeight: '300px', fontSize: '20px' }}>
        Slide 2
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: 'center', lineHeight: '300px', fontSize: '20px' }}>
        Slide 3
      </SwiperSlide>
      <SwiperSlide style={{ textAlign: 'center', lineHeight: '300px', fontSize: '20px' }}>
        Slide 4
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;