import React, { useEffect, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const sessionImages = Object.entries(
  import.meta.glob("../assets/img/Sessions/*.{jpeg,jpg}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const SLIDE_INTERVAL_MS = 4200;

export default function About() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || sessionImages.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % sessionImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        {/* About text */}
        <div className="about__data">
          <h2 className="section__title about__title">
            About <br /> One Aim Performance
          </h2>

          <p className="about__description">
            We are a sports science firm that primarily focuses on athletes at the grassroots level to enhance performance. The designed programs are evidence-based and athlete-centric, which helps athletes level up their performance in their respective sport while reducing the chance of injuries.
          </p>

          <div className="about__vision-mission">
            <div className="about__vision">
              <h3 className="about__subtitle">Vision</h3>
              <ul className="about__list">
                <li>To Guide athletes at the grassroot level</li>
                <li>To unlock their true athletic potential through scientific and result-oriented approach</li>
              </ul>
            </div>

            <div className="about__mission">
              <h3 className="about__subtitle">Mission</h3>
              <ul className="about__list">
                <li>Provide quality fitness experiences for everyone</li>
                <li>Customize programs to meet each member&apos;s needs</li>
                <li>Cultivate a supportive and uplifting fitness community</li>
              </ul>
            </div>
          </div>

          <a href="#contact" className="button">
            Get Started
          </a>
        </div>

        {/* Sports sessions — rotating gallery */}
        <div className="about__sessions">
          <p className="about__sessions-label">Sports sessions</p>
          {prefersReducedMotion || sessionImages.length === 0 ? (
            <div className="about__sessions-static">
              {sessionImages.length > 0 ? (
                sessionImages.map((src, i) => (
                  <div key={i} className="about__sessions-static-item">
                    <img
                      src={src}
                      alt={`Training session ${i + 1} at One Aim Performance`}
                    />
                  </div>
                ))
              ) : null}
            </div>
          ) : (
            <>
              <div className="about__sessions-viewport">
                {sessionImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Training session ${i + 1} at One Aim Performance`}
                    className={
                      i === active
                        ? "about__sessions-slide about__sessions-slide--active"
                        : "about__sessions-slide"
                    }
                  />
                ))}
              </div>
              {sessionImages.length > 1 && (
                <nav
                  className="about__sessions-dots"
                  aria-label="Session photos"
                >
                  {sessionImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={
                        i === active
                          ? "about__sessions-dot about__sessions-dot--active"
                          : "about__sessions-dot"
                      }
                      aria-label={`Show session photo ${i + 1}`}
                      aria-current={i === active ? "true" : undefined}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
