import React from 'react';
import shopCover from '../../assets/shop/shop-cover.webp'

const Shop = () => {
    return (
        <section>
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
        </section>
    );
};

export default Shop;