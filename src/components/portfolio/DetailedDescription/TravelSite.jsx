const TravelSite = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Building a Travel Booking Website in Node.js and Express.js
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
        <div className="col-lg-4 modal-img">
          <img
            src={"./assets/portfolio/travel_sitePkgs.jpg"}
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
                Used PUG/Jade for front end templates, and Node.js, Express.js
                for back-end. Database was built with MongoDB, and
                login/encryption used Passport and Bcrypt respectively.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <strong>User Functionalities:</strong> <br></br>
                    Users can login/register, and 'purchase' various travel
                    packages. They can also view their previous packages they
                    have purchased. There are admin functionalities for admins
                    who would like to create brand new packages.
                  </li>
                  <li>
                    <strong> Travel Locations and Packages:</strong> <br></br>
                    Users can view filtered locations based on three continents,
                    and view their respective travel packages (Users must be
                    logged in to purchase). Packages can be created as well to
                    add to or update the database. Outdated packages are
                    filtered and no longer rendered. Users can add reviews to
                    each location, and can delete their own reviews. Average
                    ratings of the packages are tracked
                  </li>
                  <li>
                    <strong> Database:</strong> <br></br>
                    All pages are rendered based on the database data. The
                    database logs user history, package history, and purchase
                    history to allow for tracking of regularly purchased
                    packages, and user preferences. Review Schema is embedded
                    within the packages Schema as a subdocument
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
                  View the site!
                </a>
                <p>Try username: a, password: a </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelSite;
