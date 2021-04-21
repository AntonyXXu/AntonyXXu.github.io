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

  const getExperience = () => {
    console.log(showModal);
    switch (showModal) {
      case 1:
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
        setModal(0);
        break;
    }
  };

  return (
    <div className="modal-wrapper modal-xl">
      <div className="modal-info">
        <animated.div className="modal-content" style={enterScreen}>
          {/* modal info */}
          <div className="modal-header">
            <h4 className="modal-title">Details About ____</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="row">
            <div className="col-lg-4">{/* Image */}</div>
            <div className="col-lg-8">
              <div className="modal-body">
                <p>{/* Text */}</p>
              </div>
            </div>
          </div>
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
