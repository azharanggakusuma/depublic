import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/img/carousel/image-1.png";
import image2 from "../assets/img/carousel/image-2.png";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const image2Ref = useRef(null);

  useEffect(() => {
    // Mengambil ukuran gambar 2 setelah gambar dimuat
    if (image2Ref.current) {
      const image2Width = image2Ref.current.width;
      const image2Height = image2Ref.current.height;
      // Gunakan ukuran ini untuk mengatur ukuran gambar 1
      console.log(
        "Ukuran Gambar 2: Width =",
        image2Width,
        "Height =",
        image2Height
      );
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    prevArrow: null,
    nextArrow: null,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  return (
    <div className="">
      <style>
        {`
          /* Sembunyikan tombol panah */
          .slick-prev, .slick-next {
            display: none !important;
          }

          /* Ketinggian gambar yang berada di tengah */
          .center-image {
            height: 250px; /* Sesuaikan ketinggian yang Anda inginkan */
          }
        `}
      </style>
      <Slider {...settings}>
        <div
          className={`rounded-xl p-2 ${
            activeIndex === 0 ? "center-image" : "mt-4"
          }`}
        >
          <img
            ref={image2Ref}
            src={image2}
            alt="image 2"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <div
          className={`rounded-xl p-2 ${
            activeIndex === 1 ? "center-image" : "mt-4"
          }`}
        >
          <img
            src={image1}
            alt="image 1"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <div
          className={`rounded-xl p-2 ${
            activeIndex === 2 ? "center-image" : "mt-4"
          }`}
        >
          <img
            src={image2}
            alt="image 2"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
