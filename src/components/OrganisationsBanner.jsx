import React, { useEffect, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const orgLogos = Object.entries(
  import.meta.glob("../assets/img/Sports Organisations/*.{jpeg,jpg,png}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

function LogoTile({ src, index, onOpen }) {
  return (
    <button
      type="button"
      className="organisations-banner__logo-wrap"
      onClick={() => onOpen(src)}
      aria-label={`Enlarge partner logo ${index + 1}`}
    >
      <img src={src} alt="" loading="lazy" decoding="async" />
    </button>
  );
}

export default function OrganisationsBanner() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedSrc, setSelectedSrc] = useState(null);

  useEffect(() => {
    if (!selectedSrc) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedSrc(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedSrc]);

  if (!orgLogos.length) return null;

  return (
    <div className="organisations-banner">
      <div className="organisations-banner__head container">
        <h3 className="organisations-banner__title">
          Organisations we&apos;ve worked with
        </h3>
      </div>
      <div
        className="organisations-banner__viewport"
        role="region"
        aria-label="Partner organisation logos"
      >
        <div
          className={
            prefersReducedMotion
              ? "organisations-banner__strip organisations-banner__strip--static"
              : "organisations-banner__strip"
          }
        >
          {orgLogos.map((src, i) => (
            <LogoTile key={`a-${i}`} src={src} index={i} onOpen={setSelectedSrc} />
          ))}
          {!prefersReducedMotion &&
            orgLogos.map((src, i) => (
              <LogoTile
                key={`b-${i}`}
                src={src}
                index={i + orgLogos.length}
                onOpen={setSelectedSrc}
              />
            ))}
        </div>
      </div>

      {selectedSrc && (
        <div
          className="organisations-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Organisation logo"
        >
          <div
            className="organisations-modal__backdrop"
            onClick={() => setSelectedSrc(null)}
            aria-hidden="true"
          />
          <div className="organisations-modal__content">
            <button
              type="button"
              className="organisations-modal__close"
              onClick={() => setSelectedSrc(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedSrc}
              alt="Partner organisation logo"
              className="organisations-modal__img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
