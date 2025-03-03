import React from "react";
import BlogCard from "../BlogCard";
import { blogCardsData } from "../../data";

const BlogSec = () => {
  return (
    <section className="blog-sec ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="sec-head text-center mb-4">
              <p className="sec-tag purpleColor">From The Blog</p>
              <h2>
                Latest News & <br /> Articles from the Blog.
              </h2>
            </div>
          </div>
          {blogCardsData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <BlogCard
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSec;
