import React, { useEffect } from "react";
import Controls from "./DetailedDescription/Controls";
import CoolingTower from "./DetailedDescription/CoolingTower";
import ImprovementInitiative from "./DetailedDescription/ImprovementInitiative";
import GhostRacer from "./DetailedDescription/GhostRacer";
import ProcessModel from "./DetailedDescription/ProcessModel";
import ProductionAnalysis from "./DetailedDescription/ProductionAnalysis";
import ResumeBuilder from "./DetailedDescription/ResumeBuilder";
import TravelSite from "./DetailedDescription/TravelSite";
import WindowsWallpapers from "./DetailedDescription/WindowsWallpapers";
import YoutubeExtension from "./DetailedDescription/YoutubeExtension";
import PersonalSite from "./DetailedDescription/PersonalSite";
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

  const GetExperience = () => {
    switch (showModal) {
      case "1":
        return <TravelSite />;
      case "2":
        return <GhostRacer />;
      case "3":
        return <WindowsWallpapers />;
      case "4":
        return <PersonalSite />;
      case "5":
        return <YoutubeExtension />;
      case "6":
        return <ImprovementInitiative />;
      case "7":
        return <Controls />;
      case "8":
        return <ProductionAnalysis />;
      case "9":
        return <CoolingTower />;
      case "10":
        return <ResumeBuilder />;
      case "11":
        return <ProcessModel />;
      default:
        return <TravelSite />;
    }
  };

  return (
    <div className="modal-wrapper modal-xl">
      <div className="modal-info">
        <animated.div className="modal-content" style={enterScreen}>
          {/* modal info */}
          <GetExperience />
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
