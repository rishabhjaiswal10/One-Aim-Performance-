import React from "react";
import useMainEffects from "./hooks/useMainEffects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Services from "./components/Services";
import Contact from "./components/Contact";
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
          <Programs />
          <Services />
          <Contact />
        </main>
      </div>

      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon"></i>
      </a>
    </>
  );
}
