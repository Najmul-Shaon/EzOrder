import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { PiBellSimpleRinging } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import userImage from "../assets/user.webp";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Example for notification count and cart count
  const notificationCount = 3;
  const cartCount = 2;

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full fixed backdrop-blur-md backdrop-saturate-150 bg-white/30 text-base shadow-md top-0 z-50">
      <div className="px-4 lg:px-6 font-open-sans">
        <div className="navbar justify-between py-2">
          {/* Navbar Start */}
          <div className="flex items-center gap-1">
            <Link
              to="/"
              className="hidden lg:block text-2xl font-bold tracking-tight relative group"
            >
              <span className="absolute inset-0 blur-lg opacity-30  transition-opacity duration-300"></span>
              <div className="relative text-gray-700 transition-colors duration-300">
                <div className="flex justify-center items-center gap-2">
                  <img className="w-6" src={logoImg} alt="site-logo" />
                  <h3>
                    <span className="text-yellow-600">E</span>z
                    <span className="text-red-600">O</span>rder
                  </h3>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal font-bold text-sm ">
                {links}
              </ul>
            </div>

            <div className=" dropdown lg:hidden">
              <button
                onClick={toggleDropdown}
                className="btn btn-outline btn-primary"
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                  <li className="font-bold italic text-xl my-2 mx-auto tracking-tight relative group">
                    <span className="absolute inset-0 transition-opacity duration-300 mb-5"></span>
                    <Link
                      to={"/"}
                      className="flex gap-0  relative text-gray-500 group-hover:text-white transition-colors duration-300"
                    >
                      <span className="text-yellow-600">B</span>ook
                      <span className="text-red-600">B</span>ridge
                    </Link>
                  </li>
                  <div className="font-semibold font-Inter">{links}</div>
                </ul>
              )}
            </div>
          </div>

          {/* Navbar End */}
          <div className="flex items-center space-x-4 relative">
            <div className="relative">
              {/* Input field */}
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered pl-10 w-24 md:w-auto" // Add padding to the left for the icon
              />

              {/* Search icon */}
              <FaSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18} // Adjust the size as needed
              />
            </div>
            {/* notification icon */}
            <button className="relative text-2xl p-2">
              <PiBellSimpleRinging />
              {/* Notification badge */}
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 text-xs font-semibold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* cart details start */}

            <div className="drawer drawer-end z-20">
              <input
                id="cart-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content h-6">
                {/* Cart Icon as Drawer Trigger */}
                <label
                  htmlFor="cart-drawer"
                  className="relative text-2xl cursor-pointer"
                >
                  <FaCartShopping />
                  {cartCount >= 0 && (
                    <span className="absolute -top-2 left-3 text-xs font-semibold text-white bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="cart-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-96 p-4">
                  {/* <Cart /> */}
                </ul>
              </div>
            </div>

            {/* cart details end */}

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end relative">
              <button
                className="btn btn-ghost btn-circle avatar"
                aria-label="Toggle Profile Dropdown"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-200">
                  <img src={userImage} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
