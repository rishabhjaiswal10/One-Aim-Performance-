import React from "react";
import sponsor1 from "../assets/img/sponsors1.png";
import sponsor2 from "../assets/img/sponsors2.png";
import sponsor3 from "../assets/img/sponsors3.png";
import sponsor4 from "../assets/img/sponsors4.png";
import sponsor5 from "../assets/img/sponsors5.png";

export default function Sponsors() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <section className="sponsor section" id="sponsor">
      <div className="sponsor__container container grid">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor__content" key={index}>
            <img src={sponsor} alt={`Sponsor ${index + 1}`} className="sponsor__img" />
          </div>
        ))}
      </div>
    </section>
  );
}
