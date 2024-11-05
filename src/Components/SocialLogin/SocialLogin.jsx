import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            });
    };
    return (
        // <div className='p-8'>
        //     <div className='divider'></div>
        //     <div className='text-center'>
        //         <button onClick={handleGoogleSignIn} className="btn btn-neutral">
        //             <FaGoogle className='mr-4'></FaGoogle>
        //             Google
        //         </button>
        //     </div>
        // </div>
        <span className="flex align-middle justify-center mt-7">
            <FaFacebookF className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content" />
            <button><IoLogoGoogleplus onClick={handleGoogleSignIn} className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content mx-4" /></button>
            <FaLinkedinIn className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content" />
        </span>
    );
};

export default SocialLogin;