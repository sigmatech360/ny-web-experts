import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogSec = ({ secTitle, itemsPerPage = 6, pagination }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${wpBaseUrl}/posts?_embed`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

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
              <h3 data-aos="fade-up" data-aos-duration="3000">
                {secTitle || `Latest News & Articles from the Blog.`}
              </h3>
            </div>
          </div>

          {loading ? (
            <div className="sideBar-loader">
              <Loader />
            </div>
          ) : (
            displayedBlogs.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <BlogCard
                  image={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  name={item.title.rendered}
                  description={
                    item.excerpt.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 120) + "..."
                  }
                  slug={item.slug}
                  author={item._embedded?.author?.[0]?.name || "admin"}
                  date={item.date}
                />
              </div>
            ))
          )}
        </div>

        {!loading && pagination && (
          <Pagination className="blogs-pagination justify-content-center mt-4">
            <Pagination.Prev
              onClick={() => setCurrentPage((p) => p - 1)}
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
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default BlogSec;
