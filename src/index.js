import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav";
import Home from "./routes/home/Home.js";
import Destination from "./routes/destination/Destination.js";
import Crew from "./routes/crew/Crew";
import Technology from "./routes/technology/Technology";
import Footer from "./commonComponents/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
