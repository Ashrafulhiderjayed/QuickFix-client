import React from 'react';
import shopCover from '../../assets/shop/shop-cover.webp'
import soundTab from '../../assets/shop/soundTab.avif'
import wheelsTab from '../../assets/shop/wheelsTab.avif'
import featuredTab from '../../assets/shop/featuredTab.avif'
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    return (
        <section className='bg-white'>
            <Helmet>
                <title>QuickFix | Shop</title>
            </Helmet>

            {/* Shop Cover */}
            <div className="hero h-96"
                style={{
                    backgroundImage: `url(${shopCover})`,
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-mono">Products</h1>
                        <p className="mb-5">Home / Products</p>
                    </div>
                </div>
            </div>


            {/* Shop Tab */}
            <div className='flex gap-5 justify-center py-10 bg-white'>
                <div>
                    <img src={soundTab} alt="" className='border-4 border-black h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Sounds</p>
                </div>
                <div>
                    <img src={wheelsTab} alt="" className='border-4 border-black h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Wheels</p>
                </div>
                <div>
                    <img src={featuredTab} alt="" className='border-4 border-black h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Featured</p>
                </div>
            </div>

            {/* Shop Products */}
            <div className='flex gap-5 mx-auto max-w-screen-xl'>
                <div className='h-80 w-1/5 p-5 border-2 rounded'>
                    <h4 className='text-xl font-bold'>Categories</h4>
                    <ul className='list-none pl-5 mt-5'>
                        <li className='flex gap-2 mb-1 pb-2'><input type="checkbox" defaultChecked className="checkbox" />Sound</li>
                        <li className='flex gap-2 mb-1 pb-2'><input type="checkbox" className="checkbox" />Wheels</li>
                        <li className='flex gap-2 mb-1 pb-2'><input type="checkbox" className="checkbox" />Featured</li>
                        <li className='flex gap-2 mb-1 pb-2'><input type="checkbox" className="checkbox" />Sound</li>
                    </ul>
                </div>
                <div className='bg-red-100 h-80 w-4/5'>
                    <div className='text-zinc-400 flex justify-between items-center ps-2 border-2'>
                        <p>Showing 1 to 12 of 37 items</p>
                        <p className='flex items-center gap-2'>Sort by: <select className="select select-success w-28">
                            <option disabled selected>Select Category</option>
                            <option>One Piece</option>
                            <option>Naruto</option>
                            <option>Death Note</option>
                            <option>Attack on Titan</option>
                            <option>Bleach</option>
                            <option>Fullmetal Alchemist</option>
                            <option>Jojo's Bizarre Adventure</option>
                        </select></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;