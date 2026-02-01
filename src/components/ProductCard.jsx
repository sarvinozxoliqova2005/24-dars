import { Link } from "react-router-dom";

const ProductCard = ({ title, image, price, rating, id }) => {
  const discount = 20;
  const newPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <Link to={`/products/${id}`} className="group">
      <img
        className="max-w-[400px] w-full h-[300px] max-[600px]:max-w-[150px] max-[600px]:h-[150px] rounded-[20px] bg-[#F0EEED] object-contain p-5 transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt={title}
      />

      <h1 className="text-[20px] max-[600px]:text-[14px] font-bold line-clamp-2 mt-3">
        {title}
      </h1>

      <h2 className="text-[18px] sm:text-[18px] text-yellow-500 mt-2">
        {rating?.rate}
      </h2>

      <div className="flex items-center justify-between mt-3 gap-2">
        <p className="text-[24px] max-[600px]:text-[16px] font-bold">${price}</p>
        <span className="line-through text-[24px] max-[600px]:text-[14px] text-gray-400 font-bold">
          ${newPrice}
        </span>
        <span className="text-[24px] max-[600px]:text-[12px] w-20 h-8 w-25 h-10 max-[600px]:w-15 max-[600px]:h-5 flex items-center justify-center rounded-3xl text-red-500 bg-[#FF33331A] font-bold">
          -{discount}%
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
