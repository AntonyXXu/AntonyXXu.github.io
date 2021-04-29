const ProductionAnalysis = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Identifying a $50M/y vulnerability with Data Analytics
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
        <div className="col-lg-5 modal-img align-items-center justify-content-center">
          <img
            src="./assets/portfolio/production_details.jpg"
            className="img-fluid "
            alt="refinery"
          />
        </div>
        <div className="col-lg-7">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Background:</strong>
                <br></br>
                At Horizon Mine, there was an initiative to change the movement
                of oil sands to the processing plant from haul trucks to
                conveyor belts due to increasing distances of the mine
                locations. I was responsible for validating an ARENA production
                model, debugging it, and updating logic so it would accurately
                predict conveyor operations. Using a combination of Tableau and
                Python, I was able to identify a single point of failure in the
                proposed project that would have shut down plant operations for
                multiple weeks in a year
              </li>
              <li>
                <strong>Actions:</strong>
                <br></br>
                <ul>
                  <li>
                    <strong> Model Verification:</strong> <br></br>
                    To validate the ARENA model, I initially created a program
                    to run the model 100 iterations at a time (based on
                    reliability metrics), and used Python Pandas to work with
                    the millions of data points outputted from the model.
                    Comparing the results with live data and other validated
                    models, I had identified various small bugs within the new
                    model and proposed ways to resolve the issues.
                  </li>
                  <li>
                    <strong> Analysis Results:</strong> <br></br>
                    After I validated the results, I used the previous program
                    to run the model for over 1000 iterations with each
                    reliability metric to analyze the production risks and the
                    statistical significance. Through this analysis, I was able
                    to identify a critical component of the production conveying
                    system is a single point of failure, and if there was any
                    maintenance going on during a failure then the mine
                    production would end up shutting down for up to a week at a
                    time. With these findings, I worked with reliability and
                    mechanical to identify a solution for the project to change
                    up the supplemental conveyor setup, and justified the
                    necessity for a spare crusher system to ensure reliable
                    operations
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

export default ProductionAnalysis;
