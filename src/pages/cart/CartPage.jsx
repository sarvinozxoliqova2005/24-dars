import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeFromCart } from "../../../app/cartSlice";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <section className="py-[60px]">
        <h1 className="text-center text-[48px] max-[600px]:text-[32px] font-bold">Your Cart</h1>
       {
        cart?.length > 0 ? (
             <div className="container mx-auto max-w-[1440px] w-full grid lg:grid-cols-2 py-[30px] gap-10">
         
            <div className="flex flex-col gap-6 max-[600px]:px-4">
              {cart.map((el) => (
                <div
                  key={el.id}
                  className="flex items-center justify-between p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl bg-[#F0F0F0]">
                      <img
                        className="w-[80px] h-[80px] object-contain max-[600px]:w-[60px] max-[600px]:h-[60px]"
                        src={el.image}
                        alt={el.title}
                      />
                    </div>

                    <div>
                      <h1 className="text-[18px] max-[600px]:text-[12px] font-medium leading-5 line-clamp-2">
                        {el.title}
                      </h1>
                      <p className="sm:text-[22px] max-[600px]:text-[14px] font-bold mt-3">
                        ${el.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <MdDeleteForever
                      onClick={() => dispatch(removeFromCart(el.id))}
                      className="sm:text-[26px] text-gray-400 hover:text-red-500 cursor-pointer transition duration-500"
                    />

                    <div className="flex items-center gap-2 max-[600px]:gap-4 bg-[#F0F0F0] rounded-[62px] px-2 py-1">
                      <button
                        onClick={() => dispatch(decrease(el.id))}
                        className="sm:w-[44px] sm:h-[44px] rounded-full font-bold text-[20px] cursor-pointer"
                      >
                        −
                      </button>

                      <span className="sm:w-[40px] text-center font-bold text-[18px]">
                        {el.qty}
                      </span>

                      <button
                        onClick={() => dispatch(increase(el.id))}
                        className="sm:w-[44px] sm:h-[44px] rounded-full font-bold sm:text-[20px] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          <div className="max-[600px]:px-5">
            <div className="border-[2px] border-[#0000001A] rounded-2xl px-5 py-5 max-[600px]:px-7 w-full sm:h-[550px]">
              <h1 className="sm:text-[24px] max-[600px]:text-[16px]  text-center font-bold mb-4">
                Order Summary
              </h1>

              <div className="max-h-[300px]  overflow-y-auto">
                {cart.map((el) => (
                  <div
                    key={el.id}
                    className="flex justify-between items-center text-sm mb-2 border-b border-gray-500 py-2"
                  >
                    <span className="sm:text-[18px] max-[600px]:text-[12px]  text-gray-500 font-medium leading-5 line-clamp-2">
                      {el.title}
                      <h1 className="sm:text-center text-gray-400">
                        x{el.qty}
                      </h1>
                    </span>
                    <span className="text-[20px] max-[600px]:text-[12px] font-bold">
                      ${(Number(el.price) * el.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5 border-b pt-3 pb-3">
                <h1 className="sm:text-[20px] font-medium text-gray-500">
                  Total:
                </h1>
                <h2 className="sm:text-[20px] font-bold max-[600px]:text-[14px] ">
                  $
                  {cart
                    .reduce((sum, el) => sum + Number(el.price) * el.qty, 0)
                    .toFixed(2)}
                </h2>
              </div>
              <button
                className="flex items-center justify-center gap-2 bg-black text-white 
               sm:text-[20px] font-bold cursor-pointer w-full h-[50px] 
               rounded-full mt-6"
              >
                Go To Checkout <GrFormNextLink />
              </button>
            </div>
          </div>
        </div>
        ): <div>
              <img
                className="w-[300px] mx-auto max-[600px]:w-[200px]"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png"
                alt=""
              />
              <h1 className="text-[40px] max-[900px]:text-[32px] max-[600px]:text-[28px] font-extrabold text-center mt-3">
                Savatingiz hozircha bosh
              </h1>
              <p className="text-[24px] max-[900px]:text-[20px] max-[600px]:text-[16px] font-extralight text-center mt-3">
                Bosh sahifadan boshlang - kerakli tovarlarni qidiruv orqali <br />
                topishingiz yoki to'plamlarni ko'rishingiz mumkin
              </p>
              <Link
                className="mx-auto block w-[150px] max-[600px]:w-[100px] max-[600px]:h-[40px] max-[600px]:text-[12px] text-[18px] font-mono h-[60px] mt-5 flex items-center justify-center bg-gray-300 rounded-2xl cursor-pointer"
                to={`/`}
              >
                Bosh Sahifa
              </Link>
            </div>
       }
      </section>
    </>
  );
};

export default CartPage;
