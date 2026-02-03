import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { TfiEmail } from "react-icons/tfi";
import { BiMenu } from "react-icons/bi";

const FilterPage = () => {
  const { data, loading } = useFetch({ url: "products", key: ["products"] });
  const products = data;

  const categories = products?.map((el) => el.category) || [];
  const allCategories = Array.from(new Set(categories));
  const [categoryValue, setCategoryValue] = useState("all");
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <section className="relative">
        <div className="container mx-auto flex flex-wrap gap-5 max-w-[1440px] w-full pb-[60px] px-4">
          <button
            onClick={() => setOpenFilter(true)}
            className="lg:hidden fixed top-15 duration-500  z-50 p-4"
          >
            <BiMenu size={20} />
          </button>

          {openFilter && (
            <div
              onClick={() => setOpenFilter(false)}
              className="fixed inset-0 duration-500 bg-black/40 z-40 lg:hidden"
            />
          )}
          <aside className="hidden fixed lg:block w-[300px] flex-shrink-0 h-[350px] border-[2px] p-5 border-[#0000001A] rounded-[20px]">
            <h1 className="text-[24px] font-bold text-center p-5">Filters</h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 cursor-pointer text-[18px] uppercase text-[#00000099]">
                <input
                  onClick={(e) => setCategoryValue(e.target.value)}
                  className="cursor-pointer w-[18px] h-[18px]"
                  name="category"
                  id={"all"}
                  value={"all"}
                  type="radio"
                  defaultChecked
                />
                <label className="cursor-pointer" htmlFor={"all"}>
                  All
                </label>
              </li>
              {allCategories?.map((el) => (
                <li
                  key={el}
                  className="flex items-center gap-2 cursor-pointer text-[18px] uppercase text-[#00000099]"
                >
                  <input
                    onClick={(e) => setCategoryValue(e.target.value)}
                    className="cursor-pointer w-[18px] h-[18px]"
                    name="category"
                    id={el}
                    value={el}
                    type="radio"
                  />
                  <label className="cursor-pointer" htmlFor={el}>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </aside>
          <aside
            className={`
        fixed top-0 left-0 h-full w-[300px] bg-white border-r p-5 z-50
        transform  duration-500 lg:hidden
        ${openFilter ? "translate-x-0" : "-translate-x-full"}
      `}
          >
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-[22px] font-bold">Filters</h1>
              <button
                onClick={() => setOpenFilter(false)}
                className="text-2xl duration-500"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 cursor-pointer text-[18px] uppercase text-[#00000099]">
                <input
                  onClick={(e) => {
                    setCategoryValue(e.target.value);
                    setOpenFilter(false);
                  }}
                  className="cursor-pointer w-[18px] h-[18px]"
                  name="category"
                  id="all_mobile"
                  value="all"
                  type="radio"
                  defaultChecked
                />
                <label className="cursor-pointer" htmlFor="all_mobile">
                  All
                </label>
              </li>
              {allCategories?.map((el) => (
                <li
                  key={el}
                  className="flex items-center gap-2 cursor-pointer text-[18px] uppercase text-[#00000099]"
                >
                  <input
                    onClick={(e) => {
                      setCategoryValue(e.target.value);
                      setOpenFilter(false);
                    }}
                    className="cursor-pointer w-[18px] h-[18px]"
                    name="category"
                    id={`mobile_${el}`}
                    value={el}
                    type="radio"
                  />
                  <label className="cursor-pointer" htmlFor={`mobile_${el}`}>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </aside>
          <div className="grid lg:grid-cols-3 grid-cols-2 xl:grid-cols-4 gap-5 flex-1 lg:pl-[330px]">
            {categoryValue === "all"
              ? products?.map((el) => <ProductCard key={el.id} {...el} />)
              : products
                  ?.filter((item) => item.category === categoryValue)
                  ?.map((el) => <ProductCard key={el.id} {...el} />)}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto max-w-[1440px] w-full relative py-[60px] max-[600px]:px-3">
          <div
            className="
            relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:-bottom-[100px]
            bg-black rounded-2xl p-6 sm:p-10
            flex items-center justify-between max-[600px]:flex-col  gap-6 sm:gap-10
            w-full 
          "
          >
            <div className="text-center sm:text-left">
              <h1 className="text-[40px] max-[900px]:text-[32px] max-[600px]:text-[24px] font-bold text-white leading-[38px] sm:leading-[45px]">
                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
              </h1>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-3">
              <span
                className="
                flex items-center gap-2 w-full sm:w-[349px] h-[48px]
                text-gray-400 bg-white pl-4 sm:pl-6 rounded-[62px]
              "
              >
                <TfiEmail className="text-gray-400" />
                <input
                  className="outline-none text-gray-500 w-full bg-transparent"
                  type="email"
                  placeholder="Enter your email address"
                />
              </span>

              <button
                className="
                w-full sm:w-[349px] h-[48px] font-bold max-[600px]:text-[16px] text-[20px] 
                bg-white rounded-[62px]"
              >
                Subscribe to NewsLetter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPage;
