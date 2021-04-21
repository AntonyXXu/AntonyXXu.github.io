const PersonalWebsite = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Building My Portfolio Website in React.js
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
            <p>aaaaa{/* Text */}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalWebsite;
