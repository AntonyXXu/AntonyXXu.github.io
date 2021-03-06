const PersonalSite = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Creating my Portfolio Website in React.js
        </h4>
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
        <div className="col-lg-6 modal-img">
          <img
            src="./assets/portfolio/portfolio_site_modal.jpg"
            className="img-fluid "
            alt="Portfolio Site"
          />
        </div>
        <div className="col-lg-6">
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
                    <strong>Single Page Application: </strong> <br></br>
                    Used hooks to manage states and properties of the page, such
                    as toggling gifs, what data to render, and filtering my
                    portfolio
                  </li>
                  <li>
                    <strong>Animations:</strong> <br></br>
                    Used hooks to create various animations with React-Spring.
                    On page change, I apply a transition to translate the older
                    page out of the screen, and the newer page into the screen.
                    Similar transitions are used for hiding resume sections and
                    portfolio modals
                  </li>
                  <li>
                    <strong> Portfolio Page:</strong> <br></br>
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
