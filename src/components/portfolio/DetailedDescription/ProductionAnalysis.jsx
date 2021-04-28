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
        <div className="col-lg-4 modal-img align-items-center justify-content-center">
          <img
            src="./assets/portfolio/.jpg"
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
                  </li>
                  <li>
                    <strong> Analysis Results:</strong> <br></br>
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
