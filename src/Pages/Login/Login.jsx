import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.From?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
      }, [])
      const handleReloadCaptcha = () => {
        loadCaptchaEnginge(6); // reloads the captcha
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form?.email?.value;
        const password = form?.password?.value;
        const user_captcha_value = captchaRef.current.value;
    
        // Validate captcha first
        if (validateCaptcha(user_captcha_value)) {
            // console.log('Captcha validated successfully');
            
            // Proceed with Firebase sign-in if captcha is valid
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Login Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    console.error("Login failed:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: error.message
                    });
                });
        } else {
            console.log('Captcha validation failed');
            Swal.fire({
                icon: 'error',
                title: 'Captcha Validation Failed',
                text: 'Please complete the captcha correctly.'
            });
        }
    };



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                // navigate(from, { replace: true });
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <section className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>QuickFix | Sign in</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row shadow-xl hover:shadow-lg">
                {/* login div  */}
                <div className="lg:flex-1 p-1 order-2 lg:order-1 bg-white w-96">
                    <h2 className="text-center text-5xl font-bold pt-10">Sign in</h2>
                    <SocialLogin />
                    <p className="text-zinc-600 text-center pt-2">or use your account</p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input bg-slate-100" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input bg-slate-100 w-full" required />
                                <button type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                                >{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplateNoReload />
                                <FiRefreshCw onClick={handleReloadCaptcha} className="cursor-pointer ml-2 text-lg" />
                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder="Enter Captcha" className="input bg-slate-100" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control my-6">
                            <input
                                className="btn bg-loginOrangeColor text-white font-bold w-3/5 px-2 ml-16 rounded-3xl border-none shadow-2xl hover:shadow-xl hover:bg-black"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
                {/* right div  */}
                <div id='changed-item-vertically' className="lg:flex-1 px-5 order-1 lg:order-2 bg-gradient-to-tr from-[#FF416C] to-[#ff2b2b] text-white text-center w-96 items-center justify-center">
                    <h2 className="items-center text-5xl text-center font-bold pt-8">Hello Users!</h2>
                    <p className="my-4">Exclusive discount for new members only, join before it's too late!</p>
                    <NavLink to="/signup">
                        <button className="btn bg-transparent border-white text-white font-bold w-40 my-6 rounded-3xl shadow-2xl hover:bg-black hover:border-hidden">SIGN UP</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Login;