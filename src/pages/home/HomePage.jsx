import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { IoIosStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import TestSwiper from "../../components/TestSwiper";

const HomePage = () => {
  const getData = async () => {
    let res = axios.get(`https://fakestoreapi.com/products`);
    return res;
  };
  const { data, loading } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });
  const products = data?.data;
  const categories = products?.map((el) => el.category);

  const allCatgeories = [...new Set(categories)];
  return (
    <>
      <section className="relative bg-[#F2F0F1]">
        <div className="container mx-auto max-w-[1440px] pt-[90px] flex items-center justify-between max-[600px]:flex-col px-5 pb-20">
          <div>
            <h1 className="text-[48px] font-bold leading-[60px]">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-[#00000099] pt-4">
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
            <button className="w-[210px] h-[52px] rounded-[62px] bg-black text-white mt-5">
              Shop Now
            </button>

            <div className="flex gap-10 mt-10">
              <div>
                <h1 className="text-2xl font-bold">200+</h1>
                <p>International Brands</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">2,000+</h1>
                <p>High-Quality Products</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">30,000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <img
            className="w-[800px] h-[980px] object-cover"
            src="/hero.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="bg-black ">
        <div className="container mx-auto w-full max-w-[1440px] px-5 ">
          <div className="py-8 flex items-center justify-between max-[600px]:flex-col gap-10 mx-auto">
            <img className="w-[166px] h-[33px]" src="/versace.png" />
            <img className="w-[166px] h-[33px]" src="/zara.png" />
            <img className="w-[166px] h-[33px]" src="/gucci.png" />
            <img className="w-[166px] h-[33px]" src="/prada.png" />
            <img className="w-[166px] h-[33px]" src="/calvinklein.png" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-[1440px] w-full py-10">
          <div>
            {allCatgeories?.map((el) => {
              return (
                <div>
                  <h1 className="text-[48px] font-bold uppercase text-center pt-10">
                    {el}
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                    {products
                      ?.filter((product) => product.category === el)
                      .slice(0, 4)
                      ?.map((product) => (
                        <ProductCard {...product} />
                      ))}
                  </div>
                  <button className="max-w-[218px] h-[52px] w-full rounded-[62px] border-[2px] border-[#0000001A] cursor-pointer text-[18px] font-bold mx-auto block mt-10 ">
                    View All
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-[1440px] w-full bg-[#F0F0F0] rounded-2xl pb-20 my-[90px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold uppercase text-center pt-10">
            BROWSE BY DRESS STYLE
          </h1>

          <div className="pt-10 lg:pt-20 px-2 sm:px-6">
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Casual */}
              <div
                className="flex bg-white rounded-xl shadow-md overflow-hidden relative 
                        w-full sm:w-[450px] h-[260px] sm:h-[300px]"
              >
                <h3 className="text-[24px] sm:text-[32px] absolute top-6 left-6 font-bold">
                  Casual
                </h3>
                <img
                  src="rasm1.png"
                  alt="Casual"
                  className="absolute right-[-60px] sm:right-[-40px] bottom-[-60px]
                       w-[300px] sm:w-[400px] object-cover"
                />
              </div>

              {/* Formal */}
              <div
                className="flex bg-white rounded-xl shadow-md overflow-hidden relative 
                        w-full lg:w-[650px] h-[260px] sm:h-[300px]"
              >
                <h3 className="text-[24px] sm:text-[32px] absolute top-6 left-6 font-bold">
                  Formal
                </h3>
                <img
                  src="rasm2.png"
                  alt="Formal"
                  className="absolute right-[-60px] sm:right-[-40px] bottom-[-60px]
                       w-[300px] sm:w-[400px] object-cover"
                />
              </div>

              {/* Party */}
              <div
                className="flex bg-white rounded-xl shadow-md overflow-hidden relative 
                        w-full lg:w-[650px] h-[260px] sm:h-[300px]"
              >
                <h3 className="text-[24px] sm:text-[32px] absolute top-6 left-6 font-bold">
                  Party
                </h3>
                <img
                  src="rasm3.png"
                  alt="Party"
                  className="absolute right-[-60px] sm:right-[-40px] bottom-[-60px]
                       w-[300px] sm:w-[400px] object-cover"
                />
              </div>

              {/* Gym */}
              <div
                className="flex bg-white rounded-xl shadow-md overflow-hidden relative 
                        w-full sm:w-[450px] h-[260px] sm:h-[300px]"
              >
                <h3 className="text-[24px] sm:text-[32px] absolute top-6 left-6 font-bold">
                  Gym
                </h3>
                <img
                  src="rasm4.png"
                  alt="Gym"
                  className="absolute right-[-60px] sm:right-[-40px] bottom-[-60px]
                       w-[300px] sm:w-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="container mx-auto  pb-[60px] max-w-[1440px] w-full">
          <h1 className="md:text-[48px] font-bold text-center">
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-[600px]:ml-5 mt-10">
            <div className="w-[450px] h-[230px] border-[2px] border-[#0000001A] rounded-[20px] ">
              <span className="flex items-center gap-2 text-yellow-500 mt-8 ml-5">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <h1 className="flex items-center gap-2  mt-3 ml-5">
                Sarah M.{" "}
                <span className=" rounded-full flex items-center justify-center text-white  w-5 h-5 bg-[green]">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] mt-3 ml-5">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual <br /> wear to elegant
                dresses, every piece I've bought <br /> has exceeded my
                expectations.”
              </p>
            </div>
            <div className="w-[450px] h-[230px] border-[2px] border-[#0000001A] rounded-[20px] ">
              <span className="flex items-center gap-2 text-yellow-500 mt-8 ml-5">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <h1 className="flex items-center gap-2  mt-3 ml-5">
                Alex K.{" "}
                <span className=" rounded-full flex items-center justify-center text-white  w-5 h-5 bg-[green]">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] mt-3 ml-5">
                "Finding clothes that align with my personal style used <br />{" "}
                to be a challenge until I discovered Shop.co. The range of
                options they offer is truly remarkable, catering to <br /> a
                variety of tastes and occasions.”
              </p>
            </div>
            <div className="w-[450px] h-[230px] border-[2px] border-[#0000001A] rounded-[20px] ">
              <span className="flex items-center gap-2 text-yellow-500 mt-8 ml-5">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </span>
              <h1 className="flex items-center gap-2  mt-3 ml-5">
                James L.{" "}
                <span className=" rounded-full flex items-center justify-center text-white  w-5 h-5 bg-[green]">
                  <TiTick />
                </span>
              </h1>
              <p className="text-[#00000099] mt-3 ml-5">
                "As someone who's always on the lookout forunique <br /> fashion
                pieces, I'm thrilled to have stumbled upon <br /> Shop.co. The
                selection of clothes is not only diverse but <br /> also
                on-point with the latest trends.”
              </p>
            </div>
          </div>
        </div> */}
        <TestSwiper />
      </section>

      <section className="relative py-[60px]">
        <div className="container mx-auto max-w-[1440px] w-full">
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-[100px] 
      bg-black rounded-2xl h-[180px] 
      grid sm:grid-cols-2 gap-10 
      px-10 pt-10 w-full max-w-[1200px]"
          >
            <div>
              <h1 className="text-[40px] font-bold text-white leading-[45px]">
                STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
              </h1>
            </div>

            <div>
              <span
                className="flex items-center gap-2 w-[349px] h-[48px] 
          text-gray-400 bg-white pl-6 rounded-[62px]"
              >
                <TfiEmail />
                <input
                  className="outline-none text-gray-500 w-full"
                  type="email"
                  placeholder="Enter your email address"
                />
              </span>

              <button
                className="w-[349px] h-[48px] font-bold text-[20px] 
          bg-white rounded-[62px] mt-3"
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

export default HomePage;
