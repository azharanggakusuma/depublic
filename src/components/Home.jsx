/* eslint-disable no-unused-vars */
import react from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Navbar />

      <Container>
        <Hero />
      </Container>
    </div>
  );
}

export default Home;
