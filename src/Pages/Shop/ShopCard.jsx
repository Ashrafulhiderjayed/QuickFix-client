import React from 'react';
import { IoCartSharp } from "react-icons/io5";

const ShopCard = ({ product }) => {
    const { name, image, price, rating, category } = product;
    return (
        <div className="card bg-base-100 border-2">
            <figure>
                <img src={image} alt="Shoes" className='h-50 w-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <button className='btn px-20 rounded-full hover:bg-mainColor hover:text-white'> <IoCartSharp /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;