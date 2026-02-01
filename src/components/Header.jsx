import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    
  return (
    <header className='bg-white fixed z-10 top-0 w-full'>
  <div className='mx-auto container pt-10 pb-5 px-4 max-w-[1440px] w-full'>
    <div className='flex items-center justify-between'>
      <Link to='/' className='text-[32px] font-bold'>SHOP.CO</Link>

      <ul className='hidden md:flex items-center gap-5'>
        <li className='text-[18px] font-bold'><a href="">Shop</a></li>
        <li className='text-[18px] font-bold'><a href="">On Sale</a></li>
        <li className='text-[18px] font-bold'><a href="">New Arrivals</a></li>
        <li className='text-[18px] font-bold'><a href="">Brand</a></li>
      </ul>

      <input
        className='w-[577px] h-[48px] rounded-[62px] bg-[#F0F0F0] text-black pl-5'
        type="search"
        placeholder='Search for products...'
      />

      <Link to={`/cart`}>
      <FaShoppingCart className='text-[32px] relative'/> 
      <span className="absolute top-10 ml-8  bg-gray-300 text-lg font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md">{cart.length}
     </span>
     </Link>

    </div>

  </div>
</header>

  )
}

export default Header