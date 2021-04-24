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

const Modal = ({ showModal, toggleModal }) => {
  const enterScreen = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-150%)",
    scaleY: showModal ? "1" : "0.0000001",
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
        return <TravelSite toggleModal={toggleModal} />;
      case "2":
        return <GhostRacer toggleModal={toggleModal} />;
      case "3":
        return <PersonalSite toggleModal={toggleModal} />;
      case "4":
        return <WindowsWallpapers toggleModal={toggleModal} />;
      case "5":
        return <YoutubeExtension toggleModal={toggleModal} />;
      case "6":
        return <ImprovementInitiative toggleModal={toggleModal} />;
      case "7":
        return <Controls toggleModal={toggleModal} />;
      case "8":
        return <ProductionAnalysis toggleModal={toggleModal} />;
      case "9":
        return <CoolingTower toggleModal={toggleModal} />;
      case "10":
        return <ResumeBuilder toggleModal={toggleModal} />;
      case "11":
        return <ProcessModel toggleModal={toggleModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-wrapper modal-xl">
      <animated.div className="modal-info" id="modal" style={enterScreen}>
        <div className="modal-content">
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
        </div>
      </animated.div>
    </div>
  );
};

export default Modal;
