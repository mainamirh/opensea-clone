import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const trending = ({ NFTs }) => {
  const [swiper, setSwiper] = useState({});
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const renderedNFTs = NFTs.map((NFT, i) => {
      return (
        <SwiperSlide className="" key={i}>
          <div className="nft-slide">
            <img src={NFT.image} className="nft-image" />
            <div className="footer">
              <div className="owner-profile">
                <img src={NFT.profile} className="profile" />
              </div>
              <div className="name">{NFT.name}</div>
              {NFT.verified ? (
                <img className="verified-icon" src="/icons/verified.svg" />
              ) : undefined}
            </div>
          </div>
        </SwiperSlide>
      );
    });

    setSlides(renderedNFTs);
  }, []);

  return (
    <div className="trending-section">
      <div className="trending-title">
        Trending in <span>all categories</span>{" "}
      </div>
      <div className="trending-container">
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
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
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

export default trending;
