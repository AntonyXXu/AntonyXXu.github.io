import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Modal = ({ showModal, toggleModal }) => {
  const enterScreen = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    config: {
      duration: 250,
    },
  });

  //   if (!showModal) {
  //     return null;
  //   }

  return (
    <animated.div
      className="modal-wrapper modal-dialog modal-lg"
      style={enterScreen}
    >
      <div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details About ____</h5>
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
          <div className="modal-body">
            <p>Modal body text goes here.</p>
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
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
