/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";
import Carousel from "./Carousel";
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
