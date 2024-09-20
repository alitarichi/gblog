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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="flex justify-center gap-6 pb-2">
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
      <div className="sticky top-20 h-[100vh] items-center ">
        <motion.div style={{ x }} className="flex">
          {blogs
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
