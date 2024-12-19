
import React from 'react';
import './Blog.css';
import { IoSearch } from "react-icons/io5";

const Blog = () => {
  const blogData = [
    {
      image: "/images/Rectangle 6.png",
      logo: "/images/Group 172.png",
      title: "Going all-in with millennial design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident nihil debitis, pariatur omnis odio quidem quia nisi ipsam at reprehenderit labore recusandae magnam magni obcaecati optio nesciunt ut facilis itaque.",
    },
    {
      image: "/images/Rectangle 68.png",
      logo: "/images/Group 172.png",
      title: "Exploring new ways of decorating",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident nihil debitis, pariatur omnis odio quidem quia nisi ipsam at reprehenderit labore recusandae magnam magni obcaecati optio nesciunt ut facilis itaque.",
    },
    {
      image: "/images/Rectangle 69.png",
      logo: "/images/Group 172.png",
      title: "Handmade pieces that took time to make",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, provident nihil debitis, pariatur omnis odio quidem quia nisi ipsam at reprehenderit labore recusandae magnam magni obcaecati optio nesciunt ut facilis itaque.",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      image: "/images/recent1.png",
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: "/images/recent2.png",
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: "/images/recent3.png",
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: "/images/recent4.png",
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: "/images/recent5.png",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div>
      {/* Header Image */}
      <div className="main_image">
        <img className="main-image" src="/images/Rectangle.png" alt="Main" />
      </div>

      <div className="main_div">
        {/* Left Side */}
        <div className="leftSide">
          {blogData.map((blog, index) => (
            <div key={index} className="innerfirst">
              <div className="first-image">
                <img src={blog.image} alt="Blog" />
              </div>
              <div className="dislogo">
                <img src={blog.logo} alt="Logo" />
              </div>
              <div className="discription">
                <h3>{blog.title}</h3>
                <p className="para">{blog.description}</p>
              </div>
              <div className="read-more">
                <button className="readmore">Read more</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="rightside">
          {/* Search Bar */}
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Search"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  marginLeft: "-40px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <IoSearch size={20} />
              </button>
            </div>

            {/* Categories Section */}
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
              Categories
            </h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {categories.map((category, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    color: "#777",
                    fontSize: "16px",
                  }}
                >
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="recent-posts">
            <h2 className="recent-posts-title">Recent Posts</h2>
            <ul className="posts-list">
              {recentPosts.map((post, index) => (
                <li key={index} className="post-item">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <div className="post-info">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-date">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
