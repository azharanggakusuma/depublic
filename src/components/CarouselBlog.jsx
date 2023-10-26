import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/img/carousel/image-1.png";
import image2 from "../assets/img/carousel/image-2.png";
import location from "../assets/img/icon/location.png";

function CarouselBlog() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    draggable: true,
  };

  const cardStyle = {
    width: "360px",
    height: "360px",
  };

  const imageStyle = {
    height: "150px",
  };

  const cards = [
    {
      image: image1,
      date: "12 June, 2023",
      title: "Judul Blog 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
    },
    {
      image: image2,
      date: "5 July, 2023",
      title: "Judul Blog 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
    },
    {
      image: image1,
      date: "20 September, 2023",
      title: "Judul Blog 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
    },
  ];

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-tertiary-900">
          Popular Blog
        </h2>
        <div className="flex items-center space-x-8">
          <button onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="text-tertiary-500">See All</button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={cardStyle}
            className="grid grid-cols-1 gap-5 p-2 -mt-6"
          >
            <div
              className="rounded shadow-lg"
              style={{
                position:
                  index === 0 || index === 1 || index === 2
                    ? "relative"
                    : "static",
                left: index === 0 || index === 1 || index === 2 ? "-60px" : "0",
              }}
            >
              <div className="p-4 mt-2">
                <img
                  style={imageStyle}
                  className="w-full object-cover rounded-xl"
                  src={card.image}
                  alt={card.title}
                />
              </div>

              <div className="px-6 py-4">
                <div className="text-sm mb-2 flex items-center">
                  <img src={location} alt="location" className="mr-1" />
                  <span className="text-primary-500">{card.date}</span>
                </div>
                <div className="font-semibold text-primary-900 text-xl my-2">
                  {card.title}
                </div>
                <p className="text-tertiary-300 text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselBlog;
