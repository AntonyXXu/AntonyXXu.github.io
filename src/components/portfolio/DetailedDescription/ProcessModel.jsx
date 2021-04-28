const ProcessModel = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Compiling Process Model Results to Analyze Process Limits
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
            src="./assets/portfolio/coker_modal.jpg"
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
                Historically, process modelling files for fluid cokers were all
                outputted into text files of various sizes, and it was not
                possible to compare modelling results with each other. Although
                there is live plant data, often models provided parameters that
                are not able to be provided by live data, such as various
                process parameters in coking. In order to analyze the data, I
                created a tool in Python to parse the text files, and write the
                past 10 years of modelling results all into one csv file for all
                the North American fluid cokers.
              </li>
              <li>
                <strong>Details:</strong>
                <br></br>
                <ul>
                  <li>
                    <strong> Program Details:</strong> <br></br>
                    As the model result files are slightly different for each
                    coker, I created a generalized program to pull some common
                    data, then customized each individual
                  </li>
                  <li>
                    <strong> Analysis Results:</strong> <br></br>
                    After the data was parsed, I was able to compare data
                    between the various models and trend with past plant data
                    history. Through my analysis, I was able to identify a new
                    operating temperature trend, which provided further process
                    limits reducing shutdown and maintenance risks. Further, I
                    identified process modification opportunities based on the
                    modelled data. Slightly decreasing grid wash rates would
                    improve yields by ~3-5%, which increases gas oil sales by
                    $100k/y.
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

export default ProcessModel;
