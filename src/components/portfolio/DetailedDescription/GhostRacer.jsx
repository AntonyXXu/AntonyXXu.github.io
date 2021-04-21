import React, { useState } from "react";

const GhostRacer = ({ toggleModal }) => {
  const [gif, updategif] = useState(true);
  const setgif = () => updategif(!gif);

  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Implementing OOP in a C++ Game</h4>
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
        <div className="col-lg-4 modal-img" onClick={setgif}>
          <img
            src={
              !gif
                ? "./assets/portfolio/ghostracer_modal.png"
                : "./assets/portfolio/ghostracer_modal.gif"
            }
            className="img-fluid "
            alt="Ghost Racer Game"
          />
          <br></br>
          Toggle Gif
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Built a 2-D driving game in C++. Project is based on an UCLA
                DS&amp;A school project to implement all aspects of object
                oriented programming. Utilizes two primary classes, Actor and
                World to manage all logic within the game. I created the
                Actor.h, Actor.cpp, StudentWorld.h, and StudentWorld.cpp files.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <em> Gameplay:</em> <br></br>
                    Player is the red car, looking to contact spinning blue
                    souls to beat the level. Contacting smaller pedestrians or
                    losing all health will end the level. You can shoot holy
                    water to kill zombies and zombie cabs.
                  </li>
                  <li>
                    <em> Actors (Objects) in the game:</em> <br></br>
                    All actors are derived from an "Actors" base class. They are
                    rendered, and perform tasks through a virtual doSomething()
                    function that is called in the overall game world.
                  </li>
                  <li>
                    <em> Game World: </em>
                    <br></br>
                    All Actors are kept track of in the world through various
                    lists, and are constructed/destructed in this class. In
                    addition, this world manages all Actor locations and detects
                    collisions between the interactable actors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>{" "}
                <a
                  href="https://github.com/AntonyXXu/GhostRacer-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the game!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GhostRacer;
