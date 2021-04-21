import React, { useEffect } from "react";
import Controls from "./DetailedDescription/Controls";
import CoolingTower from "./DetailedDescription/CoolingTower";
import CrossFunctional from "./DetailedDescription/CrossFunctional";
import GhostRacer from "./DetailedDescription/GhostRacer";
import ProcessModel from "./DetailedDescription/ProcessModel";
import ProductionAnalysis from "./DetailedDescription/ProductionAnalysis";
import ResumeBuilder from "./DetailedDescription/ResumeBuilder";
import TravelSite from "./DetailedDescription/TravelSite";
import WindowsWallpapers from "./DetailedDescription/WindowsWallpapers";
import YoutubeExtension from "./DetailedDescription/YoutubeExtension";
import PersonalWebsite from "./DetailedDescription/PersonalWebsite";
import { useSpring, animated } from "react-spring";

const Modal = ({ showModal, setModal, toggleModal }) => {
  const enterScreen = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-150%)",
    zIndex: showModal ? 16 : -5,
    config: {
      duration: 250,
    },
    immediate: (key) => key === "zIndex",
  });

  useEffect(() => {
    if (showModal) {
      window.scrollTo(0, 0);
    }
  }, [showModal]);

  function getExperience() {
    console.log(showModal);
    switch (showModal) {
      case 1:
        console.log(showModal);
        return <TravelSite />;
      case 2:
        return <GhostRacer />;
      case 3:
        return <GhostRacer />;

      case 4:
        return <GhostRacer />;
      case 5:
        return <GhostRacer />;
      case 6:
        return <GhostRacer />;
      case 7:
        return <GhostRacer />;
      case 8:
        return <GhostRacer />;
      case 9:
        return <GhostRacer />;
      case 10:
        return <GhostRacer />;
      default:
        return;
    }
  }

  return (
    <div className="modal-wrapper modal-xl">
      <div className="modal-info">
        <animated.div className="modal-content" style={enterScreen}>
          {/* modal info */}
          {() => {
            console.log("test");
            return <GhostRacer />;
          }}

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Modal;
