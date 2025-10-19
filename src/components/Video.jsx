import React from "react";
import videoFile from "../assets/video/video.mp4";

export default function Video() {
  return (
    <section className="video section" id="video">
      <h2 className="section__title">Video Tour</h2>

      <div className="video__container container">
        <p className="video__description">
          Find out more with our video of the most beautiful and pleasant places
          for you and your family.
        </p>

        <div className="video__content">
          {/* The actual video */}
          <video id="video-file">
            <source src={videoFile} type="video/mp4" />
          </video>

          {/* Play/Pause Button */}
          <button className="button button--flex video__button" id="video-button">
            <i className="ri-play-line video__button-icon" id="video-icon"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
