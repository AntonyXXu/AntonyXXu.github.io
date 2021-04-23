const Controls = ({ toggleModal }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Eliminating Over $10M of Risk Through Adjusting Boiler Controls Logic
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
        <div className="col-lg-12">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Background:</strong>
                <br></br>
                In 2015, the utilities systems added burner management systems
                onto the steam generators. However, the controls were not well
                adjusted and there would regularly be boiler shutdowns due to
                controls issues. I analyzed historical trip data, identified
                controls solutions, and worked with Controls experts to update
                the logic and eliminate various shutdown scenarios without
                increasing safety risk. The sum of the actions below was able to
                eliminate over $10M/year in safety and financial risk at the
                refinery
              </li>
              <li>
                <strong>Actions:</strong>
                <br></br>
                <ul>
                  <li>
                    <strong> Eliminate Trip Scenarios:</strong> <br></br>In the
                    end of 2020, an Edmonton power disruption caused a utility
                    boiler to trip. It was generally accepted by others the trip
                    was due to insufficient air due to old blowers, something
                    that can't be fixed without spending millions of dollars.
                    However, I analyzed the data from the recent trip and
                    historical power outages, and found primary cause root cause
                    was not poor equipment, but a redundant trip system. I
                    created a risk analysis matrix, discussed details with
                    senior risk engineers and boiler experts, and ultimately
                    determined removing the trip would reduce trips without
                    sacrificing safety. After we presented the findings to
                    management and received endorsement, we successfully removed
                    the trip. This would likely reduce electrical caused boiler
                    trips by over 50%.
                  </li>
                  <li>
                    <strong> Challenge Process Limits:</strong> <br></br>
                    Historically, Fuel Gas pressure was operated at 5psig due to
                    operator preference, and over time it was set as the norm. I
                    contacted fired heater specialists, and worked with them to
                    understand the risks of reducing pressures. This led us to
                    realize we could reduce the operating fuel gas pressure. I
                    coordinated a team of instrumentation, mechanical engineers,
                    and controls engineers to perform a test without risking
                    reliability to understand lowest possible limits -
                    identifying we can get down to 1.5psi, this allowed us to
                    change operating setpoints on the system, increasing burner
                    utilization by 20%, increase ramping capabilities, and
                    reduce trip risk.
                  </li>
                  <li>
                    <strong> Controls Logic:</strong> <br></br> The last major
                    finding I had was through analyzing other trip scenarios in
                    boilers caused by linked process units. Using Python and
                    SeeQ, I identified the other half of the trips were due to
                    insufficient firing due to controls restrictions from boiler
                    setup. Understanding the root cause, I collaborated with the
                    controls and fired heater engineer to brainstorm solutions.
                    We worked through implementing updated controls logic, but
                    also performed operational tests adjusting air flow to the
                    boilers. By putting more air through the burners and
                    improving ramp capabilities, we were able to significantly
                    reduce the likelihood of unit shutdowns.
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

export default Controls;
