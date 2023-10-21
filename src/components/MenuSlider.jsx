/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageTicket from "../assets/img/slider_menu/ticket.png";
import imageRegistration from "../assets/img/slider_menu/registration.png";
import imageBooking from "../assets/img/slider_menu/booking.png";
import imageStore from "../assets/img/slider_menu/store.png";

const MenuSlider = () => {
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    const ticketIndex = menuItems.findIndex((item) => item.label === "Ticket");
    setInitialSlide(ticketIndex);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: initialSlide,
  };

  const menuItems = [
    { image: imageTicket, label: "Ticket", width: "60px", height: "50px" },
    {
      image: imageRegistration,
      label: "Registration",
      width: "50px",
      height: "70px",
    },
    { image: imageBooking, label: "Booking", width: "50px", height: "50px" },
    { image: imageStore, label: "Store", width: "50px", height: "50px" },
    { image: imageStore, label: "Lorem", width: "50px", height: "50px" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Slider {...settings}>
        {menuItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex flex-col items-center">
              <div
                className="mb-2"
                style={{
                  width: item.width,
                  height: item.height,
                  marginTop: item.label === "Registration" ? "0" : "20px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className="text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuSlider; 
