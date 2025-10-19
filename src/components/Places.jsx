import React from "react";
import place1 from "../assets/img/place1.jpg";
import place2 from "../assets/img/place2.jpg";
import place3 from "../assets/img/place3.jpg";
import place4 from "../assets/img/place4.jpg";
import place5 from "../assets/img/place5.jpg";

export default function Places() {
  const places = [
    { id: 1, title: "Bali", subtitle: "Indonesia", price: "$2499", rating: "4.8", img: place1 },
    { id: 2, title: "Bora Bora", subtitle: "Polinesia", price: "$1599", rating: "5.0", img: place2 },
    { id: 3, title: "Hawaii", subtitle: "EE.UU", price: "$3499", rating: "4.9", img: place3 },
    { id: 4, title: "Whitehaven", subtitle: "Australia", price: "$2499", rating: "4.8", img: place4 },
    { id: 5, title: "Hvar", subtitle: "Croacia", price: "$1999", rating: "4.8", img: place5 },
  ];

  return (
    <section className="place section" id="place">
      <h2 className="section__title">Choose Your Place</h2>

      <div className="place__container container grid">
        {places.map((place) => (
          <div className="place__card" key={place.id}>
            <img src={place.img} alt={place.title} className="place__img" />

            <div className="place__content">
              <span className="place__rating">
                <i className="ri-star-line place__rating-icon"></i>
                <span className="place__rating-number">{place.rating}</span>
              </span>

              <div className="place__data">
                <h3 className="place__title">{place.title}</h3>
                <span className="place__subtitle">{place.subtitle}</span>
                <span className="place__price">{place.price}</span>
              </div>
            </div>

            <a href="#booking">
              <button className="button button--flex place__button">
                <i className="ri-arrow-right-line"></i>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
