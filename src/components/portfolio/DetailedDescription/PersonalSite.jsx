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
          <img
            src="./assets/portfolio/portfolio_site_modal.jpg"
            className="img-fluid "
            alt="Travel Website"
          />
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Built a personal portfolio website using React.js, react-spring
                for animations, Bootstrap, and react-typed. Applied hooks to
                manage page states, control animations, and adjust rendered page
                data (such as this Modal!)
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <em>Single Page Application: </em> <br></br>
                    Used hooks to manage states and properties of the page, such
                    as toggling gifs, what data to render, and filtering my
                    portfolio
                  </li>
                  <li>
                    <em>Animations:</em> <br></br>
                    Used hooks to create various animations with React-Spring.
                    On page change, I apply a transition to translate the older
                    page out of the screen, and the newer page into the screen.
                    Similar transitions are used for hiding resume sections and
                    portfolio modals
                  </li>
                  <li>
                    <em> Portfolio Page:</em> <br></br>
                    All experiences are filtered with hooks, based on a static
                    json file. Upon click of a modal, the key is passed to a
                    Modal component that renders the correct detailed page for
                    experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>{" "}
                <a
                  href="https://github.com/AntonyXXu/AntonyXXu.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the Code!
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
