import React, { useState, useRef } from "react";
import dhruvImg from "../assets/img/TeamMembers/Dhruv.jpeg";
import japkrishImg from "../assets/img/TeamMembers/Japkrish.jpeg";
import jayImg from "../assets/img/TeamMembers/Jay Davane.jpeg";
import nirbhayImg from "../assets/img/TeamMembers/Nirbhay.jpeg";
import pranavImg from "../assets/img/TeamMembers/Pranav Haryan.jpeg";
import sumeetImg from "../assets/img/Sumeet Jaiswal.jpeg";
import japkrishVideo from "../assets/vid/Japkrish_intro.mp4";
import nirbhayVideo from "../assets/vid/Nirbhay_intro.mp4";
import sumeetVideo from "../assets/vid/Sumeet_intro.mp4";

const ROLE_FOUNDER = "Founder & Head Coach";
const ROLE_SENIOR = "Senior Strength and Conditioning Specialist";
const ROLE_JUNIOR = "Strength and Conditioning Coach";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef(null);

  const teamTiers = [
    {
      id: "peak",
      tierLabel: null,
      rowClass: "team__tier-row team__tier-row--peak",
      members: [
        {
          id: "sumeet",
          name: "Sumeet Urmila Krishna Jaiswal",
          role: ROLE_FOUNDER,
          image: sumeetImg,
          video: sumeetVideo,
        },
      ],
    },
    {
      id: "senior",
      tierLabel: ROLE_SENIOR,
      rowClass: "team__tier-row team__tier-row--senior",
      members: [
        {
          id: "jay",
          name: "Jay Davane",
          role: ROLE_SENIOR,
          image: jayImg,
          video: null,
        },
        {
          id: "nirbhay",
          name: "Nirbhay Kahar",
          role: ROLE_SENIOR,
          image: nirbhayImg,
          video: nirbhayVideo,
        },
        {
          id: "japkrish",
          name: "Japkrish Sethi",
          role: ROLE_SENIOR,
          image: japkrishImg,
          video: japkrishVideo,
        },
      ],
    },
    {
      id: "junior",
      tierLabel: ROLE_JUNIOR,
      rowClass: "team__tier-row team__tier-row--junior",
      members: [
        {
          id: "dhruv",
          name: "Dhruv Vaghasiya",
          role: ROLE_JUNIOR,
          image: dhruvImg,
          video: null,
        },
        {
          id: "pranav",
          name: "Pranav Haryan",
          role: ROLE_JUNIOR,
          image: pranavImg,
          video: null,
        },
      ],
    },
  ];

  const handleOpenModal = (member) => {
    if (!member.video) return;
    setSelectedMember(member);
    setIsModalOpen(true);
    setIsMuted(false);

    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play().catch(() => {
          // Autoplay might be blocked; user can press play manually
        });
      }
    }, 150);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = nextMuted;
    }
  };

  return (
    <section className="team section" id="team">
      <div className="team__container container">
        <h2 className="section__title team__title">Our Team</h2>
        <p className="team__subtitle">
          Meet the professionals behind One Aim Performance who support athletes
          on their journey from grassroots to elite level.
        </p>

        <div className="team__pyramid">
          {teamTiers.map((tier) => (
            <div key={tier.id} className="team__tier">
              {tier.tierLabel && (
                <p className="team__tier-label">{tier.tierLabel}</p>
              )}
              <div className={tier.rowClass}>
                {tier.members.map((member) => (
                  <div
                    key={member.id}
                    id={`team-member-${member.id}`}
                    className={`team__card ${member.video ? "team__card--clickable" : ""}`}
                    onClick={() => handleOpenModal(member)}
                  >
                    <div className="team__card-media">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team__card-image"
                      />
                      {member.video && (
                        <div className="team__card-overlay">
                          <div className="team__card-play-indicator">
                            <i className="ri-play-circle-line"></i>
                            <span>View intro video</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="team__card-info">
                      <h3 className="team__card-name">{member.name}</h3>
                      <p className="team__card-role">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedMember && selectedMember.video && (
        <div className="team__modal">
          <div
            className="team__modal-backdrop"
            onClick={handleCloseModal}
          ></div>
          <div className="team__modal-content">
            <button
              className="team__modal-close"
              type="button"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            <h3 className="team__modal-name">{selectedMember.name}</h3>
            <p className="team__modal-role">{selectedMember.role}</p>

            <div className="team__modal-video-wrapper">
              <video
                ref={modalVideoRef}
                src={selectedMember.video}
                className="team__modal-video"
                controls
                muted={isMuted}
              />

              <button
                className="team__modal-mute-toggle"
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <i className="ri-volume-mute-fill"></i>
                ) : (
                  <i className="ri-volume-up-fill"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
