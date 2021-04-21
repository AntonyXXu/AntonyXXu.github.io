import Wrapper from "./Wrapper";
const Contactme = () => {
  return (
    <Wrapper>
      <main id="main">
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title contact">
              <h1>Contact Me</h1>{" "}
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <div className="info">
                  <h3>
                    Feel free to send contact me for any inquiries or questions!
                  </h3>
                  <a href="mailto:antonyxutong@gmail.com">
                    <h3> Email me at antonyxutong@gmail.com</h3>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/antonyxxu/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin"
                  >
                    <h3>Add and message me on LinkedIn</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default Contactme;
