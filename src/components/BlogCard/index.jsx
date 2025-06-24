import { FaRegUserCircle } from "react-icons/fa";
import { PiCalendarBlankBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const BlogCard = ({ image, name, description, slug, author, date }) => {
  return (
    <div className="blog-card">
      <div className="our-services-card-header">
        <Link to={`/blog/${slug}`}>
          <img src={image} alt={name} className="img-fluid" />
        </Link>
      </div>
      <div className="our-services-card-body">
        <div className="our-services-card-body-top">
          <Link
            to={`/blog/${slug}`}
            style={{ color: "unset", textDecoration: "none" }}
          >
            <h3>{name}</h3>
          </Link>
          <p>{description}</p>
        </div>
        <div className="our-services-card-body-bottom">
          <div className="blog-card-meta d-flex gap-2 flex-wrap">
            <p>
              <FaRegUserCircle /> {author || "admin"}
            </p>
            <p>
              <PiCalendarBlankBold /> {new Date(date).toLocaleDateString()}
            </p>
          </div>
          <Link to={`/blog/${slug}`} className="ny-btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
