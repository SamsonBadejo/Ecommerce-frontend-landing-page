import React from "react";
import Headings from "../Shared/Headings";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const Blogs = () => {
  const BlogData = [
    {
      title: "How to choose perfect smartwatch",
      subtitle:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, consectetur adipisicing elit. Eaque reiciendis",
      published: "Jan 20, 2024 by Dilshad",
      image: Img1,
    },
    {
      title: "How to choose a perfect gadget",
      subtitle:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, consectetur adipisicing elit. Eaque reiciendis",
      published: "Jan 20, 2024 by Satya",
      image: Img2,
    },
    {
      title: "How to choose perfect VR headset",
      subtitle:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, consectetur adipisicing elit. Eaque reiciendis",
      published: "Jan 20, 2024 by Sabir",
      image: Img3,
    },
  ];

  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Headings title="Recent News" subtitle={"Explore Our Products"} />
      </div>
      {/* Blog section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-6 gap-y-8 sm:gap-4 md:gap-7"
      >
        {/* Blog card */}
        {BlogData.map((data) => (
          <div key={data.title} className="bg-white dark:bg-gray-900">
            <div className="overflow-hidden rounded-2xl mb-2 ">
              {/* Image */}
              <img
                src={data.image}
                alt="blog"
                className="w-full h-[220px] object-cover rounded-lg hover:scale-105 
                transition duration-300 ease-in-out "
              />
              {/* {content section} */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
