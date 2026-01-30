import React from "react";

const ProductCard = ({title , image , price , rating}) => {
    const discount = 20
    const newPrice = (
        price - (price * discount) / 100
    ).toFixed(2)
  return (
    <div>
      <img
        className="max-w-[400px] w-full h-[298px] rounded-[20px] bg-[#F0EEED] object-contain p-5"
        src={image}
        alt="gd"
      />
      <h1 className="sm:text-[20px] font-bold line-clamp-2 mt-3">{title}</h1>
      <h2 className="text-[18px] font-bold text-yellow-500 mt-3 ">{rating?.rate} </h2>
      <div className="flex items-center justify-between">
        <p className="sm:text-[24px] font-bold mt-3">${price}</p>
      <h1 className="line-through text-[24px] text-[gray] font-bold mt-3">${newPrice}</h1>
        <h1 className="text-[24px] w-25 h-10 flex items-center justify-center rounded-3xl text-[red] bg-[#FF33331A] font-bold mt-3">-{discount}%</h1>
      </div>
    </div>
  );
};

export default ProductCard;
