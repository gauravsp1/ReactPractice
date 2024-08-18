import React, { useState } from "react";
import "./ImageSlider.css";
function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const imgs = [
    {
      src: "https://i.redd.it/94w49kpi0zid1.png",
      id: 11,
    },
    {
      src: "https://i.redd.it/7ovbgdt5t2jd1.png",
      id: 12,
    },
    {
      src: "https://i.redd.it/ym7ynjweg8jd1.png",
      id: 13,
    },
    {
      src: "https://i.redd.it/71hk52tmvbjd1.gif",
      id: 14,
    },
    {
      src: "https://i.redd.it/v4hlujgja0jd1.png",
      id: 15,
    },
  ];

  const goToNext = () => {
    currentImage < imgs.length - 1 &&
      setCurrentImage((previous) => previous + 1);
  };
  const goToPrevious = () => {
    currentImage > 0 && setCurrentImage((previous) => previous - 1);
  };
  return (
    <div className="container">
      {/* <div>{currentImage}</div> */}
      {currentImage !== 0 && (
        <img
          src="/assest/down-arrow.png"
          alt="right"
          className="left-arrow"
          onClick={goToPrevious}
        />
      )}
      <div className="images-holder">
        {imgs.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt=""
            className={`image-content`}
            style={{ opacity: index === currentImage ? 1 : 0 }}
          />
        ))}
      </div>
      {currentImage !== imgs.length - 1 && (
        <img
          src="/assest/down-arrow.png"
          alt="right"
          className="right-arrow"
          onClick={goToNext}
        />
      )}
    </div>
  );
}

export default ImageSlider;
