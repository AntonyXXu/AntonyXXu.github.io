const GhostRacer = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">About my Game GhostRacer</h4>
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
            <p>{/* Text */}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GhostRacer;
