import { TfiEmail } from "react-icons/tfi";
import ProductCard from "../../components/ProductCard";
import TestSwiper from "../../components/TestSwiper";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, loading } = useFetch({ url: "products", key: ["products"] });
  


  const products = Array.isArray(data) ? data : [];

  const categories = products?.map((el) => el.category) || [];
  const allCategories = Array.from(new Set(categories));

  return (
    <>
      <section className="relative bg-[#F2F0F1]">
        <div className="container mx-auto max-w-[1440px] pt-[30px] px-10 flex flex-col lg:flex-row items-center justify-between gap-5 max-[900px]:pt-20 pb-20">
          <div className="flex-1">
            <h1 className="text-[48px] max-[900px]:text-[36px] max-[600px]:text-[28px] font-bold leading-[60px] max-[900px]:leading-[44px] max-[600px]:leading-[36px]">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-[#00000099] pt-4 max-[600px]:text-sm max-[900px]:pt-2">
              Browse through our diverse range of meticulously crafted garments,
              designed <br className="max-[600px]:hidden" /> to bring out your
              individuality and cater to your sense of style.
            </p>
            <button className="w-[210px] h-[52px] max-[600px]:w-[180px] max-[600px]:h-[44px] rounded-[62px] bg-black text-white mt-5">
              Shop Now
            </button>

            <div className="flex flex-wrap max-[600px]:justify-center gap-10 mt-10 max-[600px]:gap-5">
              <div>
                <h1 className="text-2xl font-bold">200+</h1>
                <p className="text-sm">International Brands</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">2,000+</h1>
                <p className="text-sm">High-Quality Products</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">30,000+</h1>
                <p className="text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center max-[900px]:mt-10">
            <img
              className="max-w-[500px] w-full max-[1024px]:w-[600px] max-[768px]:w-[400px] max-[600px]:w-[300px] h-[650px] object-cover rounded-[20px]"
              src="/hero.jpg"
              alt="Hero Image"
            />
          </div>
        </div>

        <div className="w-full bg-black py-8 mt-[-150px] relative z-10">
          <div className="container mx-auto max-w-[1440px] px-5 flex flex-wrap items-center justify-center gap-10 max-[600px]:gap-5">
            <img
              className="w-[166px] h-[33px] max-[1024px]:w-[140px] max-[768px]:w-[120px] max-[600px]:w-[100px]"
              src="/versace.png"
              alt="Versace"
            />
            <img
              className="w-[166px] h-[33px] max-[1024px]:w-[140px] max-[768px]:w-[120px] max-[600px]:w-[100px]"
              src="/zara.png"
              alt="Zara"
            />
            <img
              className="w-[166px] h-[33px] max-[1024px]:w-[140px] max-[768px]:w-[120px] max-[600px]:w-[100px]"
              src="/gucci.png"
              alt="Gucci"
            />
            <img
              className="w-[166px] h-[33px] max-[1024px]:w-[140px] max-[768px]:w-[120px] max-[600px]:w-[100px]"
              src="/prada.png"
              alt="Prada"
            />
            <img
              className="w-[166px] h-[33px] max-[1024px]:w-[140px] max-[768px]:w-[120px] max-[600px]:w-[100px]"
              src="/calvinklein.png"
              alt="Calvin Klein"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-[1440px] w-full py-10">
          <div>
            {allCategories.map((category) => (
              <div key={category}>
                <h1 className="text-[48px] max-[900px]:text-[32px] max-[600px]:text-[24px] font-bold uppercase text-center pt-10">
                  {category}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                  {products
                    ?.filter((product) => product.category === category)
                    ?.slice(0, 4)
                    ?.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                </div>
                <Link
                  to={`/filter`}
                  className="border-[2px] mx-auto block w-[218px] h-[50px] flex items-center justify-center max-[600px]:w-[150px] max-[600px]:h-[35px] max-[600px]:text-[16px] rounded-full border-[#0000001A] text-[18px] font-bold cursor-pointer mt-10"
                >
                  View All
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 max-w-[1440px] w-full bg-[#F0F0F0] rounded-2xl pb-20 my-[90px] ">
          <h1 className="max-[900px]:text-[32px] max-[600px]:text-[24px] text-[40px]  font-bold uppercase text-center pt-10">
            BROWSE BY DRESS STYLE
          </h1>

          <div className="pt-10 lg:pt-20 px-2  ">
            <div className="flex flex-wrap gap-6 justify-center ">
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

export default HomePage;
