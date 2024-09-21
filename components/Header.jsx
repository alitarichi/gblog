"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "./ui/button";

const Header = () => {
  const [email, setEmail] = useState("");

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div className=" px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 ">
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
        <div>
          <h1 className="text-3xl font-medium">Latest Updates</h1>
        </div>
        <div className="flex items-center gap-12">
          {/* <form
          className="flex justify-between max-w-[500px] scale-75 
          sm:scale-100 mx-auto mt-10 border border-black 
          shadow-[-7px_7px_0px_#000000] "
          onSubmit={OnSubmitHandler}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          /> */}
          <Button
            varient="default"
            type="submit"
            className=" items-center flex gap-4 p-8 light:bg-white "
          >
            Subscribe
          </Button>
          <ModeToggle />
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
