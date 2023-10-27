import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/img/carousel/image-1.png";
import image2 from "../assets/img/carousel/image-2.png";
import location from "../assets/img/icon/location.png";

function CarouselCard() {
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
      location: "CIREBON",
      date: "12 June, 2023",
      title: "Judul Event 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
      price: "IDR 1.999.000",
      person: "/1 Person",
      available: true,
    },
    {
      image: image2,
      location: "CIREBON",
      date: "5 July, 2023",
      title: "Judul Event 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
      price: "IDR 1.999.000",
      person: "/1 Person",
      available: false,
    },
    {
      image: image1,
      location: "CIREBON",
      date: "20 September, 2023",
      title: "Judul Event 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sapiente adipisci corporis ipsum qui provident magnam iure repellat nulla quis.",
      price: "IDR 1.999.000",
      person: "/1 Person",
      available: true,
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
          Upcoming Events
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
                  <span className="text-neutral-500">{card.location}</span>
                  <span className="mx-2 text-neutral-500">|</span>
                  <span className="text-primary-500">{card.date}</span>
                </div>
                <div className="font-semibold text-primary-900 text-xl my-2">
                  {card.title}
                </div>
                <p className="text-tertiary-300 text-sm">{card.description}</p>
                <div className="text-xl my-2 mb-5">
                  <span className="text-primary-500 font-bold ">
                    {card.price}
                  </span>{" "}
                  <span className="text-tertiary-500">{card.person}</span>
                </div>
                {card.available ? (
                  <button className="w-full mx-auto bg-success-50 hover:bg-success-200 text-success-900 hover:text-success-600 transition duration-300 py-2 px-4 rounded-full">
                    Tersedia
                  </button>
                ) : (
                  <button className="w-full mx-auto bg-danger-100 hover:bg-danger-200 text-danger-900 hover:text-danger-600 transition duration-300 py-2 px-4 rounded-full">
                    Tidak Tersedia
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselCard;
