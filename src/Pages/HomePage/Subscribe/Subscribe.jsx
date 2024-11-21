import React from 'react';
import Title from '../../../Components/Title/Title';
import { MdChevronRight } from "react-icons/md";

const Subscribe = () => {
    return (
        <section className='bg-slate-100 py-5'>
            <div className='text-center flex-col mx-auto max-w-7xl'>
            <div className='text-center mx-auto max-w-screen-xl'>
                <div className='flex justify-center'>
                    <div>
                        <div className='ms-2'>
                            <Title text="OUR NEWS"></Title>
                        </div>
                        <h3 className='font-semibold mt-2'>SIGN UP FOR LATEST NEWS</h3>
                    </div>
                </div>
                <p className='text-zinc-400 mb-12'>Subscribe to our email list and stay up-to-date with all our anwesome releases and latest updates.</p>
                <div className="relative w-full max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered rounded-3xl w-full"
                    />
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 p-2 rounded-full">
                        <MdChevronRight className="text-white" size={25} />
                    </button>
                </div>

            </div>

        </div>
        </section>
    );
};

export default Subscribe;