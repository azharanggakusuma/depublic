/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeroImage from "../assets/img/hero.png";
import MenuSlider from "./MenuSlider"; 

function Hero() {
  return (
    <div className="lg:pr-4 pl-4 pt-4 pb-4 mt-16 bg-survece-500">
      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Search Activities"
          className="w-full p-2 pl-12 relative border border-gray-400 bg-white rounded-lg bg-transparent backdrop-blur-sm bg-opacity-50"
        />
        <div className="absolute left-3 top-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 -mt-20">
        <div>
          <h1 className="text-3xl font-semibold -mt-5 w-title">
            All Tickets in One Place
          </h1>
          <button className="px-4 py-2 mt-6 bg-primary-500 hover:bg-primary-700 transition duration-300 text-white text-sm font-semibold rounded-lg">
            Download Aplikasi
          </button>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="Gambar"
            className="w-hero-image h-hero-image ml-4"
          />
        </div>
      </div>

      <div className="-mt-16 relative mb-5 ml-2 mr-2">
        <MenuSlider />
      </div>
    </div>
  );
}

export default Hero;
