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
  };

  const cardStyle = {
    width: "370px", 
    height: "370px", 
  };

  const imageStyle = {
    height: "150px",
  };

  const cards = [
    {
      image: image1,
      location: "Mountain Peak",
      date: "12 June, 2023",
      title: "Hiking Adventure",
      description:
        "Join us for an exciting hiking adventure to the Mountain Peak. Explore the breathtaking views and enjoy.",
      price: "IDR 1.999.000",
      person: "/1 Person",
      available: true,
    },
    {
      image: image2,
      location: "Riverfront",
      date: "5 July, 2023",
      title: "River Rafting",
      description:
        "Experience the thrill of river rafting on the roaring river. An unforgettable adventure for water enthusiasts.",
      price: "IDR 1.999.000",
      person: "/1 Person",
      available: false,
    },
    {
      image: image1,
      location: "Deep Forest",
      date: "20 September, 2023",
      title: "Forest Trek",
      description:
        "Embark on a forest trek through the lush greenery and discover the wonders of the deep forest.",
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
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <div className="flex items-center space-x-5">
          <button onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="text-black">See All</button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={cardStyle}
            className="grid grid-cols-1 gap-5 p-4 -mt-6"
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
                <div className="text-md mb-2">
                  <FontAwesomeIcon icon={faMapMarker} className="" />{" "}
                  <span>{card.location}</span> |{" "}
                  <span className="text-primary-500">{card.date}</span>
                </div>
                <div className="font-bold text-2xl my-2">{card.title}</div>
                <p className="text-gray-700 text-sm">{card.description}</p>
                <div className="text-xl my-2 mb-5">
                  <span className="text-primary-500 font-bold ">
                    {card.price}
                  </span>{" "}
                  <span className="text-gray-400">{card.person}</span>
                </div>
                {card.available ? (
                  <button className="w-full mx-auto bg-gray-300 hover:bg-gray-400 text-green-500 hover:text-green-600 font-semibold py-2 px-4 rounded-full">
                    Tersedia
                  </button>
                ) : (
                  <button className="w-full mx-auto bg-gray-300 hover:bg-gray-400 text-red-500 hover:text-red-600 font-semibold py-2 px-4 rounded-full">
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
