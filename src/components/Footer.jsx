import React from "react";
import LogoFooter from "../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <footer
      className="py-8 p-6"
      style={{ background: "linear-gradient(#6B028D, #360146)" }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-5">
          <div className="flex items-center">
            <img src={LogoFooter} alt="Logo" className="w-6 h-6 mb-2" />
            <p className="text-survace-100 text-2xl mb-2 ml-2 font-sans font-bold">
              depublic.
            </p>
          </div>

          <p className="text-survace-100 text-xs mb-5 mt-5">
            "Tagline Perusahaan"
          </p>
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center">
              <a
                href="#"
                className="text-survace-100 hover:text-gray-400 transition duration-300"
              >
                <i
                  className="fab fa-facebook"
                  style={{ fontSize: "1.1rem" }}
                ></i>
              </a>
            </div>

            <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center">
              <a
                href="#"
                className="text-survace-100 hover:text-gray-400 transition duration-300"
              >
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "1.1rem" }}
                ></i>
              </a>
            </div>

            <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center">
              <a
                href="#"
                className="text-survace-100 hover:text-gray-400 transition duration-300"
              >
                <i
                  className="fab fa-linkedin"
                  style={{ fontSize: "1.1rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col text-sm">
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
          </div>
          <div className="flex flex-col text-sm">
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
            <a
              href="#"
              className="text-survace-100 hover:text-gray-400 transition duration-300"
            >
              Lorem Ipsum
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-blueGray-400 my-4" />
      <div className="container mx-auto text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Azharangga Kusuma. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
