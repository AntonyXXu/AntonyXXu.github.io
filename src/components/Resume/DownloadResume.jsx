const DownloadResume = () => {
  const downloadResume = () => {
    window.location.href =
      "https://github.com/AntonyXXu/Windows_Wallpaper_Slideshow/files/6266052/AntonyXuResume.pdf";
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
