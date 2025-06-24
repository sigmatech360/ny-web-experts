import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioSection = ({ columns }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  const handleImageClick = (colIndex, imgIndex) => {
    const flatImages = columns.flat();
    const imageList = flatImages.map((src) => ({ src }));

    const globalIndex =
      columns.slice(0, colIndex).reduce((acc, col) => acc + col.length, 0) +
      imgIndex;

    setImages(imageList);
    setPhotoIndex(globalIndex);
    setTimeout(() => setIsOpen(true), 50);
  };

  return (
    <>
      <div className="row">
        {columns.map((column, colIndex) => (
          <div className="col-md-4 mb-md-0 mb-3" key={colIndex}>
            <div
              className="projects-item d-flex flex-column gap-4"
              data-aos="fade-up"
              data-aos-delay={colIndex * 300}
            >
              {column.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  className="img-fluid"
                  alt={`project image ${colIndex + 1}-${imgIndex + 1}`}
                  onClick={() => handleImageClick(colIndex, imgIndex)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {isOpen && images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </>
  );
};

export default PortfolioSection;
