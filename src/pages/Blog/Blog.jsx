import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blogPosts = [
    {
      title: "10 Fun Toys Every Kid Should Have",
      date: "October 22, 2025",
      snippet:
        "Discover the top 10 toys that bring endless joy and spark creativity for kids of all ages. From building blocks to plushies, explore how each toy helps develop skills.",
      img: "/img/blog1.png",
    },
    {
      title: "Creative Play Ideas for Rainy Days",
      date: "October 20, 2025",
      snippet:
        "Rainy days don’t have to be boring! Try indoor treasure hunts, DIY crafts, and imaginative play that keeps kids entertained and learning at home.",
      img: "/img/blog2.png",
    },
    {
      title: "Organizing Your Toy Collection",
      date: "October 18, 2025",
      snippet:
        "Learn fun and simple ways to organize toys so kids can easily find their favorite items. Storage boxes, shelves, and labeling make playtime stress-free!",
      img: "/img/blog4.png",
    },
    {
      title: "Sharing Toys and Making Friends",
      date: "October 15, 2025",
      snippet:
        "Sharing toys teaches important social skills. Encourage kids to take turns, cooperate in play, and enjoy friendship-building activities.",
      img: "/img/blog3.png",
    },
    {
      title: "Building Imagination with Toy Games",
      date: "October 12, 2025",
      snippet:
        "Create fun stories and adventures using toys. Kids can develop imagination and problem-solving skills while playing exciting toy-based games.",
      img: "/img/blog5.png",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col min-h-screen  py-10 px-6 md:px-16 lg:px-24 xl:px-32   mt-16">
      <title>Toy - Topia | Blog</title>
      <h1
        className="text-5xl font-bold text-center text-purple-700 mb-12"
        data-aos="zoom-in"
      >
        Toy-Kids Blog
      </h1>

      <div className="grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-full mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-102 transition-all duration-500"
            data-aos="fade-up"
            // data-aos-delay={index * 150}
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-purple-700 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-purple-800 text-sm">{post.snippet}</p>
              <button className="mt-4 cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
