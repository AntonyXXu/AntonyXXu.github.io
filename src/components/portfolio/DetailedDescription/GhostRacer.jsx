const GhostRacer = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Implementing OOP in C++</h4>
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
            src={"./assets/portfolio/travel_sitePkgs.jpg"}
            className="img-fluid "
            alt="Travel Website"
          />
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <p>
              <ul>
                <li>
                  <strong>Technologies:</strong>
                  <br></br>
                  Built a 2-D driving game in C++. Project is based on an UCLA
                  DS&amp;A school project. Utilizes two primary classes, Actor
                  and World to manage all logic within the game.
                </li>
                <li>
                  <strong>Functionalities</strong>
                  <br></br>
                  <ul>
                    <li>
                      User Functionalities: Users can login/register, and
                      'purchase' various travel packages. They can also view
                      their previous packages they have purchased. There are
                      admin functionalities for admins who would like to create
                      brand new packages
                    </li>
                    <li>
                      Travel Locations and Packages: Users can view filtered
                      locations based on three continents, and view their
                      respective travel packages (Users must be logged in to
                      purchase). Packages can be created as well to add to or
                      update the database. Outdated packages are filtered and no
                      longer rendered
                    </li>
                    <li>
                      Database: All pages are rendered based on the database
                      data. The database logs user history, package history, and
                      purchase history to allow for tracking of regularly
                      purchased packages, and user preferences.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Link:</strong>{" "}
                  <a
                    href="https://travelsite-antony.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View the site! Try username a, password a to test it out.
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GhostRacer;
