import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Stars from "./components/canvas/Stars";
import Certificates from "./components/certificates";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certificates />
        <Tech />
        {/* <Works /> */}
      </div>
    </BrowserRouter>
  );
}
