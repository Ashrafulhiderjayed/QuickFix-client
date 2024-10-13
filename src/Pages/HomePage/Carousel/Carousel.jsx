import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '@/assets/swiper/1.avif';
import img2 from '@/assets/swiper/2.avif';
import img3 from '@/assets/swiper/3.avif';

const Carousel = () => {
  const slides = [
    {
      img: img1,
      span: 'Get your car back on the road in no time!',
      h2: 'Expert Repairs. Affordable Rates.',
      button: 'Book an Appointment',
    },
    {
      img: img2,
      span: 'Keep your car in peak condition.',
      h2: 'Professional Service You Can Trust',
      button: 'Explore Services',
    },
    {
      img: img3,
      span: 'Stuck on the road? We’ve got you covered.',
      h2: '24/7 Assistance at Your Service',
      button: 'Contact Us Now',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      // navigation
      loop={true}
      className="w-full h-[400px] rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-transparent p-8">
            <div className="space-y-4 text-white w-1/2">
              <span className="text-lg">{slide.span}</span>
              <h2 className="text-2xl font-bold">{slide.h2}</h2>
              <button className="px-6 py-2 text-sm bg-blue-500 rounded-md hover:bg-blue-600 transition">
                {slide.button}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
