import React from "react";
import { svgs } from "../../public/social-icons/index.js";
import SocialSvg from "./SocialSvg";

const Footer = () => {
  return (
    <div className=" px-4  md:px-8 lg:px-20 py-5 w-full max-w-[1500px] bg-white border border-gray-100 justify-between items-center gap-4 sm:gap-10 md:gap-24 flex flex-col  sm:flex-row">
      <div className=" justify-start items-center gap-7 flex flex-col md:flex-row">
        <div className="  text-black text-[14px] font-normal leading-tight">
          Logo
        </div>
        <div className=" justify-start items-start gap-2 flex">
          {svgs?.map((icon, index) => (
            <div key={index} className=" w-7 h-7 relative">
              <div className=" w-[21px] h-[21px] left-[3.50px] top-[3.50px] absolute">
                <SocialSvg d1={icon.d1} d2={icon.d2} id={icon.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col text-center md:flex-row gap-4  text-zinc-800 text-[14px] font-normal leading-tight">
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        <div>Contact Us</div>
      </div>

      <div className=" text-right text-gray-400 text-[12px] font-normal leading-tight">
        company, 2023 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
