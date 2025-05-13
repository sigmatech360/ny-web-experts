import { useState } from "react";
import BlogCard from "../BlogCard";

// import { blogCardsData } from "../../data";

import Pagination from "react-bootstrap/Pagination";

const BlogSec = ({ secTitle, itemsPerPage = 3, blogCardsData,  pagination }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogCardsData.length / itemsPerPage);

  // Get the current page's data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBlogs = blogCardsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="blog-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="sec-head text-center mb-4">
              <p
                className="sec-tag purpleColor"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                From The Blog
              </p>
              <h2 data-aos="fade-up" data-aos-duration="3000">
                {/* Latest News & <br /> Articles from the Blog. */}
                {secTitle || `Latest News & Articles from the Blog.`}
              </h2>
            </div>
          </div>

          {displayedBlogs.map((item, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <BlogCard
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {pagination && (
          <Pagination className="blogs-pagination justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            />

            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i}
                active={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {String(i + 1).padStart(2, "0")}
              </Pagination.Item>
            ))}

            <Pagination.Next
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}


      </div>
    </section>
  );
};

export default BlogSec;

// import React from "react";
// import BlogCard from "../BlogCard";
// import { blogCardsData } from "../../data";

// const BlogSec = ({limit}) => {
//   const displayedBlogs = limit ? blogCardsData.slice(0, limit) : blogCardsData;
//   return (
//     <section className="blog-sec ">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 mb-4">
//             <div className="sec-head text-center mb-4">
//               <p className="sec-tag purpleColor">From The Blog</p>
//               <h2>
//                 Latest News & <br /> Articles from the Blog.
//               </h2>
//             </div>
//           </div>
//           {displayedBlogs.map((item, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <BlogCard
//                 image={item.image}
//                 name={item.name}
//                 description={item.description}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSec;
