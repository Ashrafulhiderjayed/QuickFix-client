import { useState } from 'react';
import { IoCartSharp } from "react-icons/io5";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const ShopCard = ({ product }) => {
    const { name, image, price, category, _id } = product;
    const {user} = useAuth();
    const [rating, setRating] = useState(4) // Initial value
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if(user) {
            // Add product to user's cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                category
            }
            axiosSecure.post('/carts', cartItem,)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: "success",
                    title: `${name} has been added to your cart!`,
                  });
                  refetch(); // Fetch updated cart items after adding a product to the cart
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
                    <button onClick={handleAddToCart} className='btn px-20 rounded-full hover:bg-mainColor hover:text-white'> <IoCartSharp /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;