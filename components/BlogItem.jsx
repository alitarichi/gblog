import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div>
      <div
        className=" min-w-[300px] bg-white border
     border-black hover:shadow-[-7px_7px_0px_#000000]"
      >
        <Link href={`/blogs/${id}`}>
          <Image src={image} alt="blog" width={400} height={400} />
        </Link>
        <p className="ml-2 mt-3 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="">
          <h5 className="ml-4 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="ml-4 text-sm tracking-tighter text-gray-700 blog-content">
            {description.slice(0, 80)}
          </p>
        </div>
      </div>
      <div
        className=" min-w-[300px] bg-white border
     border-black hover:shadow-[-7px_7px_0px_#000000]"
      >
        <Link href={`/blogs/${id}`}>
          <Image src={image} alt="blog" width={400} height={400} />
        </Link>
        <p className="ml-2 mt-3 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="">
          <h5 className="ml-4 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="ml-4 text-sm tracking-tighter text-gray-700 blog-content">
            {description.slice(0, 80)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
