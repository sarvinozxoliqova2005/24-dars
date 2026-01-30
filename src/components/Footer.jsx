import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-[#F0F0F0] pt-[150px] pb-[60px]'>
        <div className='container mx-auto max-w-[1440px] w-full'>
            <div className='flex items-center justify-between gap-10 max-[600px]:flex-col max-[600px]:items-center'>
                <div>
                    <h2 className='text-[40px] font-bold'>SHOP.CO</h2>
                    <p className='text-[#00000099] mt-2'>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</p>
                    <span className='flex items-center gap-3 mt-3' >
                        <IoLogoTwitter />
                        <FaFacebook />
                        <BsInstagram />
                    </span>
                </div>

                <div>
                    <h1 className='text-[20px] font-bold uppercase'>Company</h1>
                    <ul className='text-[#00000099] text-[18px] space-y-2 mt-5'>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Works</a>
                        </li>
                        <li>
                            <a href="">Career</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[20px] font-bold uppercase'>Help</h1>
                    <ul className='text-[#00000099] text-[18px] space-y-2 mt-5'>
                        <li>
                            <a href="">Customer Support</a>
                        </li>
                        <li>
                            <a href="">Delivery Details</a>
                        </li>
                        <li>
                            <a href="">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[20px] font-bold uppercase'>FAQ</h1>
                    <ul className='text-[#00000099] text-[18px] space-y-2 mt-5'>
                        <li>
                            <a href="">Account</a>
                        </li>
                        <li>
                            <a href="">Manage Deliveries</a>
                        </li>
                        <li>
                            <a href="">Orders</a>
                        </li>
                        <li>
                            <a href="">Payments</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[20px] font-bold uppercase'>RESOURCES</h1>
                    <ul className='text-[#00000099] text-[18px] space-y-2 mt-5'>
                        <li>
                            <a href="">Free eBooks</a>
                        </li>
                        <li>
                            <a href="">Development Tutorial</a>
                        </li>
                        <li>
                            <a href="">How to - Blog</a>
                        </li>
                        <li>
                            <a href="">Youtube Playlist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer