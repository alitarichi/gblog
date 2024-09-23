import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="px-1 sm:pl-14 py-3 border border-black items-center flex gap-2">
        <Image
          src={assets.logo}
          width={80}
          height={80}
          className="dark:hidden"
          alt="logo"
        />
        <Image
          src={assets.logo_dark}
          width={80}
          height={80}
          className="dark:block hidden"
          alt="logo_dark"
        />
        <h1 className="text-5xl tracking-tighter text-[#EE5626] font-semibold">
          G BLOG
        </h1>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 
        font-medium px-3 py-2 shadow-[-5px_5px_0px_#000000"
          >
            <Image src={assets.add_icon} alt="add" width={28} />
            <p>Add Blogs</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 
        font-medium px-3 py-2  shadow-[-5px_5px_0px_#000000"
          >
            <Image src={assets.blog_icon} alt="add" width={28} />
            <p>Blog Lists</p>
          </Link>

          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 
        font-medium px-3 py-2 shadow-[-5px_5px_0px_#000000"
          >
            <Image src={assets.email_icon} alt="add" width={28} />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
