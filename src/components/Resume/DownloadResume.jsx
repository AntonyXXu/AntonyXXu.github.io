const DownloadResume = () => {
  const downloadResume = () => {
    window.open("./assets/Resume/Resume - Antony Xu.pdf", "_blank");
  };
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-12 justify-content-center" data-aos="fade-right">
          <div className="text-center download">
            <button
              className="btn btn-outline-primary btn-lg "
              onClick={downloadResume}
            >
              Click to download my resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadResume;
