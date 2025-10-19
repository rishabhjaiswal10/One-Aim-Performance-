import React from "react";
import useMainEffects from "./hooks/useMainEffects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Discover from "./components/Discover";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Booking from "./components/Booking";
import Places from "./components/Places";
import Subscribe from "./components/Subscribe";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

/*
  Stable structure:
  - Navbar is outside centered wrapper (so header spans full width if needed)
  - .page-wrapper centers the *content column* like the original static site
*/
export default function App() {
  useMainEffects();

  return (
    <>
      <Navbar />

      <div className="page-wrapper">          {/* centers content horizontally */}
        <main className="main">               {/* holds sections vertically */}
          <Home />
          <About />
          {/* <Discover /> */}
          <Experience />
          <Video />
          <Booking />
          <Places />
          <Subscribe />
          <Sponsors />
        </main>
      </div>

      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon"></i>
      </a>
    </>
  );
}
