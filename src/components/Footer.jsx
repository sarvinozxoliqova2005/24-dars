import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] pt-[150px] pb-[60px]">
      <div className="container mx-auto max-w-[1440px] w-full px-5">
        <div
          className="
        grid grid-cols-2 gap-10
        sm:grid-cols-3
        md:grid-cols-5
        max-[600px]:text-center
      "
        >
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-[40px] max-[600px]:text-[24px] font-bold">
              SHOP.CO
            </h2>
            <p className="text-[#00000099] max-[600px]:text-[14px] mt-2">
              We have clothes that suits your style and <br />
              which you’re proud to wear. From <br />
              women to men.
            </p>
            <span className="flex justify-center md:justify-start items-center gap-3 mt-3">
              <IoLogoTwitter />
              <FaFacebook />
              <BsInstagram />
            </span>
          </div>
          <div>
            <h1 className="text-[20px] max-[600px]:text-[14px] font-bold uppercase">
              Company
            </h1>
            <ul className="text-[#00000099] text-[18px] max-[600px]:text-[12px] space-y-2 mt-5">
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
            <h1 className="text-[20px] max-[600px]:text-[14px] font-bold uppercase">
              Help
            </h1>
            <ul className="text-[#00000099] text-[18px] max-[600px]:text-[12px] space-y-2 mt-5">
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
            <h1 className="text-[20px] max-[600px]:text-[14px] font-bold uppercase">
              FAQ
            </h1>
            <ul className="text-[#00000099] text-[18px] max-[600px]:text-[12px] space-y-2 mt-5">
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
            <h1 className="text-[20px] max-[600px]:text-[14px] font-bold uppercase">
              Resources
            </h1>
            <ul className="text-[#00000099] text-[18px] max-[600px]:text-[12px] space-y-2 mt-5">
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
  );
};

export default Footer;
