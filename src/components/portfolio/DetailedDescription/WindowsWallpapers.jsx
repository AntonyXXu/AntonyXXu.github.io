import React, { useState } from "react";

const WindowsWallpapers = ({ toggleModal }) => {
  const [gif, updategif] = useState(true);
  const setgif = () => updategif(!gif);
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Creating a Slideshow of Wallpapers for multi-monitor Windows Machines
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
        <div className="col-lg-4 modal-img" onClick={setgif}>
          <h5>Toggle Gif</h5>
          <img
            src={
              !gif
                ? "./assets/portfolio/windowswallpaper.png"
                : "./assets/portfolio/windowswallpaper.gif"
            }
            className="img-fluid "
            alt="Wallpaper"
          />
          <br></br>
        </div>
        <div className="col-lg-8">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Built a program in Python to create a slideshow of desktop
                background photos for Windows. This functionality is not
                natively available in Windows due to screen setup. Windows
                backgrounds are set up as a single photo for multi-monitors. The
                program creates a new background image from stitched up photos,
                and sets the background of the desktop.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <strong> Changing Backgrounds</strong> <br></br>
                    The program first checks the total number of monitors and
                    the resolution of the monitors with Ctypes. Then, it pulls
                    the correct orientation photos and creates a new image with
                    the required screen sizes. The new image is then set as the
                    desktop background
                  </li>
                  <li>
                    <strong> Photo Management</strong> <br></br>
                    The photos that are used for the slideshow are sorted into
                    horizontal and vertical orientations, reducing re-work of
                    identifying various orientations. The images are then
                    resized into the same resolution of each screen.
                  </li>
                  <li>
                    <strong> Automatic Detection of any Changes </strong>
                    <br></br>
                    The program is set up to detect any changes in photo
                    directory (if any photos are added or removed), and if
                    number of monitors change, or if screen resolution changes.
                    It then re-runs the program to re-render the photos and save
                    the new monitor resolution and sizes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>{" "}
                <a
                  href="https://github.com/AntonyXXu/Windows_Wallpaper_Slideshow"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the Program!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowsWallpapers;
