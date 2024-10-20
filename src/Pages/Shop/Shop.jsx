import React from 'react';
import shopCover from '../../assets/shop/shop-cover.webp'
import soundTab from '../../assets/shop/soundTab.avif'
import wheelsTab from '../../assets/shop/wheelsTab.avif'
import featuredTab from '../../assets/shop/featuredTab.avif'

const Shop = () => {
    return (
        <section>
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
                    <img src={soundTab} alt="" className='border-4 h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Sounds</p>
                </div>
                <div>
                    <img src={wheelsTab} alt="" className='border-4 h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Wheels</p>
                </div>
                <div>
                    <img src={featuredTab} alt="" className='border-4 h-52 rounded-full' />
                    <p className='hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono'>Featured</p>
                </div>
            </div>
        </section>
    );
};

export default Shop;