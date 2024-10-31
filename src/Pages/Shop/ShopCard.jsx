import { useState } from 'react';
import { IoCartSharp } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const ShopCard = ({ product }) => {
    const { name, image, price, category, _id } = product;
    const {user} = useAuth();
    const [rating, setRating] = useState(4) // Initial value

    const handleAddToCart = (product) => {
        if(user) {
            // Add product to user's cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem,)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: "success",
                    title: `${name} has been added to your cart!`,
                  });
            })
             .catch(err => {
                 console.error(err);
                 Swal.fire({
                     icon: "error",
                     title: "Oops...",
                     text: "Failed to add product to cart!",
                     footer: '<a href="#">Why do I have this issue?</a>'
                   });
             })
        } else {
            // Redirect to login page
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not Logged in!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    }
    return (
        <div className="card bg-base-100 border-2">
            <figure>
                <img src={image} alt="Shoes" className='h-50 w-full' />
            </figure>
            <div className="card-body">
            <div className="text-right">{ category == 'Featured' ? <p className='badge badge-secondary'>NEW</p> : null}</div>
                <Rating style={{ maxWidth: 120, height: '15px' }} value={rating} onChange={setRating} />
                <h2 className="card-title font-mono line-clamp-2">
                    {name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className='text-red-500 font-semibold text-xl'>${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(product)} className='btn px-20 rounded-full hover:bg-mainColor hover:text-white'> <IoCartSharp /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;