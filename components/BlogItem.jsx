import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className=" hover:border-2 hover:border-black border-2">
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt="blog" width={400} height={400} />
      </Link>
      <p className="ml-2 inline-block bg-black text-white text-sm">
        {category}
      </p>

      <h5 className="ml-4 text-lg p-2 font-medium  text-gray-900">{title}</h5>
      <p className="ml-4 text-sm tracking-tighter text-gray-700">
        {description.slice(0, 80)}
      </p>
    </div>
  );
};

export default BlogItem;
