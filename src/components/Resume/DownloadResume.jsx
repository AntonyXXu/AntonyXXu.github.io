const DownloadResume = () => {
  const downloadResume = () => {
    window.open(
      "http://github.com/AntonyXXu/AntonyXXu.github.io/files/6395920/Resume.-.Antony.Xu.pdf",
      "_blank"
    );
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
