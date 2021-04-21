const Controls = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Eliminating Over $10M of Risk Through Adjusting Boiler Controls Logic
          (in progress)
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
              Refinery utilities systems were over 50years old, and had various
              risks. I analyzed all historical data of shutdown incidents and
              found various opportunities in controls logic. I developed new
              controls logic and additional monitoring tools to fully eliminate
              various trip risks and logic, reducing annual quantified risk by
              $10MM/year
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
