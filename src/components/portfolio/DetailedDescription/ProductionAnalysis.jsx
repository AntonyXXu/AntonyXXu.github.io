const ProductionAnalysis = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Identifying a $50M/y vulnerability through Data (in progress)
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
              Production Model Analysis I was responsible for model validation
              and analysis for mine operations. Following debugging and
              verification using Python, I built a tool to analyze millions of
              data points, ultimately identifying a single point of failure in
              the proposed project that would have costed over $50MM/year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductionAnalysis;
