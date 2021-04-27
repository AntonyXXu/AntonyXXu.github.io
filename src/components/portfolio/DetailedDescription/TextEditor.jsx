import React, { useState } from "react";

const TextEditor = ({ toggleModal }) => {
  const [gif, updategif] = useState(true);
  const setgif = () => updategif(!gif);

  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          Creating a Text Editor with Undo and Spell Check
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
          className="col-lg-5 modal-img align-items-center justify-content-center"
          onClick={setgif}
        >
          <h5>Toggle Gif</h5>
          <img
            src={
              !gif
                ? "./assets/portfolio/wurd.jpg"
                : "./assets/portfolio/wurd_demo.gif"
            }
            className="img-fluid "
            alt="Wurd Text Editor"
          />
        </div>
        <div className="col-lg-7">
          <div className="modal-body">
            <ul>
              <li>
                <strong>Technologies:</strong>
                <br></br>
                Applied some data structures and algorithms knowledge to
                implement a text editor capable of saving, loading, undoing, and
                spell-check/suggestions in C++. Project is based on an UCLA
                DS&amp;A school project. Applies three primary classes, one for
                text editing, one for undoing, and another for spell check. The
                text editor uses a list to maintain the lines of the editor, the
                undo functions use a stack of previous actions, and spell check
                is implemented using a trie (prefix tree) to provide spelling
                suggestions.
              </li>
              <li>
                <strong>Functionalities</strong>
                <br></br>
                <ul>
                  <li>
                    <strong> Text Editor:</strong> <br></br>
                    The text editor uses a linked list of strings to manage each
                    row, with an iterator keeping track of the current row. The
                    editor can delete through del/backspace, insert text, enter
                    new lines, and call the undo function to undo previous
                    actions. The editor can also save and load text files of
                    almost any size.
                  </li>
                  <li>
                    <strong> Undo:</strong> <br></br>A stack of all previous
                    actions are stored within the undo class. The undo class
                    batches common actions such as insertion of a word, or
                    deletion of a word, to a single stack item instead of saving
                    individual characters at a time.
                  </li>
                  <li>
                    <strong> Spell check: </strong>
                    <br></br>
                    The spell check took the longest to implement for me. All
                    dictionary data is inserted into the trie. Upon moving the
                    cursor on a misspelled word, the spell check will look for
                    suggestions based on the trie. The text editor also detects
                    misspelled text on the line and highlights it red.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Link:</strong>
                <a
                  href="https://github.com/AntonyXXu/Wurd_Text_Editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <br></br>
                  View the editor!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
