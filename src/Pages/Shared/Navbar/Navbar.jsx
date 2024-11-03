import React, { useContext } from 'react';
import logo from '../../../assets/logoPng.png';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="shop">Shop</Link></li>
      <li><Link to="/">Appointment</Link></li>
      <li><Link to="/dashboard">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">{cart?.length}+</span>
          <button className="btn btn-sm"><FaShoppingCart /></button>
        </div>
      </Link></li>
    </>
  );

  return (
    <section className='bg-white'>
      <div className="navbar bg-base-100 flex items-center mx-auto max-w-screen-2xl">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="text-xl flex items-center">
            <img className="h-16 w-auto" src={logo} alt="Logo" />
            <p className='font-semibold'>QuickFix Motors</p>
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {navItems}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {
            user ?
              <><button onClick={handleLogout} className='btn btn-error'>Logout</button> </>
              :
              <><Link to="login" className="btn border-b-4 border-b-red-400"><FaUser /> Login</Link></>
          }
        </div>
      </div>
    </section>
  );
};

export default Navbar;
