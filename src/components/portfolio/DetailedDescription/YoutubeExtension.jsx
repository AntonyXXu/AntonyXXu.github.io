import React, { useState } from "react";

const YoutubeExtension = ({ toggleModal }) => {
  const [gif, updategif] = useState(false);
  const setgif = () => updategif(!gif);

  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          I Built a Chrome Extension for redirecting to Youtube Search
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
        <div
          className="col-lg-6 modal-img align-items-center justify-content-center"
          onClick={setgif}
        >
          <h5>Toggle Gif</h5>
          <img
            src={
              !gif
                ? "./assets/portfolio/youtube_extension.png"
                : "./assets/portfolio/youtube_extension.gif"
            }
            className="img-fluid "
            alt="Youtube Extension"
          />
        </div>
        <div className="col-lg-6">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Built an extension in JavaScript to add a tab in Google Search.
                This immediately redirects you to Youtube, instead of using
                Google's video search. Applies knowledge of HTML DOM elements,
                and Google's Extension API. Mainly created because I wasn't a
                huge fan of Google's Search and missed the Youtube search from
                before.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <em>HTML Elements </em> <br></br>
                    The extension first checks the window location, before
                    executing the code to ensure the function is on the search
                    page. Then, it finds the search tabs and inserts a tab to
                    Youtube search.
                  </li>
                  <li>
                    <em>Search Query</em> <br></br>
                    The Google search query is extracted from the url, and is
                    added to the youtube Query.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/youtube-searching-embeded/gealinkpdbbldaacdegmmlhdbfnomohh?hl=en&authuser=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the Extension!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeExtension;
