import { FaPhone } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import './TopNav.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const TopNav = () => {
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        console.log("User object:", user);
    }, [user]);

    return (
        <section className="flex justify-end text-white w-full" id="topNav">
            {/* <div className="" > */}
                <h3 className="text-black w-full text-start mt-4 ps-5 font-semibold"> USER: <span className="text-blue-600 font-semibold">{user?.displayName}</span> </h3>
                <div className="gap-2" id="Custom-width">
                    <p className="mt-4 flex items-center p-2 font-bold text-xs hover:text-red-500"><FaPhone className='inline mr-2 text-xs' />CALL US NOW +61-2-123-1234</p>
                    <p className="mt-4 h-4 border-2"></p>
                    <p className="mt-4 flex items-center p-2 font-bold text-xs hover:text-red-500"><PiNewspaperClippingFill className='inline mr-2 text-sm'/><Link to="appointment">APPOINTMENT</Link> </p>
                    <p className="mt-4 h-4 border-2"></p>
                    <p className="mt-4 mr-2 flex items-center p-2 font-bold text-xs hover:text-red-500"><MdPinDrop className='inline mr-2 text-sm' /> FIND US ON MAP </p>
                </div>

            {/* </div> */}
        </section>
    );
};

export default TopNav;