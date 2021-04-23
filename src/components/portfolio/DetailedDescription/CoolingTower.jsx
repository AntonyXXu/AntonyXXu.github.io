const CoolingTower = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">
          Eliminating $1.5M/y in Maintenance Costs
        </h5>
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
        <div className="col-lg-12">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Background:</strong>
                <br></br>
                During cooling tower maintenance, one of the towers must be shut
                down at a time. Historically, the company had paid for rental
                towers to maintain temperatures (~$1.5M/y). After identifying we
                can perform maintenance in the Winter and skip rental costs, I
                designed a system to allow for two out of three tower operations
                without impacting production process units.
              </li>
              <li>
                <strong>Actions:</strong>
                <br></br>
                <ul>
                  <li>
                    <em> Identifying the opportunity through analytics</em>
                    <br></br>
                  </li>
                  <li>
                    <em> Designing and Implementing the System</em> <br></br>
                  </li>
                  <li>
                    <em> Troubleshooting the bypass system</em> <br></br>
                    Unfortunately, the system did not work per design. We
                    discovered there were hydraulic constraints in piping
                    systems prohibiting the full maintenance of the tower. As
                    the person who lead installing the system, I took initiative
                    to understand the constraints - following engineering
                    analysis, it was concluded the reason was likely due to
                    blockages in three 36" underground pipe (not something easy
                    to anticipate due to difficulty of accessing the pipe).
                    Understanding the issue, I developed various plans to bring
                    the system back to normal including installing additional
                    pumps and adjusting level controls to alleviate hydraulic
                    constraints. Finally through a combination of various
                    back-up plans, we were able to alleviate the hydraulic
                    issues and allow for the entire tower to be worked on
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

export default CoolingTower;
