import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Modal = ({ showModal, toggleModal }) => {
  const enterScreen = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    config: {
      duration: 350,
    },
  });

  useEffect(() => {
    if (showModal) {
      window.scrollTo(0, 0);
    }
  }, [showModal]);

  return (
    <div className="modal-wrapper modal-dialog modal-xl">
      <animated.div className="modal-info" style={enterScreen}>
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
            <p>
              Modal body text goes here. asdf asdf sadf asdf asdf asdf sadf
              asdfa sdf Modal body text goes here. asdf asdf sadf asdf asdf asdf
              sadf asdfa sdf Modal body text goes here. asdf asdf sadf asdf asdf
              asdf sadf asdfa sdf Modal body text goes here. asdf asdf sadf asdf
              asdf asdf sadf
            </p>
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
      </animated.div>
    </div>
  );
};

export default Modal;
