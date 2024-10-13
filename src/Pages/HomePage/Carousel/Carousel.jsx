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
import img4 from '@/assets/swiper/4.avif';
import img5 from '@/assets/swiper/5.avif';
import img6 from '@/assets/swiper/6.jpg';
import img7 from '@/assets/swiper/7.jpeg';
import Title from '../../Shared/Title/Title';

const Carousel = () => {
  const slides = [
    {
      img: img1,
      span: 'Expert repairs, fast turnaround.',
      h2: 'Get Your Vehicle Back on the Road Quickly with Our Professional Repair Services',
      button: 'Book Now',
    },
    {
      img: img2,
      span: 'Keep your car in peak condition.',
      h2: 'Regular Maintenance: The Key to Longevity and Performance for Your Vehicle',
      button: 'Schedule Service',
    },
    {
      img: img3,
      span: '24/7 roadside assistance.',
      h2: 'Stuck on the Road? Our Emergency Team is Always Ready to Help You',
      button: 'Call Now',
    },
    {
      img: img4,
      span: 'State-of-the-art diagnostics.',
      h2: 'Cutting-Edge Technology for Precise Problem Identification and Efficient Repairs',
      button: 'Learn More',
    },
    {
      img: img5,
      span: 'Quality parts, lasting results.',
      h2: 'We Use Only High-Quality, OEM-Approved Parts for All Our Repairs and Replacements',
      button: 'Our Guarantee',
    },
    {
      img: img6,
      span: 'Skilled technicians you can trust.',
      h2: 'Our Certified Mechanics Bring Years of Experience to Every Job, Big or Small',
      button: 'Meet Our Team',
    },
    {
      img: img7,
      span: 'Affordable rates, transparent pricing.',
      h2: 'No Surprises: Get Honest Estimates and Fair Pricing for All Your Car Repair Needs',
      button: 'Get a Quote',
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
      className="w-full h-[600px] rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-black/90 via-black/70 to-transparent">
            <div className="space-y-8 text-white max-w-4xl ps-36 pe-12 py-10">
              <Title text={slide.span} className="text-xl font-semibold text-mainColor" />
              <h2 className="text-5xl font-bold leading-tight">{slide.h2}</h2>
              <button className="btn btn-lg bg-mainColor hover:bg-mainColor/80 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105">
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
