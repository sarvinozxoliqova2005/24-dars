import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <header className="bg-white fixed z-10 top-0 w-full">
      <div className="mx-auto container pt-6 pb-4 px-4 max-w-[1440px] w-full">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link
            to="/"
            className="text-[32px] max-[600px]:text-[22px] font-bold"
          >
            SHOP.CO
          </Link>

          {/* MENU (desktop only) */}
          <ul className="hidden md:flex items-center gap-5">
            <li className="text-[18px] font-bold">
              <a href="">Shop</a>
            </li>
            <li className="text-[18px] font-bold">
              <a href="">On Sale</a>
            </li>
            <li className="text-[18px] font-bold">
              <a href="">New Arrivals</a>
            </li>
            <li className="text-[18px] font-bold">
              <a href="">Brand</a>
            </li>
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            {/* DESKTOP SEARCH */}
            <div
              className="
            hidden sm:flex
            items-center gap-3
            w-[577px] md:w-[400px] lg:w-[577px]
            h-[48px]
            rounded-[62px]
            bg-[#F0F0F0]
            px-5
          "
            >
              <FaSearch className="text-gray-500" />
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full h-full bg-transparent outline-none text-black"
              />
            </div>

            {/* MOBILE SEARCH ICON */}
            <div className="sm:hidden cursor-pointer">
              <FaSearch className="text-[26px] text-gray-700" />
            </div>

            {/* CART */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-[32px]" />
              <span
                className="
              absolute -top-2 -right-3
              bg-gray-300 text-sm font-bold
              w-6 h-6 flex items-center justify-center
              rounded-full shadow-md
            "
              >
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
