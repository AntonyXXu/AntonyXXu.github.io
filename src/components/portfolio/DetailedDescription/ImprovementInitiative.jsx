const ImprovementInitiative = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">
          Reducing Environmental Waste and Improving Chemicals Use
        </h5>
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
        <div className="col-lg-4 modal-img align-items-center justify-content-center">
          <img
            src="./assets/portfolio/strathcona_cogen.jpg"
            className="img-fluid "
            alt="refinery"
          />
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Background:</strong>
                <br></br>
                Operational plants (especially those older than 50yo) often have
                equipment degradation, and conservative operating conditions
                resulting in excess spending. I worked on various improvement
                projects within utilities to minimize chemical usage to reduce
                wastewater concentrations and reduce spending.
              </li>
              <li>
                <strong>Actions:</strong>
                <br></br>
                <ul>
                  <li>
                    <em> Environmental Testing:</em> <br></br>I worked with
                    external specialists on our water treatment technologies.
                    After coordinating operations timing, subject matter experts
                    availability, and maintenance timing, I drafted a test plan
                    with minimal operations risk to test the chemicals limits of
                    the water system without impacting performance. From the
                    testing, we adjusted operating parameters to reduce salt
                    spending and wastewater chlorides by 40%.
                  </li>
                  <li>
                    <em> Chemicals Reduction:</em> <br></br>I worked with a
                    distillation engineer to commission a project to change
                    water routing to the process unit. This was not something
                    that was done in 50 years of plant operations, and had
                    caused constraints in chemical spending due to lost cooling
                    water use and dilution of treatment chemicals. Through
                    challenging historical operations and implementing new
                    operating bands, we were able to reduce cooling water
                    chemical spending by $150k/year
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovementInitiative;
