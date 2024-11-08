import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaToolbox } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Title from '../../../../Components/Title/Title';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        const imageFile = { image: data.image[0] };
        try {
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (res.data.success) {
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    details: data.details,
                    image: res.data.data.display_url
                };
                
                const menuRes = await axiosSecure.post('/shop', menuItem);
                if (menuRes.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${data.name} added successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                }
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Failed to add item',
                text: 'An error occurred while adding the item.',
                showConfirmButton: true
            });
        }
        setLoading(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className='text-center mx-auto max-w-screen-xl mb-10'>
                <div className='flex justify-center'>
                    <div>
                        <div className='ms-2'>
                            <Title text="Provide items for AutoFix Shop"></Title>
                        </div>
                        <h2 className="text-lg lg:text-3xl font-semibold">Add New Car Service Item</h2>
                        
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto border-t-4 border-[#2a3d66]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Item Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600">Item Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#2a3d66]" />
                    </div>

                    {/* Category & Price */}
                    <div className="flex gap-4">
                        <div className="form-control w-1/2 mb-4">
                            <label className="label">
                                <span className="label-text text-gray-600">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register('category', { required: true })}
                                className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#2a3d66]">
                                <option disabled value="default">Select a category</option>
                                <option value="Engine">Engine</option>
                                <option value="Tires">Tires</option>
                                <option value="Sounds">Sounds</option>
                                <option value="Wheels">Wheels</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Featured">Featured</option>
                            </select>
                        </div>

                        <div className="form-control w-1/2 mb-4">
                            <label className="label">
                                <span className="label-text text-gray-600">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#2a3d66]" />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600">Item Details</span>
                        </label>
                        <textarea
                            {...register('details')}
                            className="textarea textarea-bordered h-24 w-full focus:outline-none focus:ring-2 focus:ring-[#2a3d66]"
                            placeholder="Enter Item Details"></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text text-gray-600">Upload Image*</span>
                        </label>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#2a3d66]" />
                    </div>

                    {/* Submit Button */}
                    <button disabled={loading} className="btn w-full mt-6 flex items-center justify-center gap-2 bg-[#db2411] hover:bg-[#b71f10] text-white">
                         {loading ? <span className="loading loading-spinner">Adding Item</span> : 'Add Item'} <FaToolbox />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
