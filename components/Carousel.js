import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Carousel = ({ images }) => {
  const [swiper, setSwiper] = useState({});
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const renderedImages = images.map((image, i) => {
      return (
        <SwiperSlide key={i} className="carousel-slide">
          <div className="slide-container">
            <img src={image.image} className="slide-img" />
            <div className="slide-details">
              <div className="slide-collection-name">{image.name}</div>
              <div className="slide-description">{image.description}</div>
            </div>
            <div className="live">Live</div>
          </div>
        </SwiperSlide>
      );
    });
    setSlides(renderedImages);
  }, []);

  return (
    <div className="carousel-section">
      <div className="carousel-title">Notable Drops</div>
      <div className="carousel-container">
        <Swiper
          loop={true}
          onInit={(ev) => {
            setSwiper(ev);
          }}
          initialSlide={3}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
            1449: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {slides}
        </Swiper>
        <div
          className="material-symbols-outlined prev-button"
          onClick={() => {
            const activeIndex = swiper.activeIndex;
            swiper.isEnd ? swiper.slideTo(activeIndex - 1) : swiper.slidePrev();
          }}
        >
          chevron_left
        </div>
        <div
          className="material-symbols-outlined next-button"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default Carousel;
