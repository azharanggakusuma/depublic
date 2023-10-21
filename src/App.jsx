/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Container from "./components/Container";

function App() {
  return (
    <div className="min-h-screen bg-gray-500">
      <Navbar />

      <Container>
        <Hero />
      </Container>
      {/* Content of your app */}
    </div>
  );
}

export default App;
