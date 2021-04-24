const ResumeBuilder = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Build Resumes with Google Sheet Data</h4>
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
            src={"./assets/portfolio/resume_builder_modal.jpg"}
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
                Used Python with Google Sheets, Drive, and Docs API to build an
                application that pulls Sheets data to compile into various
                Google Docs files. Purpose was to create simple to read resumes
                in a Docs format from Google Forms submissions. I created this
                to help a friend out, who wanted to screen gaming group
                applications in a resume format.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <strong>Primary Function</strong> <br></br>
                    The program first pulls necessary credentials within the
                    Google API, then compiles all Sheets entries into a Python
                    dictionary. It then iterates through each item, creating a
                    new Google Docs file with the Applicant Name, and relevant
                    experiences and entries. The Docs file is formatted with the
                    relevant headers as well. Emails inputted in the input file
                    are given access to the folder containing all emails.
                  </li>
                  <li>
                    <strong> Additional Functions:</strong> <br></br>
                    While building the application, I tried to add on additional
                    functionality for learning purposes. The program can also
                    write data onto a specified Google Sheet,
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>
                <a
                  href="https://github.com/AntonyXXu/ResumeBuilder_GoogleAPI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the Resume Building Application
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
