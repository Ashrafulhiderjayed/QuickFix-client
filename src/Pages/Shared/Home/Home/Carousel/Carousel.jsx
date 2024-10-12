import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '@/assets/swiper/1.avif'
import img2 from '@/assets/swiper/2.avif'
import img3 from '@/assets/swiper/3.avif'
import img4 from '@/assets/swiper/4.avif'
import img5 from '@/assets/swiper/5.avif'
import img6 from '@/assets/swiper/6.jpg'
import img7 from '@/assets/swiper/7.jpeg';

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      effect="fade" // Adds fade animation
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3s delay
      pagination={{ clickable: true }}
      navigation
      loop={true} // Infinite loop
      style={{ width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden' }}
    >
      {/* Slide 1: Video Slide */}
      <SwiperSlide>
        <img
          src={img1}
          alt="Nature 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>

      {/* Slide 2: Image Slide */}
      <SwiperSlide>
        <img
          src={img2}
          alt="Nature 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>

      {/* Slide 3: Image Slide */}
      <SwiperSlide>
        <img
          src={img3}
          alt="Nature 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>

      {/* Slide 4: Image Slide */}
      <SwiperSlide>
        <img
          src={img4}
          alt="Nature 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      
      {/* Slide 5: Image Slide */}
      <SwiperSlide>
        <img
          src={img5}
          alt="Nature 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      
      {/* Slide 6: Image Slide */}
      <SwiperSlide>
        <img
          src={img6}
          alt="Nature 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      
      {/* Slide 7: Image Slide */}
      <SwiperSlide>
        <img
          src={img7}
          alt="Nature 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
