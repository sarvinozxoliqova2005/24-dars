import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const { data, loading } = useFetch({ url: "products", key: ["products"] });
  const product = data;
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white fixed z-10 top-0 w-full">
      <div className="mx-auto container pt-6 pb-4 px-4 max-w-[1440px] w-full">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-[32px] max-[600px]:text-[22px] font-bold"
          >
            SHOP.CO
          </Link>
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

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:flex items-center gap-3 w-[577px] max-[600px]:w-[250px] lg:w-[577px] h-[48px] rounded-[62px] bg-[#F0F0F0] px-5 " >
              <FaSearch className="text-gray-500" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                value={search}
                placeholder="Search for products..."
                className="w-full h-full bg-transparent outline-none text-black"
              />

              {search !== "" && (
                <div className="absolute top-[60px] left-0 w-full max-h-[350px] overflow-auto bg-white shadow-2xl shadow-gray-500 rounded-2xl p-5 flex flex-col gap-2 z-50 cursor-pointer">
                  {product?.filter((item) =>
                    item?.title?.toLowerCase().includes(search?.toLowerCase()),
                  )?.length > 0 ? (
                    product
                      ?.filter((item) =>
                        item?.title
                          ?.toLowerCase()
                          .includes(search?.toLowerCase()),
                      )
                      ?.map((el) => (
                        <Link
                          key={el.id}
                          onClick={() => setSearch("")}
                          to={`/products/${el.id}`}
                          className="flex items-center gap-4 p-3 border-[2px] border-gray-200 rounded-2xl hover:bg-gray-100"
                        >
                          <img
                            className="w-[70px] h-[70px] object-contain"
                            src={el.image}
                            alt={el.title}
                          />
                          <div className="overflow-hidden">
                            <h1 className="line-clamp-1 font-mono">
                              {el.title}
                            </h1>
                            <p className="line-clamp-2 text-gray-400 font-light">
                              {el.description}
                            </p>
                          </div>
                        </Link>
                      ))
                  ) : (
                    <div className="text-center text-gray-400 p-4">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="sm:hidden  cursor-pointer">
              <FaSearch className="text-[26px] text-gray-700" />
            </div>

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
