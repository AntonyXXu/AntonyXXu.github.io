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
                    <strong>
                      {" "}
                      Identifying the opportunity through analytics
                    </strong>
                    <br></br> While looking for cost savings opportunities with
                    maintenance, we identified cooling tower rentals were quite
                    constly whenever they're done. Seeing that as a large
                    opportunity, I decided to analyze historical weather trends
                    in parallel with cooling tower performance in JMP, SeeQ, and
                    Python. From the data trends, I concluded there was a
                    possibility to operate fewer cooling towers in the lower
                    ambient conditions.
                  </li>
                  <li>
                    <strong> Designing and Implementing the System</strong>{" "}
                    <br></br>
                    Although I found there was potential to operate without the
                    rental towers during the Winter, it would be risky to
                    implement without expert consultation - the risk of the
                    project failing would have significant business impact on
                    refining processes. I reached out to cooling tower
                    specialists and vendors to confirm its feasibility, then
                    worked with them to design a bypass system that would allow
                    us to have a safety buffer in case something goes wrong.
                    Following the design and safety review, I worked with
                    procurement and maintenance to procure the necessary
                    resources, and oversaw the designed system's completion.
                  </li>
                  <li>
                    <strong> Troubleshooting the bypass system</strong>{" "}
                    <br></br>
                    Unfortunately, the system did not work per design. Although
                    there were no temperature impacts, there were hydraulic
                    constraints in piping systems prohibiting the full
                    maintenance of the lower section. As the person who lead the
                    system installation and have a good understanding of the
                    bypass, I took immediately initiative to understand the
                    constraints - the reason was likely due to blockages in
                    three 36" underground pipe over its 50 years of operations
                    (not something easy to anticipate due to difficulty of
                    accessing the pipe). Understanding the issue, I developed
                    various plans to bring the system back to normal including
                    installing additional pumps and adjusting level controls to
                    alleviate hydraulic constraints. Finally through a
                    combination of various back-up plans, we were able to
                    alleviate the hydraulic issues and allow for the entire
                    tower to be worked on
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
