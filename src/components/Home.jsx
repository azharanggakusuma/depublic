/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";
import Carousel from "./Carousel";

function Home() {
  return (
    <div>
      <Navbar />

      <Container>
        <Hero />
        <div className="relative bg-white">
          <Carousel />
          <br /><br /><br /><br /><br />
        </div>
      </Container>
    </div>
  );
}

export default Home;
