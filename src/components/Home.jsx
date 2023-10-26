/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";
import Carousel from "./Carousel";
import CarouselEvent from "./CarouselEvent";
import CarouselBlog from "./CarouselBlog";
import Divider from "./Divider";
import Footer from "./Footer"; 

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
          <div>
            <CarouselBlog />
            <br />
          </div>
          <br />
          <div>
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
