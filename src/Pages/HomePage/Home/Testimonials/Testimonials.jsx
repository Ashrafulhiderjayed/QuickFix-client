import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Title from "../../../../Components/Title/Title";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <div className='text-center mx-auto max-w-screen-xl'>
                <div className='flex justify-center'>
                    <div>
                        <div className='ms-2'>
                            <Title text="What Our Client Say"></Title>
                        </div>
                        <h2 className="text-2xl lg:text-6xl font-bold">TESTIMONIALS</h2>
                    </div>
                </div>
            </div>
            <Swiper
                // navigation={true} 
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper">

                {/* <div className=" max-w-lg bg-yellow-200"> */}
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <RiDoubleQuotesL className="text-6xl text-mainColor" />
                        <div className="flex flex-col items-center max-w-4xl px-10 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl font-semibold font-mono text-orange-400">{review.name}</h3>
                        </div>
                        <RiDoubleQuotesR className="text-6xl text-mainColor" />
                        
                    </SwiperSlide>)
                }
                {/* </div> */}
            </Swiper>
        </section>
    );
};

export default Testimonials;