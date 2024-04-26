import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const handleChange = (e) => {
    settext(e.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClear = () => {
    settext("");
  };

  return (
    <div>
      <h1 className="text-center">{props.heading}</h1>
      <div className="mt-3">
        <textarea
          className="form-Control textform-css"
          value={text}
          placeholder="Enter your text to analyze......"
          onChange={handleChange}
          name=""
          id="myBox"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="buttons mt-3">
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleDownClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>
          Handle Extra Spaces
        </button>
        <button className="btn btn-warning mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <hr />
      <div className="mt-5 text-center">
        <h1>Your text summary</h1>
        <p>
          {text.length > 0 ? (
            <>
              You have entered {text.split(" ").length} words and {text.length}{" "}
              characters
            </>
          ) : (
            "You have entered 0 words and 0 characters"
          )}
        </p>
      </div>
      <hr />
      <div className="mt-4 text-center mb-3">
        <h1>Preview of the text</h1>
        {text.length > 0 ? text : "No Text To Preview"}
      </div>
      <hr />
    </div>
  );
}
