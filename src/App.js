function App() {
  return (
    <div className="App">
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img
              src="media/profile.jpg"
              alt=""
              class="img-fluid rounded-circle"
            ></img>
            <h1 class="text-light">
              <a href="/">Antony Xu</a>
            </h1>
            <div class="social-links mt-3 text-center">
              <a
                href="https://github.com/AntonyXXu"
                target="_blank"
                class="github"
              >
                <i class="bx bxl-skype"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/antonyxxu/"
                target="_blank"
                class="linkedin"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="mailto:antonyxutong@gmail.com" class="email">
                <i class="bx bxl-skype"></i>
              </a>
            </div>
          </div>
        </div>
        <nav class="nav-menu">
          <ul>
            <li class="active">
              <a href="index.html">
                <i class="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i class="bx bx-user"></i> <span>About Me</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i class="bx bx-book-content"></i> <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <i class="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i class="bx bx-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" class="mobile-nav-toggle d-xl-none">
          <i class="icofont-navigation-menu"></i>
        </button>
      </header>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>Antony Xu</h1>
          <p>
            I'm{" "}
            <span
              class="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
