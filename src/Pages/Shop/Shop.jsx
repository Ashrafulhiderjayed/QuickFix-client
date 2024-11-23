import React, { useEffect, useState } from 'react';
import shopCover from '../../assets/shop/shop-cover.webp';
import soundTab from '../../assets/shop/soundTab.avif';
import wheelsTab from '../../assets/shop/wheelsTab.avif';
import featuredTab from '../../assets/shop/featuredTab.avif';
import { Helmet } from 'react-helmet-async';
import ShopCard from './ShopCard';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetch the shop data from JSON file and update the products state when the component mounts
    useEffect(() => {
        fetch('https://quick-fix-server-wine.vercel.app/shop')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleCheckboxChange = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((cat) => cat !== category); // Remove the category
            } else {
                return [...prevCategories, category]; // Add the category
            }
        });
    };

    const filteredProducts = products.filter((item) => {
        if (selectedCategories.length === 0) {
            return true; // Show all products if no category is selected
        }
        return selectedCategories.includes(item.category);
    });

    return (
        <section className="bg-white min-h-screen">
            <Helmet>
                <title>QuickFix | Shop</title>
            </Helmet>

            {/* Shop Cover */}
            <div
                className="hero h-96"
                style={{
                    backgroundImage: `url(${shopCover})`,
                }}
            >
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-mono">Products</h1>
                        <p className="mb-5">Home / Products</p>
                    </div>
                </div>
            </div>

            {/* Shop Tab */}
            <div className="flex gap-5 justify-center py-10 bg-white">
                <div onClick={() => handleCheckboxChange('Sounds')} className="cursor-pointer">
                    <img src={soundTab} alt="" className="border-4 border-black h-52 rounded-full" />
                    <p className="hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono">Sounds</p>
                </div>
                <div onClick={() => handleCheckboxChange('Wheels')} className="cursor-pointer">
                    <img src={wheelsTab} alt="" className="border-4 border-black h-52 rounded-full" />
                    <p className="hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono">Wheels</p>
                </div>
                <div onClick={() => handleCheckboxChange('Featured')} className="cursor-pointer">
                    <img src={featuredTab} alt="" className="border-4 border-black h-52 rounded-full" />
                    <p className="hover:text-mainColor text-center pt-4 text-xl font-semibold font-mono">Featured</p>
                </div>
            </div>

            {/* Shop Products */}
            <div className="flex gap-5 mx-auto max-w-screen-xl">
                <div className="h-80 w-1/5 p-5 border-2 rounded">
                    <h4 className="text-xl font-bold">Categories</h4>
                    <ul className="list-none pl-5 mt-5">
                        <li className="flex gap-2 mb-1 pb-2">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onChange={() => handleCheckboxChange('Sounds')}
                                checked={selectedCategories.includes('Sounds')}
                            />
                            Sound
                        </li>
                        <li className="flex gap-2 mb-1 pb-2">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onChange={() => handleCheckboxChange('Wheels')}
                                checked={selectedCategories.includes('Wheels')}
                            />
                            Wheels
                        </li>
                        <li className="flex gap-2 mb-1 pb-2">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onChange={() => handleCheckboxChange('Featured')}
                                checked={selectedCategories.includes('Featured')}
                            />
                            Featured
                        </li>
                    </ul>
                </div>
                <div className="flex-grow">
                    <div className="text-zinc-400 flex justify-between items-center p-2 border-2">
                        <p>Showing {filteredProducts.length} items</p>
                        <p className="flex items-center gap-2">
                            Sort by:{' '}
                            <select className="select select-success select-sm w-36">
                                <option disabled selected>
                                    Featured
                                </option>
                                <option>Best Selling</option>
                                <option>Alphabetically A-Z</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-10 mt-5">
                        {filteredProducts.map((product, index) => (
                            <ShopCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
