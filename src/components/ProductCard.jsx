import React from "react";

const ProductCard = ({title , image , price , rating}) => {
  return (
    <div>
      <img
        className="max-w-[400px] w-full h-[298px] rounded-[20px] bg-[#F0EEED] object-contain p-5"
        src={image}
        alt="gd"
      />
      <h1 className="sm:text-[20px] font-bold line-clamp-2 mt-3">{title}</h1>
      <h2 className="text-[18px] font-bold text-yellow-500 mt-3 ">{rating?.rate} </h2>
      <p className="sm:text-[24px] font-bold mt-3">$ {price}</p>
    </div>
  );
};

export default ProductCard;
