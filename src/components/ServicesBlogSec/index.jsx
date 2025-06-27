import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import Loader from "../Loader";

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const ServicesBlogSec = ({
  secTitle,
  categorySlug,
  itemsPerPage = 6,
  pagination,
}) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [categoryId, setCategoryId] = useState(null);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // useEffect(() => {
  //   const fetchCategoryBlogs = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `${wpBaseUrl}/posts?_embed&categories=${categorySlug}`
  //       );
  //       setBlogs(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch category blogs:", error);
  //       setBlogs([]); // Ensure empty array on error
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCategoryBlogs();
  // }, [categorySlug]);

  useEffect(() => {
    const fetchCategoryIdAndPosts = async () => {
      try {
        setLoading(true);

        // Step 1: Get category ID from slug
        const categoryRes = await axios.get(
          `${wpBaseUrl}/categories?slug=${categorySlug}`
        );
        const category = categoryRes.data[0];

        if (!category) {
          console.warn("Category not found");
          setBlogs([]);
          return;
        }

        setCategoryId(category.id);

        // Step 2: Fetch posts using category ID
        const postsRes = await axios.get(
          `${wpBaseUrl}/posts?_embed&categories=${category.id}`
        );
        setBlogs(postsRes.data);
      } catch (error) {
        console.error("Failed to fetch category blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryIdAndPosts();
  }, [categorySlug]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  if(blogs.length === 0){
    return null
  }

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
                {secTitle || `Related Articles & News`}
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="sideBar-loader w-100 d-flex justify-content-center py-5">
              <Loader />
            </div>
          ) : blogs.length === 0 ? (
            <div className="col-12 text-center py-4">
              <p className="text-muted">No posts found in this category.</p>
            </div>
          ) : (
            displayedBlogs.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
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

        {!loading && blogs.length > 0 && pagination && (
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

export default ServicesBlogSec;
