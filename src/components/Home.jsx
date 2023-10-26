/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";
import Carousel from "./Carousel";
import CarouselEvent from "./CarouselEvent";
import Divider from "./Divider";

function Home() {
  return (
    <div>
      <Navbar />

      <Container>
        <Hero />
        <Divider />
        <div className="relative bg-white">
          <Carousel />
          <div className="mt-16">
            <CarouselEvent />
            <br />
          </div>
          <Divider />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Container>
    </div>
  );
}

export default Home;
