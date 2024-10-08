import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row
    bg-black py-5 items-center"
    >
      <div className="flex items-center gap-6">
        <Image src={assets.logo_dark} alt="logo_light" width={60} />
        <p className="text-white font-bold text-4xl">BLOG</p>
      </div>
      <p className="text-sm text-white">
        All right reserved. Copyright @ G BLOG
      </p>
      <div className="flex ">
        <Image src={assets.facebook_icon} alt="facebook_icon" width={40} />
        <Image src={assets.twitter_icon} alt="twitter_icon" width={40} />
        <Image src={assets.googleplus_icon} alt="googleplus_icon" width={40} />
      </div>
    </div>
  );
};

export default Footer;
