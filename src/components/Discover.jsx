import React from "react";
import discover1 from "../assets/img/discover1.jpg";
import discover2 from "../assets/img/discover2.jpg";
import discover3 from "../assets/img/discover3.jpg";
import discover4 from "../assets/img/discover4.jpg";

export default function Discover() {
  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">
        Discover the most <br /> attractive places
      </h2>

      <div className="discover__container container swiper-container">
        <div className="swiper-wrapper">
          {/* ======== Discover 1 ======== */}
          <div className="discover__card swiper-slide">
            <img src={discover1} alt="Bali" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Bali</h2>
              <span className="discover__description">24 tours available</span>
            </div>
          </div>

          {/* ======== Discover 2 ======== */}
          <div className="discover__card swiper-slide">
            <img src={discover2} alt="Hawaii" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hawaii</h2>
              <span className="discover__description">15 tours available</span>
            </div>
          </div>

          {/* ======== Discover 3 ======== */}
          <div className="discover__card swiper-slide">
            <img src={discover3} alt="Hvar" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Hvar</h2>
              <span className="discover__description">18 tours available</span>
            </div>
          </div>

          {/* ======== Discover 4 ======== */}
          <div className="discover__card swiper-slide">
            <img src={discover4} alt="Whitehaven" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Whitehaven</h2>
              <span className="discover__description">32 tours available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
