// const SinglePage = () => {
//   const { id } = useParams();
//   const discount = 40;

//   const { data: singleProduct, loading } = useFetch({
//     url: `products/${id}`,
//     key: ["product", id],
//   });

//   if (loading) return <p>Loading...</p>;

//   const newPrice = singleProduct
//     ? (singleProduct.price - (singleProduct.price * discount) / 100).toFixed(2)
//     : 0;

//   const categories = products.map((el) => el.category) || [];
// const allCategories = Array.from(new Set(categories));

//   return (
//     <>
//       <section>
//         <div className="container mx-auto max-w-[1440px] w-full py-[90px] grid grid-cols-2">
//           <img
//             className="w-[600px] h-[500px] bg-[#F0EEED] p-10 object-contain rounded-[20px]"
//             src={singleProduct?.image}
//             alt={singleProduct?.title}
//           />
//           <div className="flex flex-col gap-5">
//             <h1 className="font-bold text-[48px] leading-15">
//               {singleProduct?.title}
//             </h1>
//             <h2 className="text-[24px] text-[#FFC633] font-bold mt-3">
//               {singleProduct?.rating?.rate}
//             </h2>
//             <span className="flex items-center gap-5">
//               <p className="text-[32px] font-bold mt-3">
//                 ${singleProduct?.price}
//               </p>
//               <p className="text-[32px] text-[#0000004D] font-bold mt-3">
//                 ${newPrice}
//               </p>
//               <p className="text-[24px] text-[red] w-25 h-10 bg-[#FF33331A] rounded-2xl flex items-center justify-center font-bold mt-4">
//                 -{discount}%
//               </p>
//             </span>
//             <p>{singleProduct?.description}</p>
//             <button className="w-full h-[15%] rounded-[62px] text-white bg-black font-bold cursor-pointer text-[24px] mt-4">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </section>

//        <section>
//         <div className="container mx-auto px-5 max-w-[1440px] w-full py-10">
//           <div>
//             {allCategories.map((category) => (
//               <div key={category}>
//                 <h1 className="text-[48px] font-bold uppercase text-center pt-10">
//                   {category}
//                 </h1>

//                 <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
//                   {products
//                     ?.filter((product) => product.category === category)
//                     ?.slice(0, 4)
//                     ?.map((product) => (
//                       <ProductCard key={product.id} {...product} />
//                     ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SinglePage;
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { IoIosStar } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrease, increase } from "../../../app/cartSlice";
import { TfiEmail } from "react-icons/tfi";

const SinglePage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { id } = useParams();
  const discount = 40;

  const { data: singleProduct } = useFetch({
    url: `products/${id}`,
    key: ["product", id],
  });

  const { data: productsData } = useFetch({
    url: "products",
    key: ["products"],
  });

  const products = Array.isArray(productsData) ? productsData : [];
  const categories = products.map((el) => el.category) || [];
  const allCategories = Array.from(new Set(categories));

  const newPrice = singleProduct
    ? (singleProduct.price - (singleProduct.price * discount) / 100).toFixed(2)
    : 0;

  return (
    <>
  <section>
    <div className="container mx-auto max-w-[1440px] w-full py-[90px] grid lg:grid-cols-2 gap-10 px-5 max-[600px]:py-10">
      <img
        className="w-[600px] h-[500px] max-[900px]:w-[400px] max-[900px]:h-[300px] max-[600px]:w-[300px] max-[600px]:h-[200px] max-[600px]:mx-auto bg-[#F0EEED] p-10 object-contain rounded-[20px]"
        src={singleProduct?.image}
        alt={singleProduct?.title}
      />
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-[48px] max-[900px]:text-[32px] max-[900px]:leading-8 max-[600px]:text-[24px] max-[600px]:ml-5 leading-15">
          {singleProduct?.title}
        </h1>
        <h2 className="text-[24px] max-[600px]:text-[18px] max-[600px]:ml-5 text-[#FFC633] font-bold mt-3">
          {singleProduct?.rating?.rate}
        </h2>
        <span className="flex flex-wrap items-center gap-5 max-[600px]:ml-5">
          <p className="text-[32px] max-[600px]:text-[20px] font-bold mt-3">
            ${singleProduct?.price}
          </p>
          <p className="text-[32px] max-[600px]:text-[20px] line-through text-[#0000004D] font-bold mt-3">
            ${newPrice}
          </p>
          <p className="text-[24px] max-[600px]:text-[14px] text-red-500 w-25 h-10 max-[600px]:w-[60px] max-[600px]:h-[25px] bg-[#FF33331A] rounded-2xl flex items-center justify-center font-bold mt-4">
            -{discount}%
          </p>
        </span>
        <p className="max-[600px]:text-[14px] max-[600px]:text-center">{singleProduct?.description}</p>

        {cart?.find((el) => el.id === singleProduct?.id) ? (
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => dispatch(decrease(singleProduct?.id))}
              className="flex-1 min-w-[60px] h-[60px] rounded-[62px] bg-[#F0F0F0] font-bold text-[24px] cursor-pointer"
            >
              -
            </button>
            <button className="flex-1 min-w-[60px] h-[60px] rounded-[62px] bg-[#F0F0F0] font-bold text-[24px] cursor-pointer">
              {cart?.find((el) => el.id === singleProduct.id)?.qty}
            </button>
            <button
              onClick={() => dispatch(increase(singleProduct?.id))}
              className="flex-1 min-w-[60px] h-[60px] rounded-[62px] bg-[#F0F0F0] font-bold text-[24px] cursor-pointer"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(singleProduct))}
            className="w-full max-[600px]:w-[50%] max-[600px]:mx-auto h-[60px] max-[600px]:h-[40px] rounded-[62px] text-white bg-black font-bold text-[24px] max-[600px]:text-[18px] mt-4"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  </section>

  <section>
    <div className="container mx-auto max-w-[1440px] w-full py-[30px] px-5 max-[600px]:py-5">
      <div className="flex flex-wrap items-center justify-between border-b border-gray-500 gap-2">
        <h1 className="text-[24px] max-[600px]:text-[18px] text-[#00000099] mb-[10px]">
          Products Details
        </h1>
        <h1 className="text-[24px] max-[600px]:text-[18px] font-bold mb-[10px]">
          Rating & Reviews
        </h1>
        <h1 className="text-[24px] max-[600px]:text-[18px] text-[#00000099] mb-[10px]">
          FAQs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {Array(6).fill(0).map((_, idx) => (
          <div key={idx} className="w-full h-auto border-[2px] border-[#0000001A] rounded-[20px] p-5">
            <span className="flex items-center gap-2 text-yellow-500 mb-5">
              {[...Array(5)].map((_, i) => <IoIosStar key={i} />)}
            </span>
            <h1 className="flex items-center gap-2 mb-2">
              Sarah M.
              <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center">
                <TiTick />
              </span>
            </h1>
            <p className="text-[#00000099] text-sm mt-3">
              "I'm blown away by the quality and style of the clothes I received from Shop.co."
            </p>
            <p className="text-[#00000099] text-sm mt-4">Posted on August 15, 2023</p>
          </div>
        ))}
      </div>

      <button className="w-[260px] h-[60px] rounded-[62px] border-[2px] border-[#0000001A] text-[20px] font-bold cursor-pointer mx-auto block">
        Load More Reviews
      </button>
    </div>
  </section>

  <section className="py-10">
    <div className="container mx-auto px-5 max-w-[1440px] w-full">
      {allCategories.map((category) => (
        <div key={category}>
          <h1 className="text-[48px] max-[900px]:text-[32px] max-[600px]:text-[20px] font-bold uppercase text-center pt-10">
            {category}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {products.filter((product) => product.category === category).slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="relative py-[60px]">
    <div className="container mx-auto max-w-[1440px] w-full">
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-[100px] bg-black rounded-2xl h-[180px] grid sm:grid-cols-2 gap-10 px-10 pt-10 w-full max-w-[1200px]">
        <div>
          <h1 className="text-[40px] max-[900px]:text-[28px] max-[600px]:text-[22px] font-bold text-white leading-[45px]">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
        </div>

        <div>
          <span className="flex items-center gap-2 w-[349px] max-[600px]:w-full h-[48px] text-gray-400 bg-white pl-6 rounded-[62px]">
            <TfiEmail />
            <input
              className="outline-none text-gray-500 w-full"
              type="email"
              placeholder="Enter your email address"
            />
          </span>

          <button className="w-[349px] max-[600px]:w-full h-[48px] font-bold text-[20px] bg-white rounded-[62px] mt-3">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default SinglePage;
