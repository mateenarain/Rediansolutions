import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import app from "../assets/app.jpg";
import web from "../assets/web.jpg";
import team from "../assets/team.jpg";
import ai from "../assets/ai.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import digital from "../assets/digital.jpg";

const initialPosts = [
  {
    id: 1,
    title: "Modern Website Development in 2025",
    excerpt:
      "Discover the latest trends and technologies shaping website development today.",
    date: "September 1, 2025",
    image: web,
  },
  {
    id: 2,
    title: "Building Powerful Mobile Apps",
    excerpt:
      "Learn how to create intuitive and responsive mobile applications for iOS and Android.",
    date: "August 20, 2025",
    image: app,
  },
  {
    id: 3,
    title: "Ecommerce Strategies for Success",
    excerpt:
      "Tips and tricks to maximize your online store’s growth and customer engagement.",
    date: "August 10, 2025",
    image: ecommerce,
  },
  {
    id: 4,
    title: "Building a Good Team Culture",
    excerpt:
      "Explore ways to foster collaboration and trust in your development and marketing teams.",
    date: "July 30, 2025",
    image: team,
  },
  {
    id: 5,
    title: "Effective Digital Marketing Techniques",
    excerpt:
      "Learn about SEO, social media marketing, and paid ads that convert leads into customers.",
    date: "July 15, 2025",
    image: digital,
  },
  {
    id: 6,
    title: "The Future of AI in Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing coding, testing, and deployment.",
    date: "July 1, 2025",
    image: ai,
  },
];

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState(initialPosts);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Add Blog
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      id: blogPosts.length + 1,
      title: form.title.value,
      excerpt: form.content.value.substring(0, 100) + "...",
      date: new Date().toLocaleDateString(),
      image: digital, // default image
    };
    setBlogPosts([newPost, ...blogPosts]);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  // ✅ Delete Blog
  const handleDelete = (id) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
  };

  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-white to-[#f0fff7] px-6 lg:px-20 pb-16">
      <div data-aos="fade-up">
        <h1 className="text-themegreen text-5xl font-medium font-poppins mb-4 text-center uppercase">
          Our Blog
        </h1>
        <p className="text-gray-600 text-lg font-normal font-poppins text-center max-w-2xl mb-12 mx-auto">
          Expert articles, news, and insights from Redian Solutions.
        </p>
      </div>

      {/* Blog post cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(({ id, title, excerpt, date, image }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
            data-aos="fade-up"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-medium text-themegreen mb-2 font-poppins">
                {title}
              </h2>
              <p className="text-gray-600 mb-4 font-poppins text-[15px] leading-relaxed">
                {excerpt}
              </p>
              <p className="text-sm text-gray-400 font-poppins">{date}</p>

              <div className="flex justify-between mt-4">
                <button className="bg-themegreen text-white py-2 px-5 rounded-lg hover:bg-black transition-colors duration-300 font-medium font-poppins">
                  Read More
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-500 text-white py-2 px-5 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium font-poppins"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Submission Form */}
      <div
        data-aos="fade-up"
        className="mt-24 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold font-poppins text-themegreen text-center mb-6">
          Share Your Blog With Us
        </h2>
        {submitted && (
          <p className="text-center text-green-600 font-poppins mb-4">
            ✅ Blog submitted successfully!
          </p>
        )}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-themegreen font-poppins"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-themegreen font-poppins"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-themegreen font-poppins"
            required
          />
          <textarea
            name="content"
            rows="6"
            placeholder="Write your blog content..."
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-themegreen font-poppins"
            required
          ></textarea>
          <div>
            <label className="block text-sm text-gray-500 mb-2 font-poppins">
              Upload Image (optional)
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none font-poppins"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-themegreen hover:bg-black text-white font-semibold py-3 px-6 rounded-md transition duration-300 font-poppins"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPage;
