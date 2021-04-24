const DownloadResume = () => {
  const downloadResume = () => {
    window.location.href =
      "(https://github.com/AntonyXXu/AntonyXXu.github.io/files/6369028/Resume.-.Antony.Xu.-.software.pdf)";
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
