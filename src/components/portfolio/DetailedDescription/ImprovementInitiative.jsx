const ImprovementInitiative = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">
          Reducing Environmental Waste and Improving process Utilization through
          Cross Functional Coordination (in progress)
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
        <div className="col-lg-4">{/* Image */}</div>
        <div className="col-lg-8">
          <div className="modal-body">
            <p>
              After identifying various plant vulnerabilities from trending data
              and performing a risk analysis, I lead a cross-refinery team to
              test historical limits on high risk equipment. Ultimately, through
              the collaborative efforts of the engineering team, we were able to
              gather valuable data and improve boiler burner utilization by
              ~20%. In parallel, I worked with an external team of water
              treatment specialists to plan testing on regeneration cycles
              within water treatment, and ultimately implemented changes that
              reduced salt usage and wastewater salt content by 30%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovementInitiative;
