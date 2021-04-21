const ProcessModel = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Compiling Process Model Results to Analyze Process Limits (in
          progress)
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
        <div className="col-lg-4">{/* Image */}</div>
        <div className="col-lg-8">
          <div className="modal-body">
            <p>
              Historical process model results were not in accessible files,
              making analysis difficult. I created a tool that parsed the
              historical results into a common database, and analyzed the
              results. After validating with live plant data, I identified
              process modification opportunities that improved yields and gas
              oil sales by $100k/y
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessModel;
