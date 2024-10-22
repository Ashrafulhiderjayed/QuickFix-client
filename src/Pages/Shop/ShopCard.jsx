import React, { useState } from 'react';
import { IoCartSharp } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ShopCard = ({ product }) => {
    const { name, image, price, category } = product;
    const [rating, setRating] = useState(4) // Initial value
    return (
        <div className="card bg-base-100 border-2">
            <figure>
                <img src={image} alt="Shoes" className='h-50 w-full' />
            </figure>
            <div className="card-body">
            <div className="text-right"><p className='badge badge-secondary'>NEW</p></div>
                <Rating style={{ maxWidth: 120, height: '15px' }} value={rating} onChange={setRating} />
                <h2 className="card-title font-mono line-clamp-2">
                    {name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className='text-red-500 font-semibold text-xl'>${price}</p>
                <div className="card-actions justify-center">
                    <button className='btn px-20 rounded-full hover:bg-mainColor hover:text-white'> <IoCartSharp /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;