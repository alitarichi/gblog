import React, { useEffect, useRef, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";

const BlogList = () => {
  const targetRef = useRef(null);
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-15%"]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={targetRef} className="relative top-20 h-[110vh]">
      <div className="flex  justify-center gap-6">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? " bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("technology")}
          className={
            menu === "technology"
              ? " bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("startup")}
          className={
            menu === "startup"
              ? " bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          StartUp
        </button>
        <button
          onClick={() => setMenu("lifestyle")}
          className={
            menu === "lifestyle"
              ? " bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Life style
        </button>
      </div>
      <div className="relative top-10 h-[50vh]">
        <motion.div
          className="absolute right-0 top-[110px] h-full w-[250px]"
          style={{ opacity }}
        >
          <button
            className="bg-[#F9F4EC] hover:bg-[#F8E3D3]
          opacity-50 h-full w-full text-black py-2 px-4"
          >
            Next Page
          </button>
        </motion.div>
        <motion.div style={{ x }} className=" flex">
          {blogs
            .slice(0, 8)
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => {
              return (
                <BlogItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              );
            })}
        </motion.div>
        <motion.div style={{ x }} className=" flex">
          {blogs
            .slice(8, 16)
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item, index) => {
              return (
                <BlogItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              );
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogList;
