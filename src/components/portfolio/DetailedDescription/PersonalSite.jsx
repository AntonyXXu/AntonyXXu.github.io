const PersonalSite = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
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
        <div className="col-lg-4 modal-img">
          <img src="" className="img-fluid " alt="Travel Website" />
          <br></br>
          Toggle Gif
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Built a personal portfolio website using React.js, react-spring
                for animations, Bootstrap,
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    Gameplay: <br></br>
                    Player is the red car, looking to contact spinning blue
                    souls to beat the level. Contacting smaller pedestrians or
                    losing all health will end the level. You can shoot holy
                    water to kill zombies and zombie cabs.
                  </li>
                  <li>
                    Actors (Objects) in the game: <br></br>
                    All actors are derived from an "Actors" base class. They are
                    rendered, and perform tasks through a virtual doSomething()
                    function that is called in the overall game world.
                  </li>
                  <li>
                    Game World: <br></br>
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

export default PersonalSite;
