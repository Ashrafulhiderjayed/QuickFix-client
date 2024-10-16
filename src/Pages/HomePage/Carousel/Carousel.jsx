import React, { useRef } from 'react';
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
import './Carousel.css';

const Carousel = () => {
  const progressCircle = useRef(null); // Ref for circle
  const progressContent = useRef(null); // Ref for text inside progress

  // Handle progress animation for Swiper autoplay
  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.strokeDashoffset = 125.6 * (1 - progress); // Adjust stroke offset
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`; // Show time remaining
    }
  };

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
      loop={true}
      onAutoplayTimeLeft={onAutoplayTimeLeft} // Handle progress
      className="w-full h-[600px] rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ps-4 flex items-center justify-start bg-gradient-to-r from-black/90 via-black/70 to-transparent">
          <div className='max-w-screen-2xl mx-auto'>
            <div className="space-y-8 text-white flex-col text-start w-1/2 py-10">
              <Title text={slide.span} className="text-xl font-semibold text-mainColor" />
              <h2 className="text-5xl font-bold leading-tight">{slide.h2}</h2>
              <button className="btn btn-lg bg-mainColor hover:bg-mainColor/80 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105">
                {slide.button}
              </button>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Circular Progress Indicator */}
      <div className="autoplay-progress absolute bottom-4 right-4 flex flex-col items-center">
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle
            ref={progressCircle}
            cx="24"
            cy="24"
            r="20"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="125.6"
            strokeDashoffset="125.6"
          />
        </svg>
        <span ref={progressContent} className="text-white mt-1 text-sm"></span>
      </div>
    </Swiper>
  );
};

export default Carousel;
