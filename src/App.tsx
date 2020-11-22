import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Image1 from "./assets/space-1.jpg";
import Image2 from "./assets/space-2.jpg";
import Image3 from "./assets/space-3.jpg";
import Image4 from "./assets/space-4.jpg";
import Image5 from "./assets/space-5.jpg";
import Image6 from "./assets/space-6.jpg";
import Image7 from "./assets/space-7.jpg";
import Image8 from "./assets/space-8.jpg";

import Carousel from "../src/components/Carousel";

function App() {
  return (
    <div
      className="App"
      style={{ width: "300px", height: "300px", margin: "200px auto 0" }}
    >
      <Carousel>
        <img src={Image1} alt="space" />
        <img src={Image2} alt="space" />
        <img src={Image3} alt="space" />
        <img src={Image4} alt="space" />
        <img src={Image5} alt="space" />
        <img src={Image6} alt="space" />
        <img src={Image7} alt="space" />
        <img src={Image8} alt="space" />
      </Carousel>
    </div>
  );
}

export default App;
