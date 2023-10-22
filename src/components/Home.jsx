/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
//import Slider from "./Slider";
import Container from "./Container";

function Home() {
  return (
    <div className="min-h-screen bg-gray-500">
      <Navbar />

      <Container>
        <Hero />
      </Container>
    </div>
  );
}

export default Home;
