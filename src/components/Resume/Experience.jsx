const Experience = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="resume-item">
          <h4>Software Development Intern</h4>
          <h5>Critical Mass</h5>
          <h5 className="resumeDate"> 2021 - Present</h5>
          <ul>
            <li>
              Reduced client and data provider setup times from over 5 days to
              less than 2 hours.
            </li>
            <li>
              Designed data pipelines and data processing backend, implemeting
              standardized request function to access customized information
              from Google, Facebook, Twitter, Linkedin, and Adobe API.
            </li>
            <li>
              Deployed configuration, pipeline, and data provider services with
              Lambdas, Step Functions, S3, SQS, and SNS on AWS
            </li>
            <li>
              Created detailed backend unit testing and validation protocols,
              ensuring that accurate requests are made to internal / external
              API and successful response data is transformed to correct format.
            </li>
            <li>
              Actively participated in daily scrum meetings and presented
              project features in internal and client demonstrations.
            </li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Process Contact and Optimization Engineer</h4>
          <h5>Imperial Oil</h5>
          <h5 className="resumeDate"> 2018 - 2020</h5>
          <ul>
            <li>
              Oversaw Strathcona refinery utility operations and helped manage
              teams of 10 operators daily for troubleshooting plant operations,
              optimize processes, capture cost saving initiatives. Ultimately
              achieved lowest refinery energy intensity in history
            </li>
            <li>
              Identified business optimization opportunities through process
              data analysis using JMP/SeeQ/Python.
              <ul>
                <li>
                  Reduced annual operating expense by $1.5M/yr through
                  identifying, designing, and leading a cross-functional team to
                  implement maintenance improvement project
                </li>
                <li>
                  Analyzed historical steam system shutdowns and updated process
                  control logic to eliminate various plant reliability risks
                  ($10M/yr)
                </li>
              </ul>
            </li>
            <li>
              Programmed a tool to aggregate process modelling data, and used a
              linear regression machine learning algorithm to analyze the data.
              Model results optimized yields, and increased sales by $100k/yr
            </li>
            <li>
              Coordinated plant tests and led project commissioning, including
              supporting the 45MW Cogen startup and designing, planning, and
              implementing maintenance projects to capture $1.5M/year in savings
            </li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Production and Optimization Co-op Engineer</h4>
          <h5>Canadian Natural Resources</h5>
          <h5 className="resumeDate"> 2017 - 2017</h5>
          <ul>
            <li>
              Modelled and created robust Tableau and Python analysis tools to
              analyze oil sands production. Results prevented ~$50M/yr in
              potential losses by identifying single point of failures
            </li>
            <li>
              Utilized HYSYS modelling to optimize product quality predictions,
              which resulted in a 50% reduction in prediction time
            </li>
            <li>
              Built detailed financial models to assess the feasibility of
              selling existing products to a new market following new asset
              acquisition
            </li>
            <li>
              Created 4+ design presentations and proposals a month for clients
              and account managers
            </li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Quality Co-op Engineer</h4>
          <h5>ERCO WorldWide</h5>
          <h5 className="resumeDate"> 2016 - 2016</h5>
          <ul>
            <li>Analyzed and monitored process parameters in the plant</li>
            <li>
              Assisted department managers in updating and verifying plant
              drawing and processed over 50 management of change items
            </li>
            <li>
              Participated in Process Hazard Analysis to reduce identify risk
              items at site
            </li>
            <li>
              Implemented sampling program to locate and troubleshoot
              groundwater contamination sources
            </li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Process Operator</h4>
          <h5>Teck Resources</h5>
          <h5 className="resumeDate"> 2015 - 2015</h5>

          <ul>
            <li>
              Constructed, commissioned, operated and decommissioned
              demonstration sized plant to upgrade copper concentration
            </li>
            <li>
              Operated and improved effluent treatment, through eliminating
              feeder issues that caused process delays
            </li>
            <li>
              Optimized autoclave reactor runtime, ultimately reducing overflow
              incidents by more than 50%
            </li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Process Engineering Intern</h4>
          <h5>Jacobs Engineering</h5>
          <h5 className="resumeDate"> 2014 - 2014</h5>
          <ul>
            <li>
              Wrote procedures for processing RFI and Squad Check documents
            </li>
            <li>Sketch process diagrams and control logic narratives</li>
            <li>Update equipment and instrumentation databases</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
