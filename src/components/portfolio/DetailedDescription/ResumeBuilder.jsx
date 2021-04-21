const ResumeBuilder = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Build Resumes with Google Sheet Data (in progress)
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
              Resume Builder Created a basic resume builder for a friend looking
              for applications. The program pulls data from a csv or Google
              Sheets document, and parses all of the data into a formatted
              Google Docs file.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
