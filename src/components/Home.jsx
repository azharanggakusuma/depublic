/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";
import MenuSlider from "./MenuSlider";

function Home() {
  return (
    <div>
      <Navbar />

      <Container>
        <Hero />

        <div className="p-4 bg-white min-h-full">
          <MenuSlider />
        </div>
      </Container>
    </div>
  );
}

export default Home;
